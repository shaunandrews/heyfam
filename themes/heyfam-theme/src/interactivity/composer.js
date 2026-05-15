import { store, getContext } from '@wordpress/interactivity';
import 'emoji-picker-element';
import { acceptable, isHeic } from '../lib/media.js';

const MAX_FILES = 10;
const MAX_BYTES = 25 * 1024 * 1024; // 25 MB per file before client conversion

const MIN_OPTIONS = 2;
const MAX_OPTIONS = 6;
let nextOptionId = 1;
const newOption = ( placeholder ) => ( { id: nextOptionId++, text: '', emoji: '', placeholder } );
const initialOptions = () => [
  newOption( 'Option 1' ),
  newOption( 'Option 2' ),
];

// Preset durations exposed in the poll composer. `value` is the preset key we
// store in state; `hours` is what we add to `Date.now()` on submit to derive
// the closes-at timestamp. The empty value means "never closes" — same
// semantics as an empty `poll_closes_at` on the server.
const CLOSES_PRESETS = [
  { value: '',   label: 'Never', hours: 0   },
  { value: '1h', label: '1 hour', hours: 1  },
  { value: '4h', label: '4 hours', hours: 4 },
  { value: '1d', label: '1 day', hours: 24  },
  { value: '1w', label: '1 week', hours: 168 },
];

const blankState = () => ( {
  body: '',
  pending: [],
  pollMode: false,
  optionList: initialOptions(),
  closesPreset: '',
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
    closesPreset: '',
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
    /**
     * Closes presets decorated with `is_selected` so the template can drive
     * `data-wp-class--is-active` directly off the loop context. Computed each
     * read; cheap (five entries) and keeps state.closesPreset as the single
     * source of truth.
     */
    get closesPresets() {
      return CLOSES_PRESETS.map( p => ( { ...p, is_selected: p.value === state.closesPreset } ) );
    },
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
    /**
     * Open the singleton emoji picker anchored on the option's emoji button.
     * Closing happens on selection or outside-click (handled in openEmojiPicker).
     * Clicking the button a second time toggles the picker closed.
     */
    pickOptionEmoji( e ) {
      const ctx = getContext();
      const opt = state.optionList.find( o => o.id === ctx?.option?.id );
      if ( ! opt ) return;
      const btn = e.currentTarget;
      if ( emojiPickerIsFor( opt.id ) ) { closeEmojiPicker(); return; }
      openEmojiPicker( btn, opt.id, ( emoji ) => { opt.emoji = emoji; } );
    },
    clearOptionEmoji() {
      const ctx = getContext();
      const opt = state.optionList.find( o => o.id === ctx?.option?.id );
      if ( opt ) opt.emoji = '';
    },
    pickClosesPreset( e ) {
      // Read directly from the button — `data-wp-bind--data-value` mirrors
      // `context.preset.value` so this works for both SSR'd and JS-rendered
      // buttons without needing the IAPI context here.
      const v = e.currentTarget?.dataset?.value ?? '';
      state.closesPreset = v;
    },

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
          body:         state.body,
          pending:      state.pending,
          pollMode:     state.pollMode,
          optionList:   state.optionList,
          closesPreset: state.closesPreset,
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
          return {
            id,
            text:        o.label || '',
            emoji:       o.emoji || '',
            placeholder: `Option ${ o.index + 1 }`,
          };
        } );
        // Pad to MIN_OPTIONS in the unlikely case the server returned fewer.
        while ( state.optionList.length < MIN_OPTIONS ) {
          state.optionList.push( newOption( `Option ${ state.optionList.length + 1 }` ) );
        }
        // We can't reliably reverse-engineer which preset the user originally
        // picked — pick a fresh duration to change the close time, or leave
        // 'Never' to clear it.
        state.closesPreset = '';
      } else {
        state.pollMode     = false;
        state.optionList   = initialOptions();
        state.closesPreset = '';
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
        state.body         = s.body;
        state.pending      = s.pending;
        state.pollMode     = s.pollMode;
        state.optionList   = s.optionList;
        state.closesPreset = s.closesPreset;
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
        // Pair labels with their emojis BEFORE filtering empties, so we don't
        // detach an emoji from its row when an option just above is blank.
        const rows = state.optionList
          .map( o => ( { label: o.text.trim(), emoji: ( o.emoji || '' ).trim() } ) )
          .filter( r => r.label !== '' );
        if ( rows.length < MIN_OPTIONS ) {
          state.error      = `A poll needs at least ${ MIN_OPTIONS } options.`;
          state.submitting = false;
          return;
        }
        for ( const r of rows ) {
          fd.append( 'poll_options[]',       r.label );
          fd.append( 'poll_option_emojis[]', r.emoji );
        }
        const preset = CLOSES_PRESETS.find( p => p.value === state.closesPreset );
        if ( preset && preset.hours > 0 ) {
          // Anchor at submit time so the displayed presets match what the
          // backend stores (the server otherwise sees no closes_at and the
          // poll never closes).
          const closes = new Date( Date.now() + preset.hours * 3600 * 1000 );
          fd.append( 'poll_closes_at', closes.toISOString() );
        }
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
          state.body         = '';
          autoSize( document.querySelector( '.heyfam-composer textarea' ) );
          state.pending      = [];
          state.pollMode     = false;
          state.optionList   = initialOptions();
          state.closesPreset = '';
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

/*
 * Singleton emoji picker for the composer's per-option pickers. Lives on
 * document.body and toggles into position over whichever option button was
 * tapped. Mirrors reactions.js's pattern but the callback writes to the
 * option's `emoji` instead of POSTing a reaction.
 */
let emojiPicker        = null;
let emojiPickerOptId   = null;
let emojiPickerOutside = null;
let emojiPickerCallback = null;

function getEmojiPicker() {
  if ( emojiPicker ) return emojiPicker;
  emojiPicker = document.createElement( 'emoji-picker' );
  emojiPicker.classList.add( 'heyfam-emoji-picker' );
  emojiPicker.style.position = 'absolute';
  emojiPicker.style.zIndex   = '1000';
  emojiPicker.style.display  = 'none';
  emojiPicker.addEventListener( 'emoji-click', ( ev ) => {
    if ( emojiPickerCallback ) emojiPickerCallback( ev.detail.unicode );
    closeEmojiPicker();
  } );
  document.body.appendChild( emojiPicker );
  return emojiPicker;
}

function emojiPickerIsFor( optId ) {
  return emojiPicker && emojiPicker.style.display !== 'none' && emojiPickerOptId === optId;
}

function openEmojiPicker( btn, optId, cb ) {
  const p = getEmojiPicker();
  emojiPickerOptId    = optId;
  emojiPickerCallback = cb;
  const rect   = btn.getBoundingClientRect();
  const h      = 400; // emoji-picker-element default height
  const fits   = rect.bottom + h + 12 < window.innerHeight;
  const top    = fits ? rect.bottom + window.scrollY + 6
                      : rect.top    + window.scrollY - h - 6;
  const left   = Math.max( 8, Math.min( rect.left + window.scrollX, window.innerWidth - 360 ) );
  p.style.top     = `${ top }px`;
  p.style.left    = `${ left }px`;
  p.style.display = '';
  if ( emojiPickerOutside ) document.removeEventListener( 'click', emojiPickerOutside );
  emojiPickerOutside = ( ev ) => {
    if ( ! p.contains( ev.target ) && ! btn.contains( ev.target ) ) closeEmojiPicker();
  };
  setTimeout( () => document.addEventListener( 'click', emojiPickerOutside ), 0 );
}

function closeEmojiPicker() {
  if ( emojiPicker ) emojiPicker.style.display = 'none';
  emojiPickerOptId    = null;
  emojiPickerCallback = null;
  if ( emojiPickerOutside ) {
    document.removeEventListener( 'click', emojiPickerOutside );
    emojiPickerOutside = null;
  }
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
