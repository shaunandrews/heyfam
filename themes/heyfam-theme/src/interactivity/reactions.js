import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/reactions', {
  actions: {
    *toggle() {
      const ctx = getContext();
      const emoji = ctx.entry?.[0];
      if ( ! emoji ) return;
      yield apply( ctx.target_type, ctx.target_id, emoji, 'POST' );
    },
    *openPicker() {
      const ctx = getContext();
      const emoji = window.prompt( 'Emoji?', '👍' );
      if ( ! emoji ) return;
      yield apply( ctx.target_type, ctx.target_id, emoji, 'POST' );
    },
  },
  callbacks: {
    captureTarget() {
      const ctx = getContext();
      // Find the parent post-card to copy id over (set by feed-poll's template).
      const card = document.activeElement?.closest( '.heyfam-post-card' );
      if ( card ) ctx.target_id = parseInt( card.dataset.id, 10 );
    },
  },
} );

function* apply( target_type, target_id, emoji, method ) {
  const heyfam = store( 'heyfam' ).state;
  yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method, credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': heyfam.nonce,
    },
    body: JSON.stringify( { target_type, target_id, emoji } ),
  } );
  store( 'heyfam/feed' ).callbacks.refresh( heyfam, true );
}
