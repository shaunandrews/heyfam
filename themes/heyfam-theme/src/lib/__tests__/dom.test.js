import { describe, it, expect } from 'vitest';
import { currentPostIdFromClass } from '../dom.js';

describe( 'currentPostIdFromClass', () => {
  it( 'returns 0 when no postid- class is present', () => {
    expect( currentPostIdFromClass( 'logged-in single' ) ).toBe( 0 );
  } );
  it( 'returns the integer when present', () => {
    expect( currentPostIdFromClass( 'single postid-42 logged-in' ) ).toBe( 42 );
  } );
  it( 'is whole-word; refuses to match prefixes', () => {
    expect( currentPostIdFromClass( 'badpostid-42' ) ).toBe( 0 );
  } );
  it( 'tolerates empty input', () => {
    expect( currentPostIdFromClass( '' ) ).toBe( 0 );
  } );
} );
