import { describe, it, expect } from 'vitest';
import { normalizePhone } from '../phone.js';

describe( 'normalizePhone', () => {
  it( 'returns null when the + is missing', () => {
    expect( normalizePhone( '15555550100' ) ).toBeNull();
  } );

  it( 'returns null when too short', () => {
    expect( normalizePhone( '+1234' ) ).toBeNull();
  } );

  it( 'returns null when too long', () => {
    expect( normalizePhone( '+12345678901234567' ) ).toBeNull();
  } );

  it( 'strips spaces, parens, and dashes', () => {
    expect( normalizePhone( '+1 (555) 555-0100' ) ).toBe( '+15555550100' );
  } );

  it( 'accepts a minimal E.164', () => {
    expect( normalizePhone( '+15555550100' ) ).toBe( '+15555550100' );
  } );
} );
