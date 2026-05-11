import { describe, it, expect } from 'vitest';
import { normalizePhone, parsePhoneList } from '../phone.js';

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

describe( 'parsePhoneList', () => {
  it( 'returns [] for empty input', () => {
    expect( parsePhoneList( '' ) ).toEqual( [] );
    expect( parsePhoneList( null ) ).toEqual( [] );
    expect( parsePhoneList( undefined ) ).toEqual( [] );
  } );

  it( 'splits on commas', () => {
    const out = parsePhoneList( '+15555550100,+15555550101' );
    expect( out ).toHaveLength( 2 );
    expect( out[ 0 ].e164 ).toBe( '+15555550100' );
    expect( out[ 1 ].e164 ).toBe( '+15555550101' );
    expect( out.every( ( r ) => r.valid ) ).toBe( true );
  } );

  it( 'splits on newlines', () => {
    const out = parsePhoneList( '+15555550100\n+15555550101' );
    expect( out ).toHaveLength( 2 );
    expect( out[ 0 ].valid ).toBe( true );
    expect( out[ 1 ].valid ).toBe( true );
  } );

  it( 'splits on semicolons and spaces', () => {
    const out = parsePhoneList( '+15555550100; +15555550101 +15555550102' );
    expect( out ).toHaveLength( 3 );
    expect( out.every( ( r ) => r.valid ) ).toBe( true );
  } );

  it( 'marks invalid candidates without crashing the row', () => {
    const out = parsePhoneList( '+15555550100, garbage, +1555-555-0101' );
    expect( out ).toHaveLength( 3 );
    expect( out[ 0 ].valid ).toBe( true );
    expect( out[ 1 ].valid ).toBe( false );
    expect( out[ 1 ].raw ).toBe( 'garbage' );
    expect( out[ 2 ].valid ).toBe( true );
    expect( out[ 2 ].e164 ).toBe( '+15555550101' );
  } );

  it( 'flags duplicates as invalid after the first occurrence', () => {
    const out = parsePhoneList( '+15555550100, +15555550100' );
    expect( out ).toHaveLength( 2 );
    expect( out[ 0 ].valid ).toBe( true );
    expect( out[ 1 ].valid ).toBe( false );
  } );

  it( 'normalises one-per-line paste with parens and dashes', () => {
    // A typical paste from a contacts app has one number per line; the
    // parser splits on whitespace and runs each row through normalizePhone,
    // which strips parens, dashes, and any leftover spaces inside the row.
    const out = parsePhoneList( '+1(555)555-0100\n+1-555-555-0101\n+15555550102' );
    expect( out ).toHaveLength( 3 );
    expect( out.every( ( r ) => r.valid ) ).toBe( true );
    expect( out.map( ( r ) => r.e164 ) ).toEqual( [
      '+15555550100',
      '+15555550101',
      '+15555550102',
    ] );
  } );
} );
