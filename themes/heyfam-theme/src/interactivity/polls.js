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
      const feed   = store( 'heyfam/feed' );
      const posts  = Array.isArray( feed.state.posts ) ? feed.state.posts : null;
      const post   = posts ? posts.find( p => p.id === pid ) : null;
      const poll   = post?.poll;
      if ( ! poll || poll.closed ) return;
      if ( poll.my_vote === idx ) return; // clicking your existing pick — no-op

      // Optimistic: snapshot the keys we mutate so we can roll back on error,
      // then apply locally so the bar moves before the network round trip.
      const snapshot = snapshotPoll( poll );
      const me = {
        user_id:    heyfam.userId,
        name:       heyfam.userName || 'You',
        avatar_url: heyfam.userAvatarUrl,
      };
      applyVote( poll, idx, me );

      try {
        const r = yield fetch( `${ heyfam.apiBase }/${ heyfam.famSlug }/poll-vote`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { post_id: pid, option_index: idx } ),
        } );
        if ( ! r.ok ) {
          restorePoll( poll, snapshot );
          const body = yield r.json().catch( () => ( {} ) );
          if ( body?.error === 'closed' ) {
            alert( 'This poll has closed.' );
          } else {
            alert( 'Could not vote. Try again.' );
          }
          return;
        }
        // Pull the feed in the background so other people's votes catch up;
        // our own count is already showing.
        feed.callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        restorePoll( poll, snapshot );
        alert( 'Could not vote. Try again.' );
      }
    },
  },
} );

/**
 * Mutate `poll` to reflect a vote on `newIdx`. Handles both first votes
 * (total grows) and re-votes (total stays, previous option decrements).
 * Percents + bar styles are recomputed so the UI matches what the server
 * will hand back on the next refresh.
 */
function applyVote( poll, newIdx, me ) {
  const prev = poll.my_vote;
  if ( prev === newIdx ) return;

  const opts = poll.options || [];
  if ( newIdx < 0 || newIdx >= opts.length ) return;

  opts[ newIdx ].count += 1;
  if ( prev >= 0 && prev < opts.length ) {
    opts[ prev ].count = Math.max( 0, opts[ prev ].count - 1 );
  } else {
    poll.total_votes += 1;
  }

  // Move our avatar between the per-option voter strips. Matches what the
  // server will hand back on the next refresh, so the UI doesn't reflow once
  // the response lands.
  if ( me && me.user_id ) {
    for ( const opt of opts ) {
      if ( ! Array.isArray( opt.voters ) ) opt.voters = [];
    }
    if ( prev >= 0 && prev < opts.length ) {
      opts[ prev ].voters = opts[ prev ].voters.filter( v => v.user_id !== me.user_id );
    }
    if ( ! opts[ newIdx ].voters.some( v => v.user_id === me.user_id ) ) {
      opts[ newIdx ].voters.push( {
        user_id:    me.user_id,
        name:       me.name,
        avatar_url: me.avatar_url,
      } );
    }
  }

  poll.my_vote   = newIdx;
  poll.has_voted = true;

  const total = poll.total_votes;
  for ( let i = 0; i < opts.length; i++ ) {
    opts[ i ].is_my_vote = i === newIdx;
    const pct = total > 0 ? Math.round( ( opts[ i ].count / total ) * 100 ) : 0;
    opts[ i ].percent   = pct;
    opts[ i ].bar_style = `width:${ pct }%;`;
  }
}

/** Capture just the fields applyVote mutates — `options` are cloned per-row. */
function snapshotPoll( poll ) {
  return {
    my_vote:     poll.my_vote,
    has_voted:   poll.has_voted,
    total_votes: poll.total_votes,
    options:     poll.options.map( o => ( {
      count:      o.count,
      percent:    o.percent,
      bar_style:  o.bar_style,
      is_my_vote: o.is_my_vote,
      voters:     Array.isArray( o.voters ) ? o.voters.slice() : [],
    } ) ),
  };
}

function restorePoll( poll, snap ) {
  poll.my_vote     = snap.my_vote;
  poll.has_voted   = snap.has_voted;
  poll.total_votes = snap.total_votes;
  for ( let i = 0; i < snap.options.length; i++ ) {
    const s = snap.options[ i ];
    const o = poll.options[ i ];
    o.count      = s.count;
    o.percent    = s.percent;
    o.bar_style  = s.bar_style;
    o.is_my_vote = s.is_my_vote;
    o.voters     = s.voters.slice();
  }
}
