import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/invite', {
  state: {
    stage: 'phone',
    code: '',     // invite code, from query string
    phone: '',
    smsCode: '',
    name: '',
    famName: '', inviter: '', phoneHint: '',
    previewLoaded: false, previewError: '',
    error: '', busy: false,
    isAuthed: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // the inputs change. phoneFormHidden depends on both stage and
    // previewError — a broken invite link should keep the form hidden.
    phoneFormHidden:    false,
    codeFormHidden:     true,
    loggedInFormHidden: true,
  },
  actions: {
    updatePhone( e ) { state.phone = e.target.value; state.error = ''; },
    updateCode( e ) { state.smsCode = e.target.value.replace( /\D/g, '' ); state.error = ''; },
    updateName( e ) { state.name = e.target.value; state.error = ''; },
    backToPhone() { setStage( 'phone' ); state.smsCode = ''; state.error = ''; },
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
      if ( state.smsCode.length !== 6 ) { state.error = 'Enter the 6-digit code.'; return; }
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const r = yield fetch( `${heyfam.apiBase}/invites/accept`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( {
            code: state.code,
            phone: state.phone,
            sms_code: state.smsCode,
            display_name: state.name,
          } ),
        } );
        const body = yield r.json().catch( () => ( {} ) );
        if ( ! r.ok ) {
          if ( body.error === 'bad_code' ) state.error = 'Wrong code. Try again.';
          else if ( body.error === 'invalid_or_expired' ) state.error = 'This invite is no longer valid.';
          else if ( body.error === 'locked_out' ) state.error = 'Too many tries. Wait a bit.';
          else state.error = 'Could not accept invite. Try again.';
          state.busy = false;
          return;
        }
        window.location.href = body.url;
      } catch ( err ) {
        state.error = 'Network error. Try again.';
        state.busy = false;
      }
    },
    *joinAsCurrentUser( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const r = yield fetch( `${heyfam.apiBase}/invites/accept`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { code: state.code } ),
        } );
        const body = yield r.json().catch( () => ( {} ) );
        if ( ! r.ok ) {
          if ( body.error === 'invalid_or_expired' )    state.error = 'This invite is no longer valid.';
          else if ( body.error === 'no_user_phone' )    state.error = 'This invite was sent to a different number than the one on your account.';
          else                                           state.error = 'Could not join. Try again.';
          state.busy = false;
          return;
        }
        window.location.href = body.url;
      } catch ( err ) {
        state.error = 'Network error. Try again.';
        state.busy = false;
      }
    },
  },
  callbacks: {
    *init() {
      // SSR doesn't render the is-hidden class on these forms. IAPI's hydration
      // skips re-applying class bindings whose initial DOM state matches the
      // proxy. Toggle each flag through its opposite to trip the proxy's
      // change-detection, then recomputeVisibility() re-asserts the right values.
      state.phoneFormHidden    = ! state.phoneFormHidden;
      state.codeFormHidden     = ! state.codeFormHidden;
      state.loggedInFormHidden = ! state.loggedInFormHidden;

      const heyfam = store( 'heyfam' ).state;
      state.isAuthed = !! heyfam.userId;
      recomputeVisibility();

      // Pull invite code from the URL.
      const params = new URLSearchParams( window.location.search );
      const code = params.get( 'heyfam_invite_code' ) || '';
      if ( ! code ) {
        setPreviewError( 'No invite code in URL. Check the link your inviter sent you.' );
        return;
      }
      state.code = code;

      try {
        const r = yield fetch(
          `${heyfam.apiBase}/invites/preview?code=${encodeURIComponent( code )}`,
          { credentials: 'include' }
        );
        const body = yield r.json().catch( () => ( {} ) );
        if ( ! r.ok ) {
          if ( body.error === 'used' )    setPreviewError( 'This invite has already been used.' );
          else if ( body.error === 'expired' ) setPreviewError( 'This invite has expired.' );
          else                                 setPreviewError( 'This invite link is not valid.' );
          return;
        }
        state.famName       = body.fam_name;
        state.inviter       = body.inviter;
        state.phoneHint     = body.phone_hint;
        state.previewLoaded = true;
        recomputeVisibility();
      } catch ( err ) {
        setPreviewError( 'Could not load invite. Check your connection.' );
      }
    },
  },
} );

function recomputeVisibility() {
  // Logged in: skip the phone+SMS dance entirely. Show the one-button form
  // once the preview loads (so we know what fam they're joining); hide it
  // if preview failed.
  if ( state.isAuthed ) {
    state.phoneFormHidden    = true;
    state.codeFormHidden     = true;
    state.loggedInFormHidden = ! state.previewLoaded || !! state.previewError;
    return;
  }
  state.phoneFormHidden    = state.stage !== 'phone' || !! state.previewError;
  state.codeFormHidden     = state.stage !== 'code';
  state.loggedInFormHidden = true;
}

function setStage( next ) {
  state.stage = next;
  recomputeVisibility();
}

function setPreviewError( err ) {
  state.previewError = err;
  recomputeVisibility();
}

function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}
