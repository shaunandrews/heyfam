const CACHE = 'heyfam-shell-v1';
const SHELL = [ '/', '/account', '/manifest.webmanifest' ];

self.addEventListener( 'install', (event) => {
  event.waitUntil( caches.open( CACHE ).then( (c) => c.addAll( SHELL ).catch( () => null ) ) );
  self.skipWaiting();
} );

self.addEventListener( 'activate', (event) => {
  event.waitUntil(
    caches.keys().then( (keys) => Promise.all( keys.filter( (k) => k !== CACHE ).map( (k) => caches.delete( k ) ) ) )
  );
  self.clients.claim();
} );

self.addEventListener( 'fetch', (event) => {
  const req = event.request;
  if ( req.method !== 'GET' || ! req.url.startsWith( self.registration.scope ) ) {
    return;
  }
  if ( req.headers.get( 'accept' )?.includes( 'text/html' ) ) {
    event.respondWith(
      fetch( req ).catch( () => caches.match( '/' ).then( (r) => r || new Response( 'Offline', { status: 503 } ) ) )
    );
  }
} );

self.addEventListener( 'push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch ( _ ) {}
  const title = data.title || 'HeyFam';
  const opts = {
    body: data.body || '',
    icon: data.icon || '/wp-content/plugins/heyfam-core/assets/icon-192.png',
    badge: '/wp-content/plugins/heyfam-core/assets/badge-72.png',
    data: { url: data.url || '/' },
    tag: data.tag,
    renotify: !! data.tag,
  };
  event.waitUntil( self.registration.showNotification( title, opts ) );
} );

self.addEventListener( 'notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    self.clients.matchAll( { type: 'window', includeUncontrolled: true } ).then( (clients) => {
      for ( const c of clients ) {
        if ( c.url.includes( url ) ) return c.focus();
      }
      return self.clients.openWindow( url );
    } )
  );
} );
