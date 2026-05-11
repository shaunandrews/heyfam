import { describe, it, expect } from 'vitest';
import { acceptable, isHeic, ACCEPT_MIME_RE, HEIC_EXT_RE } from '../media.js';

describe( 'acceptable', () => {
  it( 'returns true for jpeg/png/gif/webp/avif MIME types', () => {
    for ( const type of [ 'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/avif' ] ) {
      expect( acceptable( { type, name: 'x' } ) ).toBe( true );
    }
  } );

  it( 'returns true for heic/heif MIME types', () => {
    expect( acceptable( { type: 'image/heic', name: 'x' } ) ).toBe( true );
    expect( acceptable( { type: 'image/heif', name: 'x' } ) ).toBe( true );
  } );

  it( 'falls back to extension when MIME is wrong (Android HEIC quirk)', () => {
    expect( acceptable( { type: 'application/octet-stream', name: 'photo.heic' } ) ).toBe( true );
    expect( acceptable( { type: '',                         name: 'photo.HEIF' } ) ).toBe( true );
    expect( acceptable( { type: '',                         name: 'IMG.jpg' } ) ).toBe( true );
  } );

  it( 'rejects non-image MIME and unknown extensions', () => {
    expect( acceptable( { type: 'video/mp4', name: 'movie.mp4' } ) ).toBe( false );
    expect( acceptable( { type: 'text/plain', name: 'note.txt' } ) ).toBe( false );
    expect( acceptable( null ) ).toBe( false );
    expect( acceptable( undefined ) ).toBe( false );
  } );
} );

describe( 'isHeic', () => {
  it( 'detects .heic and .heif extensions case-insensitively', () => {
    expect( isHeic( { name: 'foo.heic' } ) ).toBe( true );
    expect( isHeic( { name: 'foo.HEIC' } ) ).toBe( true );
    expect( isHeic( { name: 'foo.heif' } ) ).toBe( true );
  } );

  it( 'detects HEIC/HEIF MIME types', () => {
    expect( isHeic( { type: 'image/heic', name: 'x' } ) ).toBe( true );
    expect( isHeic( { type: 'image/heif', name: 'x' } ) ).toBe( true );
  } );

  it( 'returns false for ordinary jpegs', () => {
    expect( isHeic( { type: 'image/jpeg', name: 'foo.jpg' } ) ).toBe( false );
  } );
} );

describe( 'ACCEPT_MIME_RE / HEIC_EXT_RE', () => {
  it( 'exports raw regexes for composer.js', () => {
    expect( ACCEPT_MIME_RE.test( 'image/jpeg' ) ).toBe( true );
    expect( HEIC_EXT_RE.test( 'a.heic' ) ).toBe( true );
  } );
} );
