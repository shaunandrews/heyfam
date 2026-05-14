import { store } from '@wordpress/interactivity';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

let prefsDebounce = null;

// Holds non-reactive instances (DOM streams, library handles) outside of state
// so IAPI's proxy doesn't try to deep-watch them.
const sideTable = {
  cameraStream: null,
  cropper: null,
  pendingObjectUrl: null,
};

const initialPushPermission = typeof Notification !== 'undefined' ? Notification.permission : 'denied';

const isMobileDevice = () => /Mobi|Android|iPhone|iPad/.test( navigator.userAgent || '' );

const emptyFam = () => ( {
  slug:             '',
  name:             '',
  blog_id:          0,
  url:              '',
  prefs:            defaultPrefs(),
  inviteUrl:        '',
  inviteRecipients: '',
  inviteNote:       '',
  sendingInvites:   false,
  inviteStatus:     '',
  qrOpen:           false,
  qrSvg:            '',
} );

const { state, actions } = store( 'heyfam/account', {
  state: {
    fam: emptyFam(),
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
    get newFamUrl() {
      return store( 'heyfam' ).state.newFamUrl || '/signup';
    },
    // IAPI directives only react to direct property access. Plain getters
    // computed off other state aren't picked up at hydration, so we keep
    // visibility flags as plain reactive props and recompute them whenever
    // pushPermission changes.
    pushNotEnabled:   initialPushPermission !== 'default',
    pushNotGranted:   initialPushPermission !== 'granted',
    pushNotDenied:    initialPushPermission !== 'denied',
  },
  actions: {
    *togglePref( e ) {
      const event   = e.target.getAttribute( 'data-event' );
      const channel = e.target.getAttribute( 'data-channel' );
      const checked = !! e.target.checked;
      if ( ! state.fam.slug ) return;
      // Mutate the reactive proxy so the checkbox stays in sync.
      state.fam.prefs[ event ][ channel ] = checked;
      if ( prefsDebounce ) clearTimeout( prefsDebounce );
      prefsDebounce = setTimeout( savePrefs, 500 );
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
      state.fam.name = e.target.value;
    },
    *saveFamName( e ) {
      e.preventDefault();
      if ( ! state.fam.slug ) return;
      const name = ( state.fam.name || '' ).trim();
      if ( ! name ) return;
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${state.fam.slug}/name`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { name } ),
        } );
        if ( ! r.ok ) throw new Error( 'rename-failed' );
        const body = yield r.json();
        if ( body && body.name ) state.fam.name = body.name;
      } catch ( err ) {
        alert( 'Could not save the family name. Try again.' );
      }
    },
    selectAll( e ) {
      if ( e?.target?.select ) e.target.select();
    },
    updateInviteRecipients( e ) {
      state.fam.inviteRecipients = e.target.value;
    },
    updateInviteNote( e ) {
      state.fam.inviteNote = e.target.value;
    },
    *copyInviteLink() {
      if ( ! state.fam.inviteUrl ) return;
      try {
        yield navigator.clipboard.writeText( state.fam.inviteUrl );
        state.fam.inviteStatus = 'Link copied.';
        setTimeout( () => { if ( state.fam.inviteStatus === 'Link copied.' ) state.fam.inviteStatus = ''; }, 2500 );
      } catch ( err ) {
        state.fam.inviteStatus = 'Could not copy. Long-press the link to copy manually.';
      }
    },
    *shareInviteLink() {
      if ( ! state.fam.inviteUrl || ! navigator.share ) return;
      try {
        yield navigator.share( { title: `Join ${state.fam.name} on HeyFam`, url: state.fam.inviteUrl } );
      } catch ( err ) {
        // User cancelled or share failed silently — no UI change.
      }
    },
    *toggleQr( e ) {
      state.fam.qrOpen = ! state.fam.qrOpen;
      if ( state.fam.qrOpen && ! state.fam.qrSvg ) {
        try {
          const { default: QRCode } = yield import( 'qrcode-svg' );
          const qr = new QRCode( {
            content: state.fam.inviteUrl, padding: 2, width: 192, height: 192,
            color: '#1a1f17', background: '#f4f6f0', ecl: 'M', join: true,
          } );
          state.fam.qrSvg = qr.svg();
          // Reactive innerHTML isn't a thing in IAPI, so paint manually.
          const host = e.target.closest( '.heyfam-account__fam' )?.querySelector( '.heyfam-account__invite-qr' );
          if ( host ) host.innerHTML = state.fam.qrSvg;
        } catch ( err ) {
          state.fam.qrOpen = false;
          alert( 'Could not render the QR code.' );
        }
      }
    },
    *sendInvites( e ) {
      e.preventDefault();
      if ( ! state.fam.slug || state.fam.sendingInvites ) return;
      const raw = ( state.fam.inviteRecipients || '' ).split( /[\n,]+/ ).map( s => s.trim() ).filter( Boolean );
      if ( ! raw.length ) {
        state.fam.inviteStatus = 'Add at least one phone number or email.';
        return;
      }
      state.fam.sendingInvites = true;
      state.fam.inviteStatus   = '';
      const heyfam = store( 'heyfam' ).state;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${state.fam.slug}/invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { recipients: raw, message_note: state.fam.inviteNote || '' } ),
        } );
        if ( ! r.ok ) throw new Error( 'invite-failed' );
        const body = yield r.json();
        const sent = ( body.issued || [] ).filter( i => i.sent ).length;
        const skipped = ( body.skipped || [] ).length;
        state.fam.inviteStatus = `Sent ${sent}${ skipped ? ` (${skipped} skipped — invalid)` : '' }.`;
        state.fam.inviteRecipients = '';
        state.fam.inviteNote       = '';
      } catch ( err ) {
        state.fam.inviteStatus = 'Could not send. Try again.';
      } finally {
        state.fam.sendingInvites = false;
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
      state.pushNotEnabled = ! state.pushNotEnabled;
      state.pushNotGranted = ! state.pushNotGranted;
      state.pushNotDenied  = ! state.pushNotDenied;
      state.canShare       = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
      recomputeVisibility();

      const heyfam = store( 'heyfam' ).state;
      if ( ! heyfam.userId ) {
        // Not logged in; bounce to login.
        window.location.href = '/login';
        return;
      }
      const slug = heyfam.famSlug;
      if ( ! slug ) {
        state.loading   = false;
        state.loadError = 'This settings page must be opened from a family.';
        return;
      }
      try {
        const headers = { 'X-WP-Nonce': heyfam.nonce };
        const [ famsResp, prefsResp, linkResp ] = yield Promise.all( [
          fetch( `${heyfam.apiBase}/me/fams`,           { credentials: 'include', headers } ).catch( () => null ),
          fetch( `${heyfam.apiBase}/${slug}/prefs`,     { credentials: 'include', headers } ).catch( () => null ),
          fetch( `${heyfam.apiBase}/${slug}/invite-link`, { credentials: 'include', headers } ).catch( () => null ),
        ] );

        // Look up the current fam in the membership list so we get the name +
        // blog_id without a per-fam endpoint. If the user isn't a member, fall
        // back to a minimal record so the UI still binds.
        let famRecord = null;
        if ( famsResp && famsResp.ok ) {
          const body = yield famsResp.json();
          famRecord = ( body && body.fams || [] ).find( f => f.slug === slug ) || null;
        }

        let prefs = defaultPrefs();
        if ( prefsResp && prefsResp.ok ) {
          const pb = yield prefsResp.json();
          if ( pb && pb.prefs ) prefs = pb.prefs;
        }
        let inviteUrl = '';
        if ( linkResp && linkResp.ok ) {
          const lb = yield linkResp.json();
          inviteUrl = lb?.url || '';
        }

        Object.assign( state.fam, famRecord || { slug, name: slug }, { prefs, inviteUrl } );
        state.loading = false;
      } catch ( err ) {
        state.loading   = false;
        state.loadError = 'Could not load your settings. Try refreshing.';
      }
    },
  },
} );

function recomputeVisibility() {
  state.pushNotEnabled = state.pushPermission !== 'default';
  state.pushNotGranted = state.pushPermission !== 'granted';
  state.pushNotDenied  = state.pushPermission !== 'denied';
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

async function savePrefs() {
  const heyfam = store( 'heyfam' ).state;
  if ( ! state.fam.slug ) return;
  try {
    await fetch( `${heyfam.apiBase}/${state.fam.slug}/prefs`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
      body: JSON.stringify( { prefs: state.fam.prefs } ),
    } );
  } catch ( err ) {
    // Silent failure — next toggle will retry.
  }
}
