import { store } from '@wordpress/interactivity';

// state.fams + state.hasFams are seeded server-side via wp_interactivity_state.
// IMPORTANT: do NOT define `fams` or `hasFams` here. IAPI's deepMerge replaces
// arrays rather than merging them, which would wipe the SSR data on hydration.
store( 'heyfam/landing', {
  state: {},
} );
