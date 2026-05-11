import { store, getContext } from '@wordpress/interactivity';
import { acceptable } from '../lib/media.js';

const MAX_FILES = 10;
const MAX_BYTES = 25 * 1024 * 1024; // 25 MB per file before client conversion

const { state, actions } = store( 'heyfam/composer', {
  state: {
    body: '',
    /**
     * Array of { id, file, name, previewUrl, status } where status is
     * 'pending' | 'converting' | 'ready' | 'error'. Previews are
     * `URL.createObjectURL` strings; we revoke them on remove + on submit.
     */
    pending: [],
    submitting: false,
    error: '',
    get hasFiles() { return state.pending.length > 0; },
    get canSubmit() {
      // Allow text-only posts (body trimmed), or any number of ready files.
      return ! state.submitting && (
        state.body.trim() !== '' ||
        state.pending.some( p => p.status === 'ready' )
      );
    },
    get photoLabel() {
      const n = state.pending.length;
      return n === 0 ? 'Add photos' : `${ n } photo${ n === 1 ? '' : 's' }`;
    },
  },
  actions: {
    updateBody( e ) { state.body = e.target.value; },

    /** Triggered by the <input type="file" multiple> change event. */
    pickPhotos( e ) {
      const files = Array.from( e.target.files || [] );
      addFiles( files );
      // Clear the input so picking the same filename again still fires `change`.
      e.target.value = '';
    },

    /** Drag-drop on the composer's drop-zone. */
    onDragOver( e ) {
      if ( e.dataTransfer?.types?.includes( 'Files' ) ) {
        e.preventDefault();
        e.currentTarget.classList.add( 'is-drop-target' );
      }
    },
    onDragLeave( e ) {
      e.currentTarget.classList.remove( 'is-drop-target' );
    },
    onDrop( e ) {
      e.preventDefault();
      e.currentTarget.classList.remove( 'is-drop-target' );
      const files = Array.from( e.dataTransfer?.files || [] );
      addFiles( files );
    },

    /** Cmd/Ctrl+V on the body textarea — grab image clipboard items. */
    onPaste( e ) {
      const items = Array.from( e.clipboardData?.items || [] );
      const files = items
        .filter( i => i.kind === 'file' )
        .map( i => i.getAsFile() )
        .filter( Boolean );
      if ( files.length === 0 ) return; // text paste: let the textarea handle it
      e.preventDefault();
      addFiles( files );
    },

    removeFile() {
      const ctx = getContext();
      const id  = ctx?.item?.id;
      if ( id == null ) return;
      const idx = state.pending.findIndex( p => p.id === id );
      if ( idx === -1 ) return;
      const removed = state.pending[ idx ];
      if ( removed.previewUrl ) URL.revokeObjectURL( removed.previewUrl );
      state.pending.splice( idx, 1 );
    },

    *submit( e ) {
      e.preventDefault();
      if ( ! state.canSubmit || state.submitting ) return;
      state.submitting = true;
      state.error      = '';
      const heyfam    = store( 'heyfam' ).state;

      const ready = state.pending.filter( p => p.status === 'ready' );
      const fd    = new FormData();
      fd.append( 'body', state.body );
      for ( const p of ready ) fd.append( 'photos[]', p.file, p.name );

      try {
        const r = yield fetch( `${ heyfam.apiBase }/${ heyfam.famSlug }/posts`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce }, body: fd,
        } );
        if ( ! r.ok ) throw new Error( 'post-failed' );

        // Clear state, revoke object URLs.
        state.body = '';
        for ( const p of state.pending ) {
          if ( p.previewUrl ) URL.revokeObjectURL( p.previewUrl );
        }
        state.pending = [];

        store( 'heyfam/feed' ).callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        state.error = 'Could not post. Try again.';
      } finally {
        state.submitting = false;
      }
    },
  },
} );

function addFiles( files ) {
  let nextId = ( state.pending[ state.pending.length - 1 ]?.id ?? 0 ) + 1;
  for ( const file of files ) {
    if ( state.pending.length >= MAX_FILES ) {
      state.error = `Max ${ MAX_FILES } photos per post.`;
      break;
    }
    if ( ! acceptable( file ) ) {
      state.error = 'Only images, please.';
      continue;
    }
    if ( file.size > MAX_BYTES ) {
      state.error = `${ file.name } is too large.`;
      continue;
    }

    const slot = {
      id:         nextId++,
      file,
      name:       file.name,
      previewUrl: URL.createObjectURL( file ),
      status:     'pending',
    };
    state.pending.push( slot );

    // HEIC handoff is Task 4. For now everything is immediately 'ready'.
    slot.status = 'ready';
  }
}
