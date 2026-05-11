import { describe, it, expect } from 'vitest';
import { relativeTime } from '../time.js';

const NOW = Date.UTC( 2026, 4, 11, 12, 0, 0 ); // 2026-05-11T12:00:00Z

describe( 'relativeTime', () => {
  it( 'returns "" for falsy input', () => {
    expect( relativeTime( '', NOW ) ).toBe( '' );
    expect( relativeTime( null, NOW ) ).toBe( '' );
  } );

  it( 'returns "" for unparseable input', () => {
    expect( relativeTime( 'not a date', NOW ) ).toBe( '' );
  } );

  it( '"now" within the last minute', () => {
    expect( relativeTime( '2026-05-11T11:59:30Z', NOW ) ).toBe( 'now' );
  } );

  it( 'minutes', () => {
    expect( relativeTime( '2026-05-11T11:55:00Z', NOW ) ).toBe( '5m ago' );
  } );

  it( 'hours', () => {
    expect( relativeTime( '2026-05-11T09:00:00Z', NOW ) ).toBe( '3h ago' );
  } );

  it( 'days', () => {
    expect( relativeTime( '2026-05-09T12:00:00Z', NOW ) ).toBe( '2d ago' );
  } );

  it( 'month + day for same-year older', () => {
    expect( relativeTime( '2026-01-15T00:00:00Z', NOW ) ).toBe( 'Jan 15' );
  } );

  it( 'month + day + year for older years', () => {
    expect( relativeTime( '2024-06-20T00:00:00Z', NOW ) ).toBe( 'Jun 20, 2024' );
  } );
} );
