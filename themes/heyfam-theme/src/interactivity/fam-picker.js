import { store, getContext } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/famPicker', {
  state: {
    open: false,
    fams: [],
    currentName: 'Pick a fam',
  },
  actions: {
    toggle() { state.open = ! state.open; },
  },
  callbacks: {
    *load() {
      const heyfam = ( yield import( '@wordpress/interactivity' ) ).store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/me/fams`, {
          credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        const body = yield r.json();
        state.fams = body.fams || [];
        const current = state.fams.find( ( f ) => f.slug === heyfam.famSlug );
        if ( current ) state.currentName = current.name;
      } catch ( e ) { /* ignore */ }
    },
  },
} );
