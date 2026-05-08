import { store } from '@wordpress/interactivity';

if ( 'serviceWorker' in navigator && 'PushManager' in window ) {
  window.addEventListener( 'load', register );
}

async function register() {
  const heyfam = store( 'heyfam' ).state;
  if ( ! heyfam.userId || ! heyfam.vapidKey ) return;

  const reg = await navigator.serviceWorker.register( '/sw.js', { scope: '/' } );

  let permission = Notification.permission;
  if ( permission === 'default' ) {
    // Defer the prompt — let the user opt in via a button later.
    return;
  }
  if ( permission !== 'granted' ) return;

  const sub = await reg.pushManager.getSubscription()
    || await reg.pushManager.subscribe( {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array( heyfam.vapidKey ),
    } );

  await fetch( `${heyfam.apiBase}/push/subscribe`, {
    method: 'POST', credentials: 'include',
    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
    body: JSON.stringify( {
      endpoint: sub.endpoint,
      p256dh:   arrayBufferToBase64( sub.getKey( 'p256dh' ) ),
      auth:     arrayBufferToBase64( sub.getKey( 'auth' ) ),
      expiration_time: sub.expirationTime || null,
    } ),
  } );
}

function urlBase64ToUint8Array( b64 ) {
  const padding = '='.repeat( ( 4 - ( b64.length % 4 ) ) % 4 );
  const base64  = ( b64 + padding ).replace( /-/g, '+' ).replace( /_/g, '/' );
  const raw     = atob( base64 );
  const out     = new Uint8Array( raw.length );
  for ( let i = 0; i < raw.length; i++ ) out[ i ] = raw.charCodeAt( i );
  return out;
}

function arrayBufferToBase64( buffer ) {
  const bytes = new Uint8Array( buffer );
  let bin = '';
  for ( let i = 0; i < bytes.byteLength; i++ ) bin += String.fromCharCode( bytes[ i ] );
  return btoa( bin );
}
