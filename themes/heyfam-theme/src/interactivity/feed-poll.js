import { store } from '@wordpress/interactivity';

const { state } = store( 'heyfam/feed', {
  state: {
    posts: [],
    hasPosts: false,
    lastFetch: null,
  },
  actions: {},
  callbacks: {
    *bootstrap() {
      const heyfam = store( 'heyfam' ).state;
      yield this.refresh( heyfam, true );
      setInterval( () => this.refresh( heyfam, false ), 10000 );
    },
    *refresh( heyfam, reset ) {
      if ( ! heyfam.famSlug ) return;
      const params = new URLSearchParams();
      if ( ! reset && state.lastFetch ) params.set( 'since', state.lastFetch );
      const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/feed?${params}`, {
        credentials: 'include',
        headers: { 'X-WP-Nonce': heyfam.nonce },
      } );
      if ( ! r.ok ) return;
      const body = yield r.json();
      const merged = reset ? body.posts : mergePosts( state.posts, body.posts );
      state.posts = merged.map( ( p ) => ( {
        ...p,
        reactionEntries: Object.entries( p.reactions || {} ),
      } ) );
      state.hasPosts = state.posts.length > 0;
      state.lastFetch = body.now;
    },
  },
} );

function mergePosts( existing, incoming ) {
  if ( ! incoming?.length ) return existing;
  const ids = new Set( existing.map( ( p ) => p.id ) );
  const fresh = incoming.filter( ( p ) => ! ids.has( p.id ) );
  return [ ...fresh, ...existing ].sort( ( a, b ) => b.created_at.localeCompare( a.created_at ) );
}
