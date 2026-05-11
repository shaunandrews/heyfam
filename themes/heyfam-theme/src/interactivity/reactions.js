import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/reactions', {
  actions: {
    *toggle( e ) {
      const container = e?.target?.closest( '[data-id]' );
      const id        = container ? parseInt( container.dataset.id, 10 ) : 0;
      const target    = ( container?.dataset.targetType ) || 'post';
      const ctx       = getContext();
      const emoji     = ctx.entry?.[0];
      if ( ! id || ! emoji ) return;
      yield apply( target, id, emoji );
    },
    *openPicker( e ) {
      const container = e?.target?.closest( '[data-id]' );
      const id        = container ? parseInt( container.dataset.id, 10 ) : 0;
      const target    = ( container?.dataset.targetType ) || 'post';
      if ( ! id ) return;
      const emoji = window.prompt( 'Emoji?', '👍' );
      if ( ! emoji ) return;
      yield apply( target, id, emoji );
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
  // Refresh whichever page-store is mounted. Both calls are safe: each store's
  // refresh callback bails early if its required data (post_id / famSlug) is absent.
  try { store( 'heyfam/single' ).callbacks.refresh( heyfam ); } catch ( e ) {}
  try { store( 'heyfam/feed'   ).callbacks.refresh( heyfam ); } catch ( e ) {}
}
