import { store } from '@wordpress/interactivity';
import { normalizePhone, parsePhoneList } from '../lib/phone.js';
import { slugify } from '../lib/slug.js';

const { state, actions } = store( 'heyfam/signup', {
  state: {
    step: 'phone',
    phone: '', code: '', name: '', famName: '', famSlug: '',
    inviteText: '', inviteNote: '',
    parsedPhones: [],
    parsedPhonesEntries: [],
    inviteResults: [],
    inviteResultsEntries: [],
    famUrl: '',
    error: '', busy: false,
    title: 'Start a fam',
    devMode: false,
    hasContactPicker: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and toggle them in setStep().
    step1Hidden: false,
    step2Hidden: true,
    step3Hidden: true,
    step4Hidden: true,
    stepperStep1Current: true,  stepperStep1Done: false,
    stepperStep2Current: false, stepperStep2Done: false,
    stepperStep3Current: false, stepperStep3Done: false,
    stepperStep4Current: false, stepperStep4Done: false,
  },
  actions: {
    updatePhone( e )      { state.phone = e.target.value; state.error = ''; },
    updateCode( e )       { state.code = e.target.value.replace( /\D/g, '' ); state.error = ''; },
    updateName( e )       { state.name = e.target.value; state.error = ''; },
    updateFamName( e ) {
      state.famName = e.target.value;
      // Auto-suggest slug while the user is still typing the name; stop once
      // they've edited the slug themselves.
      if ( ! state.famSlug || state.famSlug === slugify( state.famName.slice( 0, -1 ) ) ) {
        state.famSlug = slugify( e.target.value );
      }
      state.error = '';
    },
    updateFamSlug( e )    { state.famSlug = slugify( e.target.value ); state.error = ''; },
    updateInviteText( e ) { state.inviteText = e.target.value; reparsePhones(); },
    updateInviteNote( e ) { state.inviteNote = e.target.value.slice( 0, 120 ); },
    backToPhone()         { setStep( 'phone' ); state.code = ''; state.error = ''; },

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
        setStep( 'code' );
      } catch ( err ) { state.error = 'Could not send code. Try again.'; }
      finally { state.busy = false; }
    },

    *submitCode( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( state.code.length !== 6 ) { state.error = 'Enter the 6-digit code.'; return; }
      // We can't actually verify the code here — signup/verify creates the user
      // and the fam in one shot, so we just advance to the fam step and combine
      // everything in submitFam() below.
      setStep( 'fam' );
    },

    *submitFam( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( ! state.name.trim() )    { state.error = 'Enter your name.'; return; }
      if ( ! state.famName.trim() ) { state.error = 'Name your fam.'; return; }
      if ( ! /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/.test( state.famSlug ) ) {
        state.error = 'Fam URL: 3-32 letters/numbers/hyphens, no leading/trailing hyphen.'; return;
      }
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        // signup/verify creates the user, sets the auth cookie, AND creates
        // the fam in one shot — combining avoids the WP REST nonce vs new-
        // session race that would otherwise reject the follow-up /fams call.
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
        const body = yield v.json().catch( () => ( {} ) );
        if ( ! v.ok || ! body.ok ) {
          if ( body.error === 'bad_code' ) {
            state.error = 'Wrong code. Try again.';
            setStep( 'code' );
          } else if ( [ 'slug_taken', 'invalid_slug', 'reserved_slug' ].includes( body.error ) ) {
            state.error = body.message || 'That fam URL is unavailable.';
          } else {
            state.error = body.message || 'Could not verify. Try again.';
          }
          state.busy = false;
          return;
        }
        // The fresh signup gave us a new REST nonce; swap it in so the
        // immediately-following invite POST authenticates as the new user.
        if ( body.nonce ) {
          store( 'heyfam' ).state.nonce = body.nonce;
        }
        state.famUrl = body.fam_url || '';
        setStep( 'invite' );
      } catch ( err ) {
        state.error = 'Network error. Try again.';
      } finally { state.busy = false; }
    },

    *pickContacts() {
      if ( ! ( 'contacts' in navigator ) || ! ( 'ContactsManager' in window ) ) return;
      try {
        const picked = yield navigator.contacts.select( [ 'tel' ], { multiple: true } );
        if ( ! picked || ! picked.length ) return;
        const phones = picked.flatMap( ( c ) => c.tel || [] );
        const existing = state.inviteText.trim();
        state.inviteText = existing
          ? existing + '\n' + phones.join( '\n' )
          : phones.join( '\n' );
        reparsePhones();
      } catch ( err ) { /* cancelled or blocked */ }
    },

    *submitInvites( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      const heyfam  = store( 'heyfam' ).state;
      const famSlug = state.famSlug;
      const valid   = state.parsedPhones.filter( ( p ) => p.valid ).map( ( p ) => p.e164 );
      if ( ! valid.length ) {
        // Treat an empty invite list the same as Skip — preserves the redirect
        // and writes the skip flag so the nudge banner can decide what to do.
        yield actions.skipInvites();
        return;
      }
      state.busy = true;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${famSlug}/invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { phones: valid, message_note: state.inviteNote || '' } ),
        } );
        const body = yield r.json().catch( () => ( {} ) );
        if ( ! r.ok ) {
          state.error = body.message || 'Could not send invites. Try again.';
          state.busy = false;
          return;
        }
        state.inviteResults        = body.issued || [];
        state.inviteResultsEntries = state.inviteResults.map( ( v, i ) => [ i, v ] );
        if ( state.famUrl ) {
          window.location.href = state.famUrl;
          return;
        }
        window.location.href = '/account';
      } catch ( err ) {
        state.error = 'Network error. Try again.';
      } finally { state.busy = false; }
    },

    *skipInvites() {
      const heyfam = store( 'heyfam' ).state;
      try {
        yield fetch( `${heyfam.apiBase}/me/skip-invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
      } catch ( err ) { /* not blocking */ }
      if ( state.famUrl ) {
        window.location.href = state.famUrl;
        return;
      }
      window.location.href = '/account';
    },
  },
  callbacks: {
    *init() {
      state.devMode          = !! store( 'heyfam' ).state.devMode;
      state.hasContactPicker = ( 'contacts' in navigator ) && ( 'ContactsManager' in window );

      // SSR doesn't render is-hidden on these forms. IAPI's hydration skips
      // re-applying class bindings whose initial DOM state matches the proxy.
      // Toggle each flag through its opposite to trip the proxy's change-
      // detection, then setStep() re-asserts the right values.
      state.step1Hidden = ! state.step1Hidden;
      state.step2Hidden = ! state.step2Hidden;
      state.step3Hidden = ! state.step3Hidden;
      state.step4Hidden = ! state.step4Hidden;
      setStep( state.step );

      const heyfam = store( 'heyfam' ).state;
      if ( heyfam.userId ) {
        try {
          const r = yield fetch( `${heyfam.apiBase}/me/fams`, {
            credentials: 'include',
            headers: { 'X-WP-Nonce': heyfam.nonce },
          } );
          if ( r.ok ) {
            const body = yield r.json();
            const fams = body.fams || [];
            if ( fams.length && fams[ 0 ].url ) {
              window.location.href = fams[ 0 ].url;
              return;
            }
            // Logged in but no fams (rare — invite path or a former member).
            // Drop them at the fam step so they can spin one up.
            setStep( 'fam' );
            return;
          }
        } catch ( err ) { /* fall through to step 1 */ }
      }
    },
  },
} );

function setStep( next ) {
  state.step        = next;
  state.step1Hidden = next !== 'phone';
  state.step2Hidden = next !== 'code';
  state.step3Hidden = next !== 'fam';
  state.step4Hidden = next !== 'invite';

  const order = { phone: 1, code: 2, fam: 3, invite: 4 };
  const n     = order[ next ] || 1;
  for ( let i = 1; i <= 4; i++ ) {
    state[ `stepperStep${i}Current` ] = i === n;
    state[ `stepperStep${i}Done` ]    = i <  n;
  }
}

function reparsePhones() {
  const parsed = parsePhoneList( state.inviteText );
  state.parsedPhones        = parsed;
  state.parsedPhonesEntries = parsed.map( ( v, i ) => [ i, v ] );
}
