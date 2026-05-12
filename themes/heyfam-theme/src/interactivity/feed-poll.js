import { store, getContext } from '@wordpress/interactivity';
import { currentPostId } from '../lib/dom.js';

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
    // Delete-confirm dialog state.
    deleteOpen:   false,
    deleteTargetId: 0,
    deleting:     false,
    deleteError:  '',
  },
  actions: {
    togglePostMenu() {
      const ctx = getContext();
      const id  = ctx?.item?.id;
      if ( ! id || ! Array.isArray( state.posts ) ) return;
      const willOpen = ! ctx.item.menuOpen;
      // Close every other post's menu; only one is open at a time.
      for ( const p of state.posts ) p.menuOpen = false;
      ctx.item.menuOpen = willOpen;
    },
    *copyPostLink() {
      const ctx = getContext();
      const url = ctx?.item?.permalink;
      if ( ctx?.item ) ctx.item.menuOpen = false;
      if ( ! url ) return;
      try {
        yield navigator.clipboard.writeText( url );
      } catch ( err ) {
        // Last-ditch fallback: open the link so the user can copy from the address bar.
        window.prompt( 'Copy this link', url );
      }
    },
    editPost() {
      const ctx  = getContext();
      const post = ctx?.item;
      if ( post ) post.menuOpen = false;
      if ( ! post ) return;
      store( 'heyfam/composer' ).actions.openEditor( post );
    },
    deletePost() {
      const ctx = getContext();
      const id  = ctx?.item?.id;
      if ( ctx?.item ) ctx.item.menuOpen = false;
      if ( ! id ) return;
      state.deleteTargetId = id;
      state.deleteError    = '';
      state.deleteOpen     = true;
      document.body.classList.add( 'heyfam-modal-open' );
    },
    closeDeleteConfirm() {
      if ( state.deleting ) return;
      state.deleteOpen     = false;
      state.deleteTargetId = 0;
      state.deleteError    = '';
      document.body.classList.remove( 'heyfam-modal-open' );
    },
    onDeleteBackdrop( e ) {
      if ( e.target.classList?.contains( 'heyfam-modal' ) ) {
        store( 'heyfam/feed' ).actions.closeDeleteConfirm();
      }
    },
    *confirmDelete() {
      const id = state.deleteTargetId;
      if ( ! id || state.deleting ) return;
      state.deleting    = true;
      state.deleteError = '';
      const heyfam = store( 'heyfam' ).state;

      try {
        const r = yield fetch( `${ heyfam.apiBase }/${ heyfam.famSlug }/post/${ id }`, {
          method: 'DELETE',
          credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        if ( ! r.ok ) throw new Error( 'delete-failed' );

        // Optimistically drop from the local feed so the post disappears
        // immediately. The next refresh will reconcile.
        if ( Array.isArray( state.posts ) ) {
          state.posts = state.posts.filter( p => p.id !== id );
          state.hasPosts = state.posts.length > 0;
        }

        state.deleteOpen     = false;
        state.deleteTargetId = 0;
        document.body.classList.remove( 'heyfam-modal-open' );

        // On the single-post page, fall back to the feed since the post is gone.
        if ( currentPostId() === id ) {
          window.location.href = `/${ heyfam.famSlug }/`;
          return;
        }

        store( 'heyfam/feed' ).callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        state.deleteError = 'Could not delete. Try again.';
      } finally {
        state.deleting = false;
      }
    },
  },
  callbacks: {
    *bootstrap() {
      const heyfam = store( 'heyfam' ).state;
      // Initial state is SSR'd by PHP, so don't re-fetch immediately —
      // jump straight to the 10s polling loop for live updates.
      setInterval( () => store( 'heyfam/feed' ).callbacks.refresh( heyfam ), 10000 );
      // Outside-click closes any open post menu.
      document.addEventListener( 'click', ( ev ) => {
        if ( ! Array.isArray( state.posts ) ) return;
        if ( ev.target?.closest?.( '.heyfam-menu' ) ) return;
        for ( const p of state.posts ) if ( p.menuOpen ) p.menuOpen = false;
      } );
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

