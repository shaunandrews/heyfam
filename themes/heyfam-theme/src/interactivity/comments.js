import { store, getContext } from '@wordpress/interactivity';

/**
 * The inline reply composer (one per comment) is state-bound: only one is
 * open at a time, and `state.body` carries its draft. Each post card's
 * always-visible root composer is a vanilla form — its textarea isn't
 * IAPI-bound, so multiple cards can coexist on the feed without sharing
 * state. The submit action handles both kinds and walks up to the
 * enclosing post card to figure out which post to comment on.
 */
store( 'heyfam/comments', {
  state: {
    composing:  0,   // 0 = no inline composer open; otherwise the parent comment id
    body:       '',
    submitting: false,
  },
  actions: {
    reply() {
      const ctx = getContext( 'heyfam/feed' );
      const id  = ctx?.comment?.id ? parseInt( ctx.comment.id, 10 ) : 0;
      if ( ! id ) return;
      const s = store( 'heyfam/comments' ).state;
      closeOpenInlineForms();
      if ( s.composing === id ) {
        s.composing = 0;
        return;
      }
      s.composing = id;
      s.body      = '';
      const form = document.querySelector( `article.heyfam-comment[data-id="${id}"] .heyfam-comment-form--inline` );
      if ( form ) {
        form.classList.add( 'is-open' );
        form.querySelector( 'textarea' )?.focus();
      }
    },
    cancelReply() {
      const s = store( 'heyfam/comments' ).state;
      s.composing = 0;
      s.body      = '';
      closeOpenInlineForms();
    },
    updateBody( e ) {
      store( 'heyfam/comments' ).state.body = e.target.value;
    },
    *submit( e ) {
      e.preventDefault();
      const form     = e.target;
      const postCard = form.closest( '[data-target-type="post"]' );
      const post_id  = postCard ? parseInt( postCard.dataset.id, 10 ) : 0;
      if ( ! post_id ) return;
      const isRoot = form.classList.contains( 'heyfam-comment-form--root' );
      const ta     = form.querySelector( 'textarea' );
      const s      = store( 'heyfam/comments' ).state;
      if ( s.submitting ) return;
      const draft = isRoot ? ( ta?.value || '' ) : s.body;
      const body  = draft.trim();
      if ( ! body ) return;
      const parent_id = isRoot ? 0 : s.composing;
      s.submitting = true;
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/comments`, {
          method: 'POST', credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce':   heyfam.nonce,
          },
          body: JSON.stringify( { post_id, parent_id, body } ),
        } );
        if ( ! r.ok ) throw new Error( 'comment-failed' );
        if ( isRoot ) {
          if ( ta ) ta.value = '';
        } else {
          s.body      = '';
          s.composing = 0;
          closeOpenInlineForms();
        }
        store( 'heyfam/feed' ).callbacks.refresh( heyfam );
      } catch ( err ) {
        alert( 'Could not comment. Try again.' );
      } finally {
        s.submitting = false;
      }
    },
  },
} );

function closeOpenInlineForms() {
  document.querySelectorAll( '.heyfam-comment-form--inline.is-open' )
    .forEach( ( el ) => el.classList.remove( 'is-open' ) );
}
