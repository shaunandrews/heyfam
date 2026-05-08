import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/comments', {
  state: {
    composing: 0, // parent_id we're replying to
    body: '',
    submitting: false,
  },
  actions: {
    reply() {
      const ctx = getContext();
      store( 'heyfam/comments' ).state.composing = ctx.parent_id || 0;
    },
    updateBody( e ) {
      store( 'heyfam/comments' ).state.body = e.target.value;
    },
    *submit( e ) {
      e.preventDefault();
      const s = store( 'heyfam/comments' ).state;
      if ( s.submitting || ! s.body.trim() ) return;
      s.submitting = true;
      const heyfam = store( 'heyfam' ).state;
      const post_id = parseInt( document.querySelector( '[data-post-id]' )?.dataset.postId, 10 );
      try {
        const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/comments`, {
          method: 'POST', credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': heyfam.nonce,
          },
          body: JSON.stringify( { post_id, parent_id: s.composing, body: s.body } ),
        } );
        if ( ! r.ok ) throw new Error( 'comment-failed' );
        s.body = '';
        s.composing = 0;
        store( 'heyfam/single' ).callbacks.refresh( heyfam );
      } catch ( err ) {
        alert( 'Could not comment. Try again.' );
      } finally {
        s.submitting = false;
      }
    },
  },
} );

store( 'heyfam/single', {
  state: { post: null, comments: [], lastFetch: null },
  callbacks: {
    *bootstrap() {
      const heyfam = store( 'heyfam' ).state;
      yield this.refresh( heyfam );
      setInterval( () => this.refresh( heyfam ), 10000 );
    },
    *refresh( heyfam ) {
      const post_id = parseInt( document.querySelector( '[data-post-id]' )?.dataset.postId, 10 );
      if ( ! post_id ) return;
      const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/post/${post_id}`, {
        credentials: 'include',
        headers: { 'X-WP-Nonce': heyfam.nonce },
      } );
      if ( ! r.ok ) return;
      const body = yield r.json();
      const s = store( 'heyfam/single' ).state;
      s.post = body.post;
      s.comments = nest( body.comments || [] );
      s.lastFetch = body.now;
    },
  },
} );

function nest( comments ) {
  const map = new Map( comments.map( ( c ) => [ c.id, { ...c, children: [] } ] ) );
  const roots = [];
  for ( const c of map.values() ) {
    if ( c.parent_id && map.has( c.parent_id ) ) map.get( c.parent_id ).children.push( c );
    else roots.push( c );
  }
  return roots;
}
