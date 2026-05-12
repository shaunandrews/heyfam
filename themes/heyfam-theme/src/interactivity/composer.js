import { store, getContext } from '@wordpress/interactivity';
import { acceptable, isHeic } from '../lib/media.js';

const MAX_FILES = 10;
const MAX_BYTES = 25 * 1024 * 1024; // 25 MB per file before client conversion

const MIN_OPTIONS = 2;
const MAX_OPTIONS = 6;
let nextOptionId = 1;
const newOption = ( placeholder ) => ( { id: nextOptionId++, text: '', placeholder } );
const initialOptions = () => [
  newOption( 'Option 1' ),
  newOption( 'Option 2' ),
];

const blankState = () => ( {
  body: '',
  pending: [],
  pollMode: false,
  optionList: initialOptions(),
  closesAt: '',
  anon: false,
} );

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
    // Poll-mode state. `optionList` reuses the same shape across
    // mode toggles so the user can iterate without losing typed text.
    pollMode: false,
    optionList: initialOptions(),
    closesAt: '',
    anon: false,
    // Edit mode. `editingPostId` is 0 when composing a new post.
    editorOpen: false,
    editingPostId: 0,
    // Snapshot of inline-compose state captured when the editor opens, so the
    // user's in-progress draft survives a cancel.
    stash: null,
    // For edit mode: `{ id, url, alt }[]` of attachments currently on the post.
    // The user can remove them, which pushes the id onto `removedAttachmentIds`
    // (sent to the server on save).
    existingImages: [],
    removedAttachmentIds: [],
    get hasFiles() { return state.pending.length > 0; },
    get hasExistingImages() { return state.existingImages.length > 0; },
    get canSubmit() {
      if ( state.submitting ) return false;
      if ( state.pollMode ) {
        // Question (body) + at least MIN_OPTIONS non-empty options.
        if ( state.body.trim() === '' ) return false;
        return state.optionList.filter( o => o.text.trim() !== '' ).length >= MIN_OPTIONS;
      }
      // Allow text-only posts (body trimmed), or any number of ready files.
      return state.body.trim() !== '' ||
        state.pending.some( p => p.status === 'ready' ) ||
        state.existingImages.length > 0;
    },
    get photoLabel() {
      const n = state.pending.length;
      return n === 0 ? 'Add photos' : `${ n } photo${ n === 1 ? '' : 's' }`;
    },
    get bodyPlaceholder() { return state.pollMode ? 'Ask a question…' : 'Hey fam…'; },
    get submitLabel() {
      if ( state.editingPostId ) return 'Save';
      return state.pollMode ? 'Send poll' : 'Send';
    },
    get pollToggleLabel() { return state.pollMode ? '← Back'         : 'Make it a poll'; },
    get atMaxOptions()    { return state.optionList.length >= MAX_OPTIONS; },
    get cannotRemove()    { return state.optionList.length <= MIN_OPTIONS; },
  },
  actions: {
    updateBody( e ) {
      state.body = e.target.value;
      autoSize( e.target );
    },

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

    togglePollMode() {
      state.pollMode = ! state.pollMode;
      if ( state.pollMode ) {
        // Drop any pending photo selection when switching into poll mode —
        // polls don't carry photos in v1.
        for ( const p of state.pending ) {
          if ( p.previewUrl ) URL.revokeObjectURL( p.previewUrl );
        }
        state.pending = [];
        if ( state.optionList.length < MIN_OPTIONS ) state.optionList = initialOptions();
      }
    },
    addOption() {
      if ( state.optionList.length >= MAX_OPTIONS ) return;
      const i = state.optionList.length + 1;
      state.optionList.push( newOption( `Option ${ i }` ) );
    },
    removeOption() {
      if ( state.optionList.length <= MIN_OPTIONS ) return;
      const ctx = getContext();
      const idx = state.optionList.findIndex( o => o.id === ctx?.option?.id );
      if ( idx === -1 ) return;
      state.optionList.splice( idx, 1 );
    },
    updateOption( e ) {
      const ctx = getContext();
      const opt = state.optionList.find( o => o.id === ctx?.option?.id );
      if ( opt ) opt.text = e.target.value;
    },
    updateClosesAt( e ) { state.closesAt = e.target.value; },
    toggleAnon( e )     { state.anon     = e.target.checked; },

    /**
     * Populate the composer from an existing post, stashing the inline draft
     * first so cancel restores it. Closes any open per-post menu.
     */
    openEditor( post ) {
      if ( ! post || ! post.id ) return;
      // Stash current inline state (only when not already editing — prevents
      // a double-open from clobbering the stash with the previous edit).
      if ( ! state.editorOpen ) {
        state.stash = {
          body:       state.body,
          pending:    state.pending,
          pollMode:   state.pollMode,
          optionList: state.optionList,
          closesAt:   state.closesAt,
          anon:       state.anon,
        };
      }

      state.body          = post.body || '';
      state.pending       = [];
      state.removedAttachmentIds = [];
      state.existingImages = ( post.images || [] ).map( i => ( {
        id: i.id, url: i.thumb_url || i.url, alt: i.alt || '',
      } ) );

      if ( post.poll ) {
        state.pollMode   = true;
        // Re-hydrate option list with deterministic IDs so data-wp-each can key.
        state.optionList = post.poll.options.map( ( o ) => {
          const id = nextOptionId++;
          return { id, text: o.label || '', placeholder: `Option ${ o.index + 1 }` };
        } );
        // Pad to MIN_OPTIONS in the unlikely case the server returned fewer.
        while ( state.optionList.length < MIN_OPTIONS ) {
          state.optionList.push( newOption( `Option ${ state.optionList.length + 1 }` ) );
        }
        // Convert ISO close to a `datetime-local`-friendly value, or blank.
        state.closesAt = post.poll.closes_at
          ? post.poll.closes_at.slice( 0, 16 )
          : '';
        state.anon = !! post.poll.anon;
      } else {
        state.pollMode   = false;
        state.optionList = initialOptions();
        state.closesAt   = '';
        state.anon       = false;
      }

      state.editingPostId = post.id;
      state.error         = '';
      state.editorOpen    = true;
      document.body.classList.add( 'heyfam-modal-open' );
    },

    closeEditor() {
      // Drop any new-file previews picked while in the editor.
      for ( const p of state.pending ) {
        if ( p.previewUrl ) URL.revokeObjectURL( p.previewUrl );
      }

      // Restore the stashed inline draft if there was one.
      const s = state.stash;
      if ( s ) {
        state.body       = s.body;
        state.pending    = s.pending;
        state.pollMode   = s.pollMode;
        state.optionList = s.optionList;
        state.closesAt   = s.closesAt;
        state.anon       = s.anon;
      } else {
        Object.assign( state, blankState() );
      }
      state.stash                = null;
      state.editingPostId        = 0;
      state.existingImages       = [];
      state.removedAttachmentIds = [];
      state.error                = '';
      state.editorOpen           = false;
      document.body.classList.remove( 'heyfam-modal-open' );
    },

    /** Remove an already-attached image. Queue its id for server-side delete. */
    removeExistingImage() {
      const ctx = getContext();
      const id  = ctx?.image?.id;
      if ( id == null ) return;
      const idx = state.existingImages.findIndex( i => i.id === id );
      if ( idx === -1 ) return;
      state.existingImages.splice( idx, 1 );
      state.removedAttachmentIds.push( id );
    },

    onEditorBackdrop( e ) {
      // Only close when clicking the backdrop itself, not the dialog inside.
      if ( e.target.classList?.contains( 'heyfam-modal' ) ) {
        actions.closeEditor();
      }
    },

    *submit( e ) {
      e.preventDefault();
      if ( ! state.canSubmit || state.submitting ) return;
      state.submitting = true;
      state.error      = '';
      const heyfam    = store( 'heyfam' ).state;
      const editingId = state.editingPostId;

      const fd = new FormData();
      fd.append( 'body', state.body );

      if ( state.pollMode ) {
        const opts = state.optionList
          .map( o => o.text.trim() )
          .filter( Boolean );
        if ( opts.length < MIN_OPTIONS ) {
          state.error      = `A poll needs at least ${ MIN_OPTIONS } options.`;
          state.submitting = false;
          return;
        }
        for ( const o of opts ) fd.append( 'poll_options[]', o );
        if ( state.closesAt ) fd.append( 'poll_closes_at', state.closesAt );
        fd.append( 'poll_anon', state.anon ? '1' : '0' );
      } else {
        const ready = state.pending.filter( p => p.status === 'ready' );
        for ( const p of ready ) fd.append( 'photos[]', p.file, p.name );
      }

      if ( editingId ) {
        for ( const id of state.removedAttachmentIds ) {
          fd.append( 'remove_attachment_ids[]', String( id ) );
        }
      }

      const url = editingId
        ? `${ heyfam.apiBase }/${ heyfam.famSlug }/post/${ editingId }`
        : `${ heyfam.apiBase }/${ heyfam.famSlug }/posts`;

      try {
        const r = yield fetch( url, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce }, body: fd,
        } );
        if ( ! r.ok ) throw new Error( 'post-failed' );

        // Clear state, revoke object URLs.
        for ( const p of state.pending ) {
          if ( p.previewUrl ) URL.revokeObjectURL( p.previewUrl );
        }
        if ( editingId ) {
          // closeEditor restores the pre-edit inline draft (the stash).
          state.pending = [];
          actions.closeEditor();
        } else {
          state.body       = '';
          autoSize( document.querySelector( '.heyfam-composer textarea' ) );
          state.pending    = [];
          state.pollMode   = false;
          state.optionList = initialOptions();
          state.closesAt   = '';
          state.anon       = false;
        }

        store( 'heyfam/feed' ).callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        state.error = editingId ? 'Could not save. Try again.' : 'Could not post. Try again.';
      } finally {
        state.submitting = false;
      }
    },
  },
} );

/** Grow a textarea to fit its content (up to a soft cap; scroll past it). */
const AUTOSIZE_MAX = 240;
function autoSize( el ) {
  if ( ! el || el.tagName !== 'TEXTAREA' ) return;
  el.style.height = 'auto';
  el.style.height = Math.min( el.scrollHeight, AUTOSIZE_MAX ) + 'px';
  el.style.overflowY = el.scrollHeight > AUTOSIZE_MAX ? 'auto' : 'hidden';
}

async function addFiles( files ) {
  const heyfam = store( 'heyfam' ).state;
  let nextId   = ( state.pending[ state.pending.length - 1 ]?.id ?? 0 ) + 1;

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

    const heic               = isHeic( file );
    const needsClientConvert = heic && ! heyfam.heicSupport;

    const slot = {
      id:         nextId++,
      file,
      name:       file.name,
      previewUrl: '',
      status:     needsClientConvert ? 'converting' : 'ready',
    };
    // Provisional preview from the original file. iOS Safari can render
    // some HEIC into <img>; on other browsers the preview just stays blank
    // until the conversion swaps in a JPEG below.
    try { slot.previewUrl = URL.createObjectURL( file ); } catch {}
    state.pending.push( slot );

    if ( needsClientConvert ) {
      try {
        const { default: heic2any } = await import( 'heic2any' );
        const blob = await heic2any( { blob: file, toType: 'image/jpeg', quality: 0.82 } );
        const out  = Array.isArray( blob ) ? blob[ 0 ] : blob;
        const converted = new File(
          [ out ],
          file.name.replace( /\.(heic|heif)$/i, '.jpg' ),
          { type: 'image/jpeg' }
        );
        const fresh = state.pending.find( p => p.id === slot.id );
        if ( ! fresh ) continue; // user removed it during conversion
        if ( fresh.previewUrl ) URL.revokeObjectURL( fresh.previewUrl );
        fresh.file       = converted;
        fresh.name       = converted.name;
        fresh.previewUrl = URL.createObjectURL( converted );
        fresh.status     = 'ready';
      } catch ( err ) {
        const fresh = state.pending.find( p => p.id === slot.id );
        if ( fresh ) fresh.status = 'error';
        state.error = 'Could not read HEIC photo. Convert to JPEG and try again.';
      }
    }
  }
}
