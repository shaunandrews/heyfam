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
