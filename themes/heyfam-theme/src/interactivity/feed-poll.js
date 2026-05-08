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
      // Defer to a microtask — at the moment data-wp-init fires, the
      // per-iteration `data-wp-each` template hasn't fully attached, so a
      // synchronous state mutation can be lost. Setting state via setTimeout(0)
      // ensures the binding is live before we mutate.
      setTimeout( () => {
        store( 'heyfam/feed' ).callbacks.refresh( heyfam );
      }, 0 );
      setInterval( () => store( 'heyfam/feed' ).callbacks.refresh( heyfam ), 10000 );
    },
    *refresh( heyfam ) {
      if ( ! heyfam.famSlug ) return;
      // Always fetch the full feed — `since` would only return new POSTS, missing
      // updated reactions/comment-counts on existing posts. 50-post cap is fine.
      const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/feed`, {
        credentials: 'include',
        headers: { 'X-WP-Nonce': heyfam.nonce },
      } );
      if ( ! r.ok ) return;
      const body = yield r.json();
      state.posts = ( body.posts || [] ).map( ( p ) => ( {
        ...p,
        reactionEntries: Object.entries( p.reactions || {} ),
      } ) );
      state.hasPosts = state.posts.length > 0;
      state.lastFetch = body.now;
    },
  },
} );
