import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/comments', {
  state: {
    composing: 0,   // 0 = top-level composer is the active one; otherwise the parent comment id
    body: '',
    submitting: false,
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration (see account.js),
    // so `topLevelHidden` is a plain reactive prop that the actions maintain
    // in lock-step with `composing`.
    topLevelHidden: false,
  },
  actions: {
    reply() {
      const ctx = getContext();
      const id  = ctx?.item?.id ? parseInt( ctx.item.id, 10 ) : 0;
      if ( ! id ) return;
      const s = store( 'heyfam/comments' ).state;
      if ( s.composing === id ) {
        s.composing      = 0;
        s.topLevelHidden = false;
        return;
      }
      s.composing      = id;
      s.body           = '';
      s.topLevelHidden = true;
      // Defer focus until after the class binding flips and CSS unhides the form.
      setTimeout( () => {
        const sel = `[data-id="${id}"] .heyfam-comment-form--inline textarea`;
        document.querySelector( sel )?.focus();
      }, 0 );
    },
    cancelReply() {
      const s = store( 'heyfam/comments' ).state;
      s.composing      = 0;
      s.body           = '';
      s.topLevelHidden = false;
    },
    updateBody( e ) {
      store( 'heyfam/comments' ).state.body = e.target.value;
    },
    *submit( e ) {
      e.preventDefault();
      const s = store( 'heyfam/comments' ).state;
      if ( s.submitting || ! s.body.trim() ) return;
      s.submitting = true;
      const heyfam  = store( 'heyfam' ).state;
      const post_id = parseInt( document.querySelector( '[data-post-id]' )?.dataset.postId, 10 );
      try {
        const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/comments`, {
          method: 'POST', credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce':   heyfam.nonce,
          },
          body: JSON.stringify( { post_id, parent_id: s.composing, body: s.body } ),
        } );
        if ( ! r.ok ) throw new Error( 'comment-failed' );
        s.body           = '';
        s.composing      = 0;
        s.topLevelHidden = false;
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
  state: {
    post: null,
    comments: [],
    lastFetch: null,
  },
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
      const s    = store( 'heyfam/single' ).state;
      s.post      = decoratePost( body.post );
      s.comments  = flatten( body.comments || [] );
      s.lastFetch = body.now;
    },
  },
} );

const MAX_VISUAL_DEPTH = 3;

function decoratePost( post ) {
  if ( ! post ) return null;
  return {
    ...post,
    reactionEntries: Object.entries( post.reactions || {} ),
  };
}

function decorateComment( c, depth, parentName ) {
  const visualDepth = Math.min( depth, MAX_VISUAL_DEPTH );
  // Comments at the cap (depth === MAX_VISUAL_DEPTH) still sit visually below
  // their parent (one indent up), so attribution is redundant. Attribution
  // kicks in once depth exceeds the cap and the parent shares the same indent.
  const isDeep      = depth > MAX_VISUAL_DEPTH;
  return {
    ...c,
    depth:           visualDepth,
    is_deep:         isDeep,
    parent_name:     isDeep ? parentName : '',
    reactionEntries: Object.entries( c.reactions || {} ),
    relative_time:   relativeTime( c.created_at ),
    avatar_color:    avatarColor( c.author?.id || 0 ),
    avatar_initial:  ( c.author?.name || '?' ).trim().charAt( 0 ).toUpperCase(),
  };
}

/**
 * Take the flat ASC-by-date list from the server and produce a DFS-ordered
 * flat list where each entry carries:
 *  - `depth`:       visual indent level, capped at MAX_VISUAL_DEPTH
 *  - `is_deep`:     true when actual depth > MAX_VISUAL_DEPTH (i.e. flattened)
 *  - `parent_name`: parent author name (only when is_deep)
 *
 * Each comment appears immediately after its parent in the output array, so
 * the template can render with a single `data-wp-each` and rely on `data-depth`
 * for indentation.
 */
function flatten( comments ) {
  const childrenByParent = new Map();
  for ( const c of comments ) {
    const pid = c.parent_id || 0;
    if ( ! childrenByParent.has( pid ) ) childrenByParent.set( pid, [] );
    childrenByParent.get( pid ).push( c );
  }
  const out = [];
  function walk( parentId, depth, parentName ) {
    const kids = childrenByParent.get( parentId ) || [];
    for ( const c of kids ) {
      out.push( decorateComment( c, depth, parentName ) );
      walk( c.id, depth + 1, c.author?.name || '' );
    }
  }
  walk( 0, 0, '' );
  return out;
}

function relativeTime( iso ) {
  if ( ! iso ) return '';
  const then = new Date( iso ).getTime();
  if ( Number.isNaN( then ) ) return '';
  const diff = ( Date.now() - then ) / 1000;
  if ( diff < 60 )       return 'now';
  if ( diff < 3600 )     return `${Math.floor( diff / 60 )}m ago`;
  if ( diff < 86400 )    return `${Math.floor( diff / 3600 )}h ago`;
  if ( diff < 86400 * 7 ) return `${Math.floor( diff / 86400 )}d ago`;
  const d = new Date( iso );
  const m = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ][ d.getMonth() ];
  const y = d.getFullYear();
  const thisYear = new Date().getFullYear();
  return y === thisYear ? `${m} ${d.getDate()}` : `${m} ${d.getDate()}, ${y}`;
}

function avatarColor( userId ) {
  // Golden-angle hue spread for distinguishable colors across small N.
  const hue = ( userId * 137 ) % 360;
  return `hsl(${hue}, 60%, 55%)`;
}
