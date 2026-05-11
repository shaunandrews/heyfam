import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/signup', {
  state: {
    stage: 'phone',
    phone: '', code: '', name: '', famName: '', famSlug: '',
    error: '', busy: false,
    title: 'Start a fam',
    devMode: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and toggle them in setStage().
    phoneFormHidden:   false,
    codeFormHidden:    true,
    profileFormHidden: true,
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
    backToPhone() { setStage( 'phone' ); state.code = ''; state.error = ''; },
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
        setStage( 'code' );
      } catch ( err ) { state.error = 'Could not send code. Try again.'; }
      finally { state.busy = false; }
    },
    *submitCode( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( state.code.length !== 6 ) { state.error = 'Enter the 6-digit code.'; return; }
      // We can't verify the code here (signup/verify needs display_name + creates the user).
      // So we just advance to the profile stage and combine code+profile in the final POST.
      setStage( 'profile' );
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
        // signup/verify creates the user, sets the auth cookie, AND creates the
        // fam in one shot — combining avoids the WP REST nonce vs new-session
        // race that would otherwise reject the follow-up /fams call.
        const v = yield fetch( `${heyfam.apiBase}/signup/verify`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( {
            phone:        state.phone,
            code:         state.code,
            display_name: state.name,
            fam_name:     state.famName,
            fam_slug:     state.famSlug,
          } ),
        } );
        const vbody = yield v.json().catch( () => ( {} ) );
        if ( ! v.ok || ! vbody.ok ) {
          if ( vbody.error === 'bad_code' ) {
            state.error = 'Wrong code. Try again.';
            setStage( 'code' );
          } else if ( vbody.error === 'slug_taken' || vbody.error === 'invalid_slug' || vbody.error === 'reserved_slug' ) {
            state.error = vbody.message || 'That fam URL is unavailable.';
          } else {
            state.error = vbody.message || 'Could not verify. Try again.';
          }
          state.busy = false;
          return;
        }
        if ( vbody.fam_url ) {
          window.location.href = vbody.fam_url;
          return;
        }
        // No fam created (shouldn't happen in this flow). Fall back to /account.
        window.location.href = '/account';
      } catch ( err ) {
        state.error = 'Network error. Try again.';
        state.busy = false;
      }
    },
  },
  callbacks: {
    init() {
      // Pull devMode from the global heyfam state (set by functions.php when
      // TWILIO_ACCOUNT_SID is missing). Showed as a hint on the code step.
      state.devMode = !! store( 'heyfam' ).state.devMode;
      // SSR doesn't render the is-hidden class on these forms. IAPI's hydration
      // skips re-applying class bindings whose initial DOM state matches the
      // proxy. Toggle each flag through its opposite to trip the proxy's
      // change-detection, then setStage() re-asserts the right values.
      state.phoneFormHidden   = ! state.phoneFormHidden;
      state.codeFormHidden    = ! state.codeFormHidden;
      state.profileFormHidden = ! state.profileFormHidden;
      setStage( state.stage );
    },
  },
} );

function setStage( next ) {
  state.stage             = next;
  state.phoneFormHidden   = next !== 'phone';
  state.codeFormHidden    = next !== 'code';
  state.profileFormHidden = next !== 'profile';
}

function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}

function slugify( s ) {
  return ( s || '' ).toLowerCase().replace( /[^a-z0-9]+/g, '-' ).replace( /^-+|-+$/g, '' );
}
