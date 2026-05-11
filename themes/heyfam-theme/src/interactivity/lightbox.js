import { store, getContext } from '@wordpress/interactivity';

const { state, actions } = store( 'heyfam/lightbox', {
  state: {
    open:   false,
    images: [], // full-res URLs for the currently-opened post
    index:  0,
    get current()    { return state.images[ state.index ] || null; },
    get currentUrl() { return state.current?.url || ''; },
    get currentAlt() { return state.current?.alt || ''; },
    get hasPrev()    { return state.index > 0; },
    get hasNext()    { return state.index < state.images.length - 1; },
    get position() {
      return state.images.length > 1
        ? `${ state.index + 1 } / ${ state.images.length }`
        : '';
    },
  },
  actions: {
    open( e ) {
      e.preventDefault();
      const ctx   = getContext();
      // `context.item` is the post (set by data-wp-each in the post-card),
      // `context.photo` is the specific image clicked.
      const post  = ctx?.item;
      const photo = ctx?.photo;
      if ( ! post || ! photo ) return;
      state.images = ( post.images || [] ).map( i => ( { id: i.id, url: i.url, alt: i.alt } ) );
      state.index  = state.images.findIndex( i => i.id === photo.id );
      if ( state.index < 0 ) state.index = 0;
      state.open = true;
      document.body.classList.add( 'heyfam-lightbox-open' );
    },
    close() {
      state.open = false;
      document.body.classList.remove( 'heyfam-lightbox-open' );
    },
    prev() { if ( state.hasPrev ) state.index--; },
    next() { if ( state.hasNext ) state.index++; },
    onBackdrop( e ) {
      if ( e.target.classList?.contains( 'heyfam-lightbox' ) ) {
        actions.close();
      }
    },
    onKey( e ) {
      if ( ! state.open ) return;
      if ( e.key === 'Escape' )     actions.close();
      if ( e.key === 'ArrowLeft' )  actions.prev();
      if ( e.key === 'ArrowRight' ) actions.next();
    },
  },
  callbacks: {
    /** Run once at hydration: bind global key handler + swipe handlers. */
    init() {
      document.addEventListener( 'keydown', actions.onKey );

      // Touch swipe: simple horizontal threshold. Only active while open.
      let touchStartX = 0;
      document.addEventListener( 'touchstart', e => {
        if ( ! state.open ) return;
        touchStartX = e.touches[ 0 ]?.clientX || 0;
      }, { passive: true } );
      document.addEventListener( 'touchend', e => {
        if ( ! state.open ) return;
        const dx = ( e.changedTouches[ 0 ]?.clientX || 0 ) - touchStartX;
        if ( dx >  60 && state.hasPrev ) actions.prev();
        if ( dx < -60 && state.hasNext ) actions.next();
      }, { passive: true } );
    },
  },
} );
