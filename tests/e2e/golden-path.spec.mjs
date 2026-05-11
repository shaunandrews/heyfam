import { test, expect, request } from '@playwright/test';

/**
 * The golden path. Walks one user through signup, fam creation, posting,
 * inviting a second user, and reactions. Uses the dev-mode auth bypass
 * (code 000000) so this runs without Twilio credentials.
 *
 * State assumption: phone numbers are unique per run (Date.now() seeded).
 * Once `wp heyfam reset-me` and `wp heyfam seed-demo` exist (Phase C of
 * the test-infra plan), this spec will gain a globalSetup that resets
 * known phone numbers between runs. Until then, fresh numbers per run
 * keep the dev-mode path idempotent.
 */

const SEED  = Math.floor( Date.now() / 1000 ).toString( 36 );
const ALICE = `+1555555${ String( Date.now() ).slice( -4 ) }`;
const BOB   = `+1555556${ String( Date.now() ).slice( -4 ) }`;
const SLUG  = `e2e${ SEED }`;

test.describe.serial( 'golden path', () => {
  test( 'alice signs up and lands on her new fam', async ( { page } ) => {
    await page.goto( '/signup' );
    await page.getByPlaceholder( /\+/ ).fill( ALICE );
    await page.getByRole( 'button', { name: /send|next/i } ).click();
    await page.getByPlaceholder( /code/i ).fill( '000000' );
    await page.getByRole( 'button', { name: /next|verify/i } ).click();
    await page.getByPlaceholder( /your name/i ).fill( 'Alice' );
    await page.getByPlaceholder( /name your fam/i ).fill( 'Alice Family' );
    await page.getByPlaceholder( /url|slug/i ).fill( SLUG );
    await page.getByRole( 'button', { name: /create|finish/i } ).click();

    await expect( page ).toHaveURL( new RegExp( `/${ SLUG }/` ) );
    await expect( page.getByText( /say hey to your fam|no posts yet/i ) ).toBeVisible();
  } );

  test( 'alice posts to the fam', async ( { page } ) => {
    await page.goto( `/${ SLUG }/` );
    await page.getByPlaceholder( /what's up|share/i ).fill( 'Hello from e2e' );
    await page.getByRole( 'button', { name: /post|share/i } ).click();
    await expect( page.getByText( 'Hello from e2e' ) ).toBeVisible( { timeout: 15000 } );
  } );

  // TODO(Phase C): un-skip once GET /wp-json/heyfam/v1/_dev/last-invite exists
  // (lands in test-infra plan Task 7 — dev REST routes). The route returns
  // { code } for the most recent invite issued to a given phone.
  test.skip( 'alice invites bob', async ( { page } ) => {
    await page.goto( `/${ SLUG }/` );
    await page.getByRole( 'link', { name: /invite/i } ).click();
    await page.getByPlaceholder( /phone/i ).fill( BOB );
    await page.getByRole( 'button', { name: /send invite/i } ).click();

    const api = await request.newContext( { baseURL: process.env.BASE_URL } );
    const r   = await api.get( `/wp-json/heyfam/v1/_dev/last-invite?phone=${ encodeURIComponent( BOB ) }` );
    expect( r.ok() ).toBeTruthy();
    const { code } = await r.json();
    expect( code ).toMatch( /^[A-Za-z0-9_-]+$/ );

    test.info().attachments.push( { name: 'invite-code', body: Buffer.from( code ), contentType: 'text/plain' } );
  } );

  // TODO(Phase C): depends on the invite test above (and its dev REST route).
  test.skip( 'bob accepts and lands in the fam', async ( { browser } ) => {
    const ctx  = await browser.newContext();
    const page = await ctx.newPage();
    const api  = await ctx.request;
    const r    = await api.get( `/wp-json/heyfam/v1/_dev/last-invite?phone=${ encodeURIComponent( BOB ) }` );
    const { code } = await r.json();
    await page.goto( `/i/${ code }` );
    await page.getByPlaceholder( /\+/ ).fill( BOB );
    await page.getByRole( 'button', { name: /next|continue/i } ).click();
    await page.getByPlaceholder( /code/i ).fill( '000000' );
    await page.getByPlaceholder( /your name/i ).fill( 'Bob' );
    await page.getByRole( 'button', { name: /accept|join/i } ).click();
    await expect( page ).toHaveURL( new RegExp( `/${ SLUG }/` ) );
    await expect( page.getByText( 'Hello from e2e' ) ).toBeVisible();
  } );

  // TODO(Phase C): comments + reactions step depends on bob being in the fam.
  test.skip( 'bob comments and alice reacts', async ( { browser } ) => {
    const bobCtx  = await browser.newContext();
    const bobPage = await bobCtx.newPage();
    await bobPage.goto( '/login' );
    await bobPage.getByPlaceholder( /\+/ ).fill( BOB );
    await bobPage.getByRole( 'button', { name: /next|send/i } ).click();
    await bobPage.getByPlaceholder( /code/i ).fill( '000000' );
    await bobPage.getByRole( 'button', { name: /next|verify/i } ).click();
    await bobPage.goto( `/${ SLUG }/` );
    await bobPage.getByPlaceholder( /add a comment/i ).fill( 'hey alice' );
    await bobPage.getByRole( 'button', { name: /send/i } ).click();
    await expect( bobPage.getByText( 'hey alice' ) ).toBeVisible();

    const aliceCtx  = await browser.newContext();
    const alicePage = await aliceCtx.newPage();
    await alicePage.goto( '/login' );
    await alicePage.getByPlaceholder( /\+/ ).fill( ALICE );
    await alicePage.getByRole( 'button', { name: /next|send/i } ).click();
    await alicePage.getByPlaceholder( /code/i ).fill( '000000' );
    await alicePage.getByRole( 'button', { name: /next|verify/i } ).click();
    await alicePage.goto( `/${ SLUG }/` );
    await expect( alicePage.getByText( 'hey alice' ) ).toBeVisible( { timeout: 15000 } );

    const reactButton = alicePage.getByRole( 'button', { name: /[+]/ } ).first();
    await reactButton.click();
    await alicePage.locator( 'emoji-picker' ).first().waitFor( { state: 'visible' } );
    await alicePage.keyboard.press( 'Escape' );
    const heyfam = await aliceCtx.request;
    const nonce  = await alicePage.evaluate( () => window.wp?.apiFetch?.nonce || '' );
    await heyfam.post( `/wp-json/heyfam/v1/${ SLUG }/reactions`, {
      headers: { 'X-WP-Nonce': nonce, 'Content-Type': 'application/json' },
      data:    { target_type: 'post', target_id: 1, emoji: '👍' },
    } );
    await expect( alicePage.getByText( '👍' ) ).toBeVisible( { timeout: 12000 } );
  } );
} );
