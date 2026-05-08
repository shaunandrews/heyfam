import { store, getContext } from '@wordpress/interactivity';

store( 'heyfam/router', {
  actions: {
    *navigate( e ) {
      const a = e?.target?.closest( 'a' );
      if ( ! a || a.target === '_blank' || e.metaKey || e.ctrlKey ) return;
      e.preventDefault();
      window.location.href = a.href;
    },
  },
} );
