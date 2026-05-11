import { store } from '@wordpress/interactivity';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

const { state, actions } = store( 'heyfam/nudge', {
  state: {
    visible: false,
  },
  actions: {
    *dismiss() {
      state.visible = false;
      try {
        const heyfam = store( 'heyfam' ).state;
        yield fetch( `${heyfam.apiBase}/me/dismiss-nudge`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
      } catch ( err ) { /* not blocking */ }
    },
  },
  callbacks: {
    init() {
      const heyfam = store( 'heyfam' ).state;
      // Anonymous visitors never see the nudge.
      if ( ! heyfam.userId )           return;
      // Persistent dismissal — server already knows the user closed it.
      if ( heyfam.nudgeDismissedAt )   return;
      // Only show if the user actually chose to skip during signup.
      if ( ! heyfam.invitesSkippedAt ) return;
      // Time-box the nudge: after 7 days from onboarding, stop bugging them.
      const onboarded = Date.parse( heyfam.onboardedAt );
      if ( ! onboarded )                          return;
      if ( Date.now() - onboarded > SEVEN_DAYS )  return;
      state.visible = true;
    },
  },
} );
