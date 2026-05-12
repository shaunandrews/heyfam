import { store, getContext } from '@wordpress/interactivity';
import 'emoji-picker-element';

let pickerEl          = null;
let pendingTarget     = null;
let outsideClickHandler = null;

store( 'heyfam/reactions', {
  actions: {
    *toggle( e ) {
      const container = e?.target?.closest( '[data-id]' );
      const id        = container ? parseInt( container.dataset.id, 10 ) : 0;
      const target    = container?.dataset.targetType || 'post';
      const ctx       = getContext();
      const emoji     = ctx.entry?.emoji;
      const mine      = !! ctx.entry?.mine;
      if ( ! id || ! emoji ) return;
      yield apply( target, id, emoji, mine );
    },
    openPicker( e ) {
      const btn       = e?.currentTarget || e?.target?.closest( 'button' ) || e?.target;
      const container = e?.target?.closest( '[data-id]' );
      const id        = container ? parseInt( container.dataset.id, 10 ) : 0;
      const target    = container?.dataset.targetType || 'post';
      if ( ! id || ! btn ) return;
      openPickerAt( btn, target, id );
    },
  },
} );

function* apply( target_type, target_id, emoji, remove = false ) {
  const heyfam = store( 'heyfam' ).state;
  yield fetch( `${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method: remove ? 'DELETE' : 'POST', credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
    body: JSON.stringify( { target_type, target_id, emoji } ),
  } );
  try { store( 'heyfam/feed' ).callbacks.refresh( heyfam ); } catch ( e ) {}
}

async function applyDirect( target_type, target_id, emoji ) {
  const heyfam = store( 'heyfam' ).state;
  await fetch( `${heyfam.apiBase}/${heyfam.famSlug}/reactions`, {
    method: 'POST', credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
    body: JSON.stringify( { target_type, target_id, emoji } ),
  } );
  try { store( 'heyfam/feed' ).callbacks.refresh( heyfam ); } catch ( e ) {}
}

function getPicker() {
  if ( pickerEl ) return pickerEl;
  pickerEl = document.createElement( 'emoji-picker' );
  pickerEl.classList.add( 'heyfam-emoji-picker' );
  pickerEl.style.position = 'absolute';
  pickerEl.style.zIndex   = '1000';
  pickerEl.style.display  = 'none';
  pickerEl.addEventListener( 'emoji-click', ( ev ) => {
    if ( pendingTarget ) {
      applyDirect( pendingTarget.target_type, pendingTarget.target_id, ev.detail.unicode );
    }
    closePicker();
  } );
  document.body.appendChild( pickerEl );
  return pickerEl;
}

function openPickerAt( btn, target_type, target_id ) {
  const p = getPicker();
  pendingTarget = { target_type, target_id };
  const rect         = btn.getBoundingClientRect();
  const pickerHeight = 400; // emoji-picker-element default
  const fitsBelow    = rect.bottom + pickerHeight + 12 < window.innerHeight;
  const top          = fitsBelow ? rect.bottom + window.scrollY + 6
                                 : rect.top + window.scrollY - pickerHeight - 6;
  const left         = Math.max( 8, Math.min( rect.left + window.scrollX, window.innerWidth - 360 ) );
  p.style.top     = `${top}px`;
  p.style.left    = `${left}px`;
  p.style.display = '';
  // Attach outside-click handler on the NEXT tick so the click that opened
  // the picker doesn't immediately close it.
  if ( outsideClickHandler ) document.removeEventListener( 'click', outsideClickHandler );
  outsideClickHandler = ( ev ) => {
    if ( ! p.contains( ev.target ) && ! btn.contains( ev.target ) ) {
      closePicker();
    }
  };
  setTimeout( () => document.addEventListener( 'click', outsideClickHandler ), 0 );
}

function closePicker() {
  if ( pickerEl ) pickerEl.style.display = 'none';
  pendingTarget = null;
  if ( outsideClickHandler ) {
    document.removeEventListener( 'click', outsideClickHandler );
    outsideClickHandler = null;
  }
}
