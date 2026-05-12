import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/dev', {
  state: {
    open:    false,
    busy:    false,
    message: '',
  },
  actions: {
    toggle() {
      state.open = ! state.open;
    },
    *resetMe() {
      const heyfam = store( 'heyfam' ).state;
      if ( ! window.confirm( "Reset your fams and unverify your phone? You'll re-onboard on next page load." ) ) return;
      state.busy = true;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/_dev/reset-me`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { delete_user: false } ),
        } );
        if ( ! r.ok ) throw new Error( yield r.text() );
        state.message = 'Reset done. Reloading…';
        setTimeout( () => location.assign( '/' ), 500 );
      } catch ( err ) {
        state.message = `Reset failed: ${ err.message }`;
      } finally {
        state.busy = false;
      }
    },
    *seedDemo() {
      const heyfam = store( 'heyfam' ).state;
      state.busy = true;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/_dev/seed-demo`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { reset: true } ),
        } );
        const j = yield r.json();
        if ( ! r.ok ) throw new Error( j?.error || 'seed failed' );
        state.message = `Seeded → ${ j.result.fam_url }`;
        setTimeout( () => location.assign( j.result.fam_url ), 800 );
      } catch ( err ) {
        state.message = `Seed failed: ${ err.message }`;
      } finally {
        state.busy = false;
      }
    },

    // --- State simulators -----------------------------------------------
    // These flip store state directly so you can review/screenshot each
    // visual state without driving it through real interactions. Idempotent
    // toggles where it makes sense; "Reset" puts everything back to default.
    simNudge() {
      const s = store( 'heyfam/nudge' ).state;
      s.visible = ! s.visible;
    },
    simEditor() {
      // Open the editor on the first post in the feed, or a fake post if empty.
      const feed = store( 'heyfam/feed' ).state;
      const post = feed.posts?.[ 0 ] || {
        id: -1, body: 'Simulated post body — edit me to test the editor.',
        images: [], poll: null,
      };
      store( 'heyfam/composer' ).actions.openEditor( post );
    },
    simDelete() {
      const feed = store( 'heyfam/feed' ).state;
      feed.deleteTargetId = feed.posts?.[ 0 ]?.id || -1;
      feed.deleteError    = '';
      feed.deleting       = false;
      feed.deleteOpen     = true;
      document.body.classList.add( 'heyfam-modal-open' );
    },
    simDeleting() {
      // Open the confirm, then flip into the "deleting" pending state.
      actions.simDelete();
      store( 'heyfam/feed' ).state.deleting = true;
    },
    simDeleteError() {
      actions.simDelete();
      const feed = store( 'heyfam/feed' ).state;
      feed.deleting    = false;
      feed.deleteError = 'Could not delete. Try again.';
    },
    simPollMode() {
      const c = store( 'heyfam/composer' ).state;
      c.pollMode = ! c.pollMode;
    },
    simSending() {
      const c = store( 'heyfam/composer' ).state;
      c.submitting = ! c.submitting;
    },
    simComposerError() {
      const c = store( 'heyfam/composer' ).state;
      c.error = c.error ? '' : 'Could not post. Try again.';
    },
    simEmptyFeed() {
      const feed = store( 'heyfam/feed' ).state;
      if ( feed.__stashedPosts ) {
        feed.posts          = feed.__stashedPosts;
        feed.hasPosts       = feed.posts.length > 0;
        feed.__stashedPosts = null;
      } else {
        feed.__stashedPosts = feed.posts;
        feed.posts          = [];
        feed.hasPosts       = false;
      }
    },
    simReset() {
      const c = store( 'heyfam/composer' );
      if ( c.state.editorOpen ) c.actions.closeEditor();
      c.state.pollMode   = false;
      c.state.submitting = false;
      c.state.error      = '';

      const f = store( 'heyfam/feed' ).state;
      f.deleteOpen     = false;
      f.deleteTargetId = 0;
      f.deleting       = false;
      f.deleteError    = '';
      if ( f.__stashedPosts ) {
        f.posts          = f.__stashedPosts;
        f.hasPosts       = f.posts.length > 0;
        f.__stashedPosts = null;
      }
      document.body.classList.remove( 'heyfam-modal-open' );

      store( 'heyfam/nudge' ).state.visible = false;
    },
  },
} );
