import { store } from '@wordpress/interactivity';

/**
 * One store, two pages. On the feed page `state.posts` is the full list;
 * on the single page it's a one-element array. The server pre-decorates
 * comments (DFS-ordered, with depth/parent_name/etc.), so the client
 * never has to flatten or shape the payload.
 */
// Don't define `posts` / `hasPosts` in initial state — IAPI's `deepMerge`
// replaces arrays rather than merging, so an empty array here wipes the
// SSR-injected state. The directives degrade gracefully when those keys
// are absent (`data-wp-each` bails on undefined iterables).
const { state } = store( 'heyfam/feed', {
  state: {
    lastFetch: null,
  },
  actions: {},
  callbacks: {
    *bootstrap() {
      const heyfam = store( 'heyfam' ).state;
      // Initial state is SSR'd by PHP, so don't re-fetch immediately —
      // jump straight to the 10s polling loop for live updates.
      setInterval( () => store( 'heyfam/feed' ).callbacks.refresh( heyfam ), 10000 );
    },
    *refresh( heyfam ) {
      if ( ! heyfam.famSlug ) return;
      const post_id = currentPostId();
      const url = post_id
        ? `${heyfam.apiBase}/${heyfam.famSlug}/post/${post_id}`
        : `${heyfam.apiBase}/${heyfam.famSlug}/feed`;
      const r = yield fetch( url, {
        credentials: 'include',
        headers: { 'X-WP-Nonce': heyfam.nonce },
      } );
      if ( ! r.ok ) return;
      const body = yield r.json();
      state.posts    = post_id ? ( body.post ? [ body.post ] : [] ) : ( body.posts || [] );
      state.hasPosts = state.posts.length > 0;
      state.lastFetch = body.now;
    },
  },
} );

/** Returns the WP post id when we're on a singular post page, else 0. */
function currentPostId() {
  const m = document.body.className.match( /\bpostid-(\d+)\b/ );
  return m ? parseInt( m[ 1 ], 10 ) : 0;
}
