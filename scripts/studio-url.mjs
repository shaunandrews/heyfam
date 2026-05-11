#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );

let json;
try {
  json = execSync( 'studio site status --path ~/Studio/heyfam --json', { encoding: 'utf8' } );
} catch ( err ) {
  console.error( 'Could not run `studio site status`. Is the Studio CLI installed and the site present?' );
  console.error( 'See ~/Studio/heyfam/STUDIO.md for setup notes.' );
  process.exit( 1 );
}

let status;
try { status = JSON.parse( json ); } catch ( err ) {
  console.error( 'studio site status did not return JSON. Update Studio?' );
  process.exit( 1 );
}

const url = status?.localUrl || status?.url || status?.urls?.local;
if ( ! url ) {
  console.error( 'No local URL in studio site status JSON. Keys present:', Object.keys( status ) );
  process.exit( 1 );
}

const envPath = resolve( root, 'tests/.env.test' );
mkdirSync( dirname( envPath ), { recursive: true } );
writeFileSync( envPath, `BASE_URL=${ url }\n` );
console.log( `wrote tests/.env.test  (BASE_URL=${ url })` );
