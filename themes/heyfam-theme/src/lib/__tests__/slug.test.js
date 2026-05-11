import { describe, it, expect } from 'vitest';
import { slugify, isValidSlug } from '../slug.js';

describe( 'slugify', () => {
  it( 'lowercases and replaces non-alphanumerics with hyphens', () => {
    expect( slugify( 'The Smith Family!' ) ).toBe( 'the-smith-family' );
  } );
  it( 'collapses runs of non-alphanumerics', () => {
    expect( slugify( 'foo!!!bar___baz' ) ).toBe( 'foo-bar-baz' );
  } );
  it( 'trims leading/trailing hyphens', () => {
    expect( slugify( '---hey---' ) ).toBe( 'hey' );
  } );
  it( 'returns empty string for empty input', () => {
    expect( slugify( '' ) ).toBe( '' );
  } );
} );

describe( 'isValidSlug', () => {
  it.each( [
    [ 'smiths',   true  ],
    [ 'a',        false ], // too short
    [ 'ab',       false ], // 2 chars — rule is 3-32
    [ 'abc',      true  ],
    [ 'a'.repeat( 33 ), false ],
    [ '-leading', false ],
    [ 'trailing-',false ],
    [ 'WithCAPS', false ],
    [ 'with_underscore', false ],
  ] )( '%s → %s', ( slug, valid ) => {
    expect( isValidSlug( slug ) ).toBe( valid );
  } );
} );
