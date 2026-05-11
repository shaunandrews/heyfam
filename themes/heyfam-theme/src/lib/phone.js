/**
 * Coerce a user-typed phone string to E.164 (digits with leading +, 8-16 chars).
 * Returns null when the input cannot be coerced — callers should treat null
 * as a validation failure rather than retrying.
 *
 * Mirrors the server-side rule in REST\Routes::normalize_phone(). When you
 * change one, change the other and update phone.test.js.
 */
export function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}

/**
 * Tolerant parser for invite phone lists. Splits on comma, newline, semicolon,
 * or whitespace; for each candidate, strips everything except digits and `+`,
 * then re-validates as E.164. Returns one row per candidate with `raw`,
 * `e164`, and `valid` so the UI can show invalid entries with a hint.
 *
 * Duplicates after the first occurrence are flagged invalid so the user
 * notices, rather than silently de-duped.
 */
export function parsePhoneList( raw ) {
  if ( ! raw ) return [];
  const candidates = raw.split( /[\s,;]+/ ).filter( Boolean );
  const seen = new Set();
  return candidates.map( ( c ) => {
    const e164 = normalizePhone( c );
    const valid = !! e164 && ! seen.has( e164 );
    if ( valid ) seen.add( e164 );
    return { raw: c, e164: e164 || c, valid };
  } );
}
