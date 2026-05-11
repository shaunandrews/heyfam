import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/dev', {
  state: {
    open:    false,
    busy:    false,
    message: '',
  },
  actions: {
    toggle() {
      state.open = ! state.open;
    },
    *resetMe() {
      const heyfam = store( 'heyfam' ).state;
      if ( ! window.confirm( "Reset your fams and unverify your phone? You'll re-onboard on next page load." ) ) return;
      state.busy = true;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/_dev/reset-me`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { delete_user: false } ),
        } );
        if ( ! r.ok ) throw new Error( yield r.text() );
        state.message = 'Reset done. Reloading…';
        setTimeout( () => location.assign( '/' ), 500 );
      } catch ( err ) {
        state.message = `Reset failed: ${ err.message }`;
      } finally {
        state.busy = false;
      }
    },
    *seedDemo() {
      const heyfam = store( 'heyfam' ).state;
      state.busy = true;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/_dev/seed-demo`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { reset: true } ),
        } );
        const j = yield r.json();
        if ( ! r.ok ) throw new Error( j?.error || 'seed failed' );
        state.message = `Seeded → ${ j.result.fam_url }`;
        setTimeout( () => location.assign( j.result.fam_url ), 800 );
      } catch ( err ) {
        state.message = `Seed failed: ${ err.message }`;
      } finally {
        state.busy = false;
      }
    },
  },
} );
