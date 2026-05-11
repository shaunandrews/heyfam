import { defineConfig, devices } from '@playwright/test';
import { config as loadEnv } from 'dotenv';
import { resolve } from 'node:path';

loadEnv( { path: resolve( process.cwd(), 'tests/.env.test' ) } );

const baseURL = process.env.BASE_URL || 'http://localhost:8881';

export default defineConfig( {
  testDir:        './tests/e2e',
  fullyParallel:  false,                     // golden-path is a single ordered story
  forbidOnly:     !! process.env.CI,
  retries:        process.env.CI ? 2 : 0,
  workers:        1,                          // SQLite + state-mutation = serial
  reporter:       process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices[ 'Desktop Chrome' ] } },
  ],
} );
