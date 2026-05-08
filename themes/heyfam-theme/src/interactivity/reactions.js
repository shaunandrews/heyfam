import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/reactions', {
  actions: {
    *toggle( e ) {
      const btn   = e?.target?.closest( 'button' );
      const card  = btn?.closest( '[data-id]' );
      const id    = card ? parseInt( card.dataset.id, 10 ) : 0;
      const ctx   = getContext();
      const emoji = ctx.entry?.[0];
      if ( ! id || ! emoji ) return;
      yield apply( 'post', id, emoji );
    },
    *openPicker( e ) {
      const card  = e?.target?.closest( '[data-id]' );
      const id    = card ? parseInt( card.dataset.id, 10 ) : 0;
      if ( ! id ) return;
      const emoji = window.prompt( 'Emoji?', '👍' );
      if ( ! emoji ) return;
      yield apply( 'post', id, emoji );
    },
  },
} );

function* apply( target_type, target_id, emoji ) {
  const heyfam = store( 'heyfam' ).state;
  yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method: 'POST', credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
    body: JSON.stringify( { target_type, target_id, emoji } ),
  } );
  store( 'heyfam/feed' ).callbacks.refresh( heyfam, true );
}
