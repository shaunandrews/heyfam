#!/usr/bin/env node
import { build } from 'esbuild';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root    = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const entry   = `${root}/themes/heyfam-theme/src/interactivity/index.js`;
const outdir  = `${root}/themes/heyfam-theme/build`;

mkdirSync( outdir, { recursive: true } );

await build( {
  entryPoints: [ entry ],
  outdir,
  // `splitting: true` is what code-splits `heic2any` into a separate chunk
  // so its ~430 KB cost lands only on browsers that actually need to convert
  // HEIC photos client-side. Esbuild requires `format: 'esm'` for splitting.
  splitting: true,
  bundle: true,
  format: 'esm',
  external: [ '@wordpress/interactivity' ],
  minify: process.env.MINIFY === '1',
  sourcemap: process.env.MINIFY === '1' ? false : 'inline',
  target: [ 'es2022' ],
  logLevel: 'info',
} );

const version = String( Math.floor( Date.now() / 1000 ) );
writeFileSync(
  `${outdir}/index.asset.php`,
  `<?php return array( 'dependencies' => array(), 'version' => '${version}' );\n`
);
