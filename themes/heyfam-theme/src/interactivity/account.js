import { store } from '@wordpress/interactivity';

const debounceTimers = new Map();

const initialPushPermission = typeof Notification !== 'undefined' ? Notification.permission : 'denied';

const { state, actions } = store( 'heyfam/account', {
  state: {
    fams: [],
    loading: true,
    loadError: '',
    pushPermission: initialPushPermission,
    get logoutUrl() {
      return store( 'heyfam' ).state.logoutUrl || '/wp-login.php?action=logout';
    },
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // pushPermission, fams, or loading change.
    pushNotEnabled:   initialPushPermission !== 'default',
    pushNotGranted:   initialPushPermission !== 'granted',
    pushNotDenied:    initialPushPermission !== 'denied',
    // Hide the empty-state line whenever the user has fams OR the page is still loading.
    hasFamsOrLoading: true,
  },
  actions: {
    *togglePref( e ) {
      const slug    = e.target.getAttribute( 'data-fam' );
      const event   = e.target.getAttribute( 'data-event' );
      const channel = e.target.getAttribute( 'data-channel' );
      const checked = !! e.target.checked;
      const fam = state.fams.find( f => f.slug === slug );
      if ( ! fam ) return;
      // Mutate the reactive proxy so the checkbox stays in sync.
      fam.prefs[ event ][ channel ] = checked;
      // Debounce the save per-fam so rapid toggles coalesce.
      const key = `prefs:${slug}`;
      if ( debounceTimers.has( key ) ) clearTimeout( debounceTimers.get( key ) );
      debounceTimers.set( key, setTimeout( () => savePrefs( slug ), 500 ) );
    },
    *requestPush() {
      if ( typeof Notification === 'undefined' ) return;
      try {
        const result = yield Notification.requestPermission();
        state.pushPermission = result;
        recomputeVisibility();
        if ( result === 'granted' ) {
          // Reload to let push-subscribe.js register normally on its window.load handler.
          window.location.reload();
        }
      } catch ( err ) {
        // ignore
      }
    },
  },
  callbacks: {
    *init() {
      // SSR doesn't render the is-hidden class on these elements. IAPI's hydration
      // skips re-applying class bindings whose initial DOM state matches the
      // proxy. Toggle each flag through its opposite to trip the proxy's
      // change-detection, then recomputeVisibility() re-asserts the right values.
      state.pushNotEnabled   = ! state.pushNotEnabled;
      state.pushNotGranted   = ! state.pushNotGranted;
      state.pushNotDenied    = ! state.pushNotDenied;
      state.hasFamsOrLoading = ! state.hasFamsOrLoading;
      recomputeVisibility();

      const heyfam = store( 'heyfam' ).state;
      if ( ! heyfam.userId ) {
        // Not logged in; bounce to login.
        window.location.href = '/login';
        return;
      }
      try {
        const r = yield fetch( `${heyfam.apiBase}/me/fams`, {
          credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        if ( ! r.ok ) throw new Error( 'load-failed' );
        const body = yield r.json();
        const fams = ( body && body.fams ) || [];
        // Fetch prefs for each fam in parallel.
        const withPrefs = yield Promise.all( fams.map( async ( fam ) => {
          try {
            const pr = await fetch( `${heyfam.apiBase}/${fam.slug}/prefs`, {
              credentials: 'include',
              headers: { 'X-WP-Nonce': heyfam.nonce },
            } );
            if ( ! pr.ok ) return { ...fam, prefs: defaultPrefs() };
            const pb = await pr.json();
            return { ...fam, prefs: ( pb && pb.prefs ) || defaultPrefs() };
          } catch ( e ) {
            return { ...fam, prefs: defaultPrefs() };
          }
        } ) );
        state.fams = withPrefs;
        state.loading = false;
        recomputeVisibility();
      } catch ( err ) {
        state.loading = false;
        state.loadError = 'Could not load your fams. Try refreshing.';
        recomputeVisibility();
      }
    },
  },
} );

function recomputeVisibility() {
  state.pushNotEnabled   = state.pushPermission !== 'default';
  state.pushNotGranted   = state.pushPermission !== 'granted';
  state.pushNotDenied    = state.pushPermission !== 'denied';
  state.hasFamsOrLoading = !! state.fams.length || !! state.loading;
}

function defaultPrefs() {
  return {
    posts:     { push: true, email: true,  sms: true },
    comments:  { push: true, email: false, sms: false },
    reactions: { push: true, email: false, sms: false },
  };
}

async function savePrefs( slug ) {
  const heyfam = store( 'heyfam' ).state;
  const fam = state.fams.find( f => f.slug === slug );
  if ( ! fam ) return;
  try {
    await fetch( `${heyfam.apiBase}/${slug}/prefs`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
      body: JSON.stringify( { prefs: fam.prefs } ),
    } );
  } catch ( err ) {
    // Silent failure — next toggle will retry.
  }
}
