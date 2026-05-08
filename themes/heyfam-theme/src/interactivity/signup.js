import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/signup', {
  state: {
    stage: 'phone',
    phone: '', code: '', name: '', famName: '', famSlug: '',
    error: '', busy: false,
    title: 'Start a fam',
  },
  actions: {
    updatePhone( e ) { state.phone = e.target.value; state.error = ''; },
    updateCode( e ) { state.code = e.target.value.replace( /\D/g, '' ); state.error = ''; },
    updateName( e ) { state.name = e.target.value; state.error = ''; },
    updateFamName( e ) {
      state.famName = e.target.value;
      // Auto-suggest slug
      if ( ! state.famSlug || state.famSlug === slugify( state.famName.slice( 0, -1 ) ) ) {
        state.famSlug = slugify( e.target.value );
      }
      state.error = '';
    },
    updateFamSlug( e ) { state.famSlug = slugify( e.target.value ); state.error = ''; },
    backToPhone() { state.stage = 'phone'; state.code = ''; state.error = ''; },
    *submitPhone( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      const phone = normalizePhone( state.phone );
      if ( ! phone ) { state.error = 'Phone must start with + and country code (e.g. +15555550100).'; return; }
      state.phone = phone;
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const r = yield fetch( `${heyfam.apiBase}/signup/start`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { phone } ),
        } );
        if ( ! r.ok ) throw new Error( 'send-failed' );
        state.stage = 'code';
      } catch ( err ) { state.error = 'Could not send code. Try again.'; }
      finally { state.busy = false; }
    },
    *submitCode( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( state.code.length !== 6 ) { state.error = 'Enter the 6-digit code.'; return; }
      // We can't verify the code here (signup/verify needs display_name + creates the user).
      // So we just advance to the profile stage and combine code+profile in the final POST.
      state.stage = 'profile';
    },
    *submitProfile( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( ! state.name.trim() ) { state.error = 'Enter your name.'; return; }
      if ( ! state.famName.trim() ) { state.error = 'Name your fam.'; return; }
      if ( ! /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/.test( state.famSlug ) ) {
        state.error = 'Fam URL: 3-32 letters/numbers/hyphens, no leading/trailing hyphen.'; return;
      }
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        // Verify code AND create the user.
        const v = yield fetch( `${heyfam.apiBase}/signup/verify`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { phone: state.phone, code: state.code, display_name: state.name } ),
        } );
        if ( ! v.ok ) {
          const body = yield v.json().catch( () => ( {} ) );
          state.error = body.error === 'bad_code' ? 'Wrong code. Try again.' : 'Could not verify. Try again.';
          if ( body.error === 'bad_code' ) state.stage = 'code';
          state.busy = false;
          return;
        }
        // Now create the fam. We're authenticated thanks to set_auth_cookie on signup_verify.
        const f = yield fetch( `${heyfam.apiBase}/fams`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { name: state.famName, slug: state.famSlug } ),
        } );
        const fbody = yield f.json();
        if ( ! f.ok ) {
          state.error = fbody.message || 'Could not create fam.';
          state.busy = false;
          return;
        }
        window.location.href = fbody.url;
      } catch ( err ) {
        state.error = 'Network error. Try again.';
        state.busy = false;
      }
    },
  },
  callbacks: {
    init() {
      // Pre-populate slug as user types fam name.
    },
  },
} );

function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}

function slugify( s ) {
  return ( s || '' ).toLowerCase().replace( /[^a-z0-9]+/g, '-' ).replace( /^-+|-+$/g, '' );
}
