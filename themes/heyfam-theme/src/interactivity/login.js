import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/login', {
  state: {
    stage: 'phone',
    phone: '', code: '',
    error: '', busy: false,
    // Computed booleans for IAPI directives (which only support simple
    // property paths or `!path`, not compound expressions like `!==`).
    get phoneFormHidden() { return this.stage !== 'phone'; },
    get codeFormHidden() { return this.stage !== 'code'; },
  },
  actions: {
    updatePhone( e ) { state.phone = e.target.value; state.error = ''; },
    updateCode( e ) { state.code = e.target.value.replace( /\D/g, '' ); state.error = ''; },
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
        const r = yield fetch( `${heyfam.apiBase}/login/start`, {
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
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const v = yield fetch( `${heyfam.apiBase}/login/verify`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { phone: state.phone, code: state.code } ),
        } );
        if ( ! v.ok ) {
          const body = yield v.json().catch( () => ( {} ) );
          state.error = body.error === 'bad_code' ? 'Wrong code or unknown phone. Try again.' : 'Could not verify. Try again.';
          state.busy = false;
          return;
        }
        // Authenticated. Find the user's first fam, fall back to /account.
        const f = yield fetch( `${heyfam.apiBase}/me/fams`, {
          method: 'GET', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        const fbody = yield f.json().catch( () => ( {} ) );
        const fams = ( fbody && fbody.fams ) || [];
        if ( fams.length && fams[ 0 ].url ) {
          window.location.href = fams[ 0 ].url;
          return;
        }
        window.location.href = '/account';
      } catch ( err ) {
        state.error = 'Network error. Try again.';
        state.busy = false;
      }
    },
  },
  callbacks: {
    init() {},
  },
} );

function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}
