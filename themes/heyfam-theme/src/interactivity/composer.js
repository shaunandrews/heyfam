import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/composer', {
  state: {
    body: '',
    photo: null,
    photoLabel: 'Add photo',
    submitting: false,
  },
  actions: {
    updateBody( e ) { state.body = e.target.value; },
    pickPhoto( e ) {
      state.photo = e.target.files?.[0] || null;
      state.photoLabel = state.photo ? state.photo.name : 'Add photo';
    },
    *submit( e ) {
      e.preventDefault();
      if ( state.submitting ) return;
      state.submitting = true;
      const heyfam = store( 'heyfam' ).state;
      const fd = new FormData();
      fd.append( 'body', state.body );
      if ( state.photo ) fd.append( 'photo', state.photo );

      try {
        const r = yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/posts`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce }, body: fd,
        } );
        if ( ! r.ok ) throw new Error( 'post-failed' );
        state.body = '';
        state.photo = null;
        state.photoLabel = 'Add photo';
        // Trigger feed refresh if it's listening.
        store( 'heyfam/feed' ).callbacks.refresh( heyfam, true );
      } catch ( err ) {
        alert( 'Could not post. Try again.' );
      } finally {
        state.submitting = false;
      }
    },
  },
} );
