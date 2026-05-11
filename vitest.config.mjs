import { defineConfig } from 'vitest/config';

export default defineConfig( {
  test: {
    environment: 'node',
    include:     [ 'themes/heyfam-theme/src/lib/**/__tests__/**/*.test.js' ],
    reporters:   [ 'default' ],
  },
} );
