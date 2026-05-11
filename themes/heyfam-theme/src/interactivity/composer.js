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
    get hasFiles() { return state.pending.length > 0; },
    get canSubmit() {
      if ( state.submitting ) return false;
      if ( state.pollMode ) {
        // Question (body) + at least MIN_OPTIONS non-empty options.
        if ( state.body.trim() === '' ) return false;
        return state.optionList.filter( o => o.text.trim() !== '' ).length >= MIN_OPTIONS;
      }
      // Allow text-only posts (body trimmed), or any number of ready files.
      return state.body.trim() !== '' ||
        state.pending.some( p => p.status === 'ready' );
    },
    get photoLabel() {
      const n = state.pending.length;
      return n === 0 ? 'Add photos' : `${ n } photo${ n === 1 ? '' : 's' }`;
    },
    get bodyPlaceholder() { return state.pollMode ? 'Ask a question…' : 'Hey fam…'; },
    get submitLabel()     { return state.pollMode ? 'Post poll'      : 'Post';      },
    get pollToggleLabel() { return state.pollMode ? '← Back'         : 'Make it a poll'; },
    get atMaxOptions()    { return state.optionList.length >= MAX_OPTIONS; },
    get cannotRemove()    { return state.optionList.length <= MIN_OPTIONS; },
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

    *submit( e ) {
      e.preventDefault();
      if ( ! state.canSubmit || state.submitting ) return;
      state.submitting = true;
      state.error      = '';
      const heyfam    = store( 'heyfam' ).state;

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
        state.pending    = [];
        state.pollMode   = false;
        state.optionList = initialOptions();
        state.closesAt   = '';
        state.anon       = false;

        store( 'heyfam/feed' ).callbacks?.refresh?.( heyfam );
      } catch ( err ) {
        state.error = 'Could not post. Try again.';
      } finally {
        state.submitting = false;
      }
    },
  },
} );

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
