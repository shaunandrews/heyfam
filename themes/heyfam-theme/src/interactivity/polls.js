import { store } from '@wordpress/interactivity';

/**
 * Poll voting store.
 *
 * The post-card poll widget binds each option button's click to
 * `heyfam/polls::actions.vote`. The button carries `data-option-index`
 * and its enclosing `.heyfam-post-card` carries `data-post-id`; we read
 * those to identify the target without piping the post id through context.
 *
 * After a successful vote we trigger `heyfam/feed::callbacks.refresh` so
 * the result bars + voter chips update without waiting for the 10s
 * polling cycle.
 */
store( 'heyfam/polls', {
  actions: {
    *vote( e ) {
      const btn = e.currentTarget;
      const idx = btn ? parseInt( btn.dataset.optionIndex, 10 ) : -1;
      const card = btn ? btn.closest( '[data-post-id]' ) : null;
      const pid = card ? parseInt( card.dataset.postId, 10 ) : 0;
      if ( ! pid || Number.isNaN( idx ) || idx < 0 ) return;
      const heyfam = store( 'heyfam' ).state;

      try {
        const r = yield fetch( `${ heyfam.apiBase }/${ heyfam.famSlug }/poll-vote`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { post_id: pid, option_index: idx } ),
        } );
        if ( ! r.ok ) {
          const body = yield r.json().catch( () => ( {} ) );
          if ( body?.error === 'closed' ) {
            alert( 'This poll has closed.' );
          } else {
            alert( 'Could not vote. Try again.' );
          }
          return;
        }
        // Live result reveal — pull the feed back immediately rather
        // than waiting for the 10s polling tick.
        store( 'heyfam/feed' ).callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        alert( 'Could not vote. Try again.' );
      }
    },
  },
} );
