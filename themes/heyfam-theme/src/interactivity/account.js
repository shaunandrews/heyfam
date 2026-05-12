import { store } from '@wordpress/interactivity';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const debounceTimers = new Map();

// Holds non-reactive instances (DOM streams, library handles) outside of state
// so IAPI's proxy doesn't try to deep-watch them.
const sideTable = {
  cameraStream: null,
  cropper: null,
  pendingObjectUrl: null,
};

const initialPushPermission = typeof Notification !== 'undefined' ? Notification.permission : 'denied';

const isMobileDevice = () => /Mobi|Android|iPhone|iPad/.test( navigator.userAgent || '' );

const { state, actions } = store( 'heyfam/account', {
  state: {
    fams: [],
    loading: true,
    loadError: '',
    pushPermission: initialPushPermission,
    me: { name: '', avatar_url: '', has_uploaded_avatar: false },
    // Native share sheet availability — set in init() so directives can hide
    // the Share button on browsers without navigator.share.
    canShare: false,
    // Camera + crop flow.
    cameraOpen:   false,
    cameraReady:  false,
    cameraError:  '',
    cropOpen:     false,
    cropSrc:      '',
    uploading:    false,
    get logoutUrl() {
      return store( 'heyfam' ).state.logoutUrl || '/wp-login.php?action=logout';
    },
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // pushPermission, fams, or loading change.
    pushNotEnabled:   initialPushPermission !== 'default',
    pushNotGranted:   initialPushPermission !== 'granted',
    pushNotDenied:    initialPushPermission !== 'denied',
    // Hide the empty-state line whenever the user has fams OR the page is still loading.
    hasFamsOrLoading: true,
  },
  actions: {
    *togglePref( e ) {
      const slug    = e.target.getAttribute( 'data-fam' );
      const event   = e.target.getAttribute( 'data-event' );
      const channel = e.target.getAttribute( 'data-channel' );
      const checked = !! e.target.checked;
      const fam = state.fams.find( f => f.slug === slug );
      if ( ! fam ) return;
      // Mutate the reactive proxy so the checkbox stays in sync.
      fam.prefs[ event ][ channel ] = checked;
      // Debounce the save per-fam so rapid toggles coalesce.
      const key = `prefs:${slug}`;
      if ( debounceTimers.has( key ) ) clearTimeout( debounceTimers.get( key ) );
      debounceTimers.set( key, setTimeout( () => savePrefs( slug ), 500 ) );
    },
    *requestPush() {
      if ( typeof Notification === 'undefined' ) return;
      try {
        const result = yield Notification.requestPermission();
        state.pushPermission = result;
        recomputeVisibility();
        if ( result === 'granted' ) {
          // Reload to let push-subscribe.js register normally on its window.load handler.
          window.location.reload();
        }
      } catch ( err ) {
        // ignore
      }
    },
    *onPhotoChosen( e ) {
      const file = e?.target?.files?.[ 0 ];
      // Clear the input so re-selecting the same file still fires `change`.
      if ( e?.target ) e.target.value = '';
      if ( file ) openCrop( file );
    },
    *takePhoto() {
      // Mobile: defer to the OS camera UI via the capture-attribute input.
      if ( isMobileDevice() ) {
        document.querySelector( '[data-camera-input]' )?.click();
        return;
      }
      // Desktop: in-page <video> stream.
      state.cameraError = '';
      state.cameraReady = false;
      state.cameraOpen  = true;
      if ( ! navigator.mediaDevices?.getUserMedia ) {
        state.cameraError = 'This browser does not support camera capture.';
        return;
      }
      try {
        const stream = yield navigator.mediaDevices.getUserMedia( { video: { facingMode: 'user' } } );
        sideTable.cameraStream = stream;
        const video = document.querySelector( '.heyfam-camera__video' );
        if ( video ) {
          video.srcObject = stream;
          yield new Promise( resolve => video.addEventListener( 'loadedmetadata', resolve, { once: true } ) );
          state.cameraReady = true;
        }
      } catch ( err ) {
        state.cameraError = err?.name === 'NotAllowedError'
          ? 'Camera permission was denied.'
          : 'Could not access the camera.';
      }
    },
    *capturePhoto() {
      const video = document.querySelector( '.heyfam-camera__video' );
      if ( ! video || ! video.videoWidth ) return;
      const canvas = document.createElement( 'canvas' );
      canvas.width  = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext( '2d' ).drawImage( video, 0, 0 );
      const blob = yield new Promise( resolve => canvas.toBlob( resolve, 'image/jpeg', 0.92 ) );
      stopCamera();
      if ( blob ) openCrop( blob );
    },
    *closeCamera() {
      stopCamera();
    },
    *closeCrop() {
      destroyCropper();
    },
    *saveCrop() {
      if ( ! sideTable.cropper ) return;
      state.uploading = true;
      const canvas = sideTable.cropper.getCroppedCanvas( {
        width:  512,
        height: 512,
        imageSmoothingQuality: 'high',
      } );
      const blob = yield new Promise( resolve => canvas.toBlob( resolve, 'image/jpeg', 0.9 ) );
      if ( ! blob ) { state.uploading = false; return; }
      const heyfam = store( 'heyfam' ).state;
      const fd = new FormData();
      fd.append( 'photo', blob, 'avatar.jpg' );
      try {
        const r = yield fetch( `${ heyfam.apiBase }/me/avatar`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce }, body: fd,
        } );
        if ( ! r.ok ) throw new Error( 'avatar-failed' );
        const body = yield r.json();
        state.me.avatar_url          = body.avatar_url;
        state.me.has_uploaded_avatar = true;
        destroyCropper();
      } catch ( err ) {
        alert( 'Could not upload photo. Try again.' );
      } finally {
        state.uploading = false;
      }
    },
    *onFamNameInput( e ) {
      const slug = e.target.dataset.fam;
      const fam = state.fams.find( f => f.slug === slug );
      if ( fam ) fam.name = e.target.value;
    },
    *saveFamName( e ) {
      e.preventDefault();
      const slug = e.target.dataset.fam;
      const fam = state.fams.find( f => f.slug === slug );
      if ( ! fam ) return;
      const name = ( fam.name || '' ).trim();
      if ( ! name ) return;
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${slug}/name`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { name } ),
        } );
        if ( ! r.ok ) throw new Error( 'rename-failed' );
        const body = yield r.json();
        if ( body && body.name ) fam.name = body.name;
      } catch ( err ) {
        alert( 'Could not save the family name. Try again.' );
      }
    },
    selectAll( e ) {
      if ( e?.target?.select ) e.target.select();
    },
    updateInviteRecipients( e ) {
      const fam = state.fams.find( f => f.slug === e.target.dataset.fam );
      if ( fam ) fam.inviteRecipients = e.target.value;
    },
    updateInviteNote( e ) {
      const fam = state.fams.find( f => f.slug === e.target.dataset.fam );
      if ( fam ) fam.inviteNote = e.target.value;
    },
    *copyInviteLink( e ) {
      const slug = e.target.dataset.fam;
      const fam  = state.fams.find( f => f.slug === slug );
      if ( ! fam?.inviteUrl ) return;
      try {
        yield navigator.clipboard.writeText( fam.inviteUrl );
        fam.inviteStatus = 'Link copied.';
        setTimeout( () => { if ( fam.inviteStatus === 'Link copied.' ) fam.inviteStatus = ''; }, 2500 );
      } catch ( err ) {
        fam.inviteStatus = 'Could not copy. Long-press the link to copy manually.';
      }
    },
    *shareInviteLink( e ) {
      const slug = e.target.dataset.fam;
      const fam  = state.fams.find( f => f.slug === slug );
      if ( ! fam?.inviteUrl || ! navigator.share ) return;
      try {
        yield navigator.share( { title: `Join ${fam.name} on HeyFam`, url: fam.inviteUrl } );
      } catch ( err ) {
        // User cancelled or share failed silently — no UI change.
      }
    },
    *toggleQr( e ) {
      const slug = e.target.dataset.fam;
      const fam  = state.fams.find( f => f.slug === slug );
      if ( ! fam ) return;
      fam.qrOpen = ! fam.qrOpen;
      if ( fam.qrOpen && ! fam.qrSvg ) {
        try {
          const { default: QRCode } = yield import( 'qrcode-svg' );
          const qr = new QRCode( {
            content: fam.inviteUrl, padding: 2, width: 192, height: 192,
            color: '#1a1f17', background: '#f4f6f0', ecl: 'M', join: true,
          } );
          fam.qrSvg = qr.svg();
          // Reactive innerHTML isn't a thing in IAPI, so paint manually.
          const host = e.target.closest( '.heyfam-account__fam' )?.querySelector( '.heyfam-account__invite-qr' );
          if ( host ) host.innerHTML = fam.qrSvg;
        } catch ( err ) {
          fam.qrOpen = false;
          alert( 'Could not render the QR code.' );
        }
      }
    },
    *sendInvites( e ) {
      e.preventDefault();
      const slug = e.target.dataset.fam;
      const fam  = state.fams.find( f => f.slug === slug );
      if ( ! fam || fam.sendingInvites ) return;
      const raw = ( fam.inviteRecipients || '' ).split( /[\n,]+/ ).map( s => s.trim() ).filter( Boolean );
      if ( ! raw.length ) {
        fam.inviteStatus = 'Add at least one phone number or email.';
        return;
      }
      fam.sendingInvites = true;
      fam.inviteStatus   = '';
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${slug}/invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { recipients: raw, message_note: fam.inviteNote || '' } ),
        } );
        if ( ! r.ok ) throw new Error( 'invite-failed' );
        const body = yield r.json();
        const sent = ( body.issued || [] ).filter( i => i.sent ).length;
        const skipped = ( body.skipped || [] ).length;
        fam.inviteStatus = `Sent ${sent}${ skipped ? ` (${skipped} skipped — invalid)` : '' }.`;
        fam.inviteRecipients = '';
        fam.inviteNote       = '';
      } catch ( err ) {
        fam.inviteStatus = 'Could not send. Try again.';
      } finally {
        fam.sendingInvites = false;
      }
    },
    *clearAvatar() {
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/me/avatar`, {
          method: 'DELETE', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        if ( ! r.ok ) throw new Error( 'reset-failed' );
        const body = yield r.json();
        state.me.avatar_url          = body.avatar_url;
        state.me.has_uploaded_avatar = false;
      } catch ( err ) {
        alert( 'Could not reset. Try again.' );
      }
    },
  },
  callbacks: {
    *loadMe() {
      const heyfam = store( 'heyfam' ).state;
      if ( ! heyfam.userId ) return;
      try {
        const r = yield fetch( `${ heyfam.apiBase }/me`, {
          credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        if ( ! r.ok ) return;
        const body = yield r.json();
        state.me.name                = body.name || '';
        state.me.avatar_url          = body.avatar_url || '';
        state.me.has_uploaded_avatar = !! body.has_uploaded_avatar;
      } catch ( err ) {
        // ignore; the page still works without the avatar block
      }
    },
    *init() {
      // SSR doesn't render the is-hidden class on these elements. IAPI's hydration
      // skips re-applying class bindings whose initial DOM state matches the
      // proxy. Toggle each flag through its opposite to trip the proxy's
      // change-detection, then recomputeVisibility() re-asserts the right values.
      state.pushNotEnabled   = ! state.pushNotEnabled;
      state.pushNotGranted   = ! state.pushNotGranted;
      state.pushNotDenied    = ! state.pushNotDenied;
      state.hasFamsOrLoading = ! state.hasFamsOrLoading;
      state.canShare         = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
      recomputeVisibility();

      const heyfam = store( 'heyfam' ).state;
      if ( ! heyfam.userId ) {
        // Not logged in; bounce to login.
        window.location.href = '/login';
        return;
      }
      try {
        const r = yield fetch( `${heyfam.apiBase}/me/fams`, {
          credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
        if ( ! r.ok ) throw new Error( 'load-failed' );
        const body = yield r.json();
        const fams = ( body && body.fams ) || [];
        // Fetch prefs + invite-link for each fam in parallel.
        const withPrefs = yield Promise.all( fams.map( async ( fam ) => {
          const headers = { 'X-WP-Nonce': heyfam.nonce };
          const [ prefsResp, linkResp ] = await Promise.all( [
            fetch( `${heyfam.apiBase}/${fam.slug}/prefs`, { credentials: 'include', headers } ).catch( () => null ),
            fetch( `${heyfam.apiBase}/${fam.slug}/invite-link`, { credentials: 'include', headers } ).catch( () => null ),
          ] );
          let prefs = defaultPrefs();
          if ( prefsResp && prefsResp.ok ) {
            const pb = await prefsResp.json();
            if ( pb && pb.prefs ) prefs = pb.prefs;
          }
          let inviteUrl = '';
          if ( linkResp && linkResp.ok ) {
            const lb = await linkResp.json();
            inviteUrl = lb?.url || '';
          }
          return {
            ...fam,
            prefs,
            inviteUrl,
            inviteRecipients:  '',
            inviteNote:        '',
            sendingInvites:    false,
            inviteStatus:      '',
            qrOpen:            false,
            qrSvg:             '',
          };
        } ) );
        state.fams = withPrefs;
        state.loading = false;
        recomputeVisibility();
      } catch ( err ) {
        state.loading = false;
        state.loadError = 'Could not load your fams. Try refreshing.';
        recomputeVisibility();
      }
    },
  },
} );

function recomputeVisibility() {
  state.pushNotEnabled   = state.pushPermission !== 'default';
  state.pushNotGranted   = state.pushPermission !== 'granted';
  state.pushNotDenied    = state.pushPermission !== 'denied';
  state.hasFamsOrLoading = !! state.fams.length || !! state.loading;
}

function defaultPrefs() {
  return {
    posts:     { push: true, email: true,  sms: true },
    comments:  { push: true, email: false, sms: false },
    reactions: { push: true, email: false, sms: false },
  };
}

function stopCamera() {
  sideTable.cameraStream?.getTracks?.().forEach( t => t.stop() );
  sideTable.cameraStream = null;
  const video = document.querySelector( '.heyfam-camera__video' );
  if ( video ) video.srcObject = null;
  state.cameraOpen  = false;
  state.cameraReady = false;
  state.cameraError = '';
}

function openCrop( fileOrBlob ) {
  if ( sideTable.pendingObjectUrl ) URL.revokeObjectURL( sideTable.pendingObjectUrl );
  const url = URL.createObjectURL( fileOrBlob );
  sideTable.pendingObjectUrl = url;
  state.cropSrc  = url;
  state.cropOpen = true;
  // CropperJS needs the <img> to have a src and be in the DOM. The element
  // exists already (template renders unconditionally; visibility is class-toggled),
  // so wait one frame for the new src to settle, then initialise.
  requestAnimationFrame( () => {
    const img = document.querySelector( '.heyfam-crop__image' );
    if ( ! img ) return;
    sideTable.cropper?.destroy?.();
    sideTable.cropper = new Cropper( img, {
      aspectRatio: 1,
      viewMode:    1,
      autoCropArea: 1,
      background:  false,
      dragMode:    'move',
      guides:      false,
      center:      false,
      cropBoxResizable: true,
      toggleDragModeOnDblclick: false,
    } );
  } );
}

function destroyCropper() {
  sideTable.cropper?.destroy?.();
  sideTable.cropper = null;
  if ( sideTable.pendingObjectUrl ) {
    URL.revokeObjectURL( sideTable.pendingObjectUrl );
    sideTable.pendingObjectUrl = null;
  }
  state.cropOpen = false;
  state.cropSrc  = '';
}

async function savePrefs( slug ) {
  const heyfam = store( 'heyfam' ).state;
  const fam = state.fams.find( f => f.slug === slug );
  if ( ! fam ) return;
  try {
    await fetch( `${heyfam.apiBase}/${slug}/prefs`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
      body: JSON.stringify( { prefs: fam.prefs } ),
    } );
  } catch ( err ) {
    // Silent failure — next toggle will retry.
  }
}
