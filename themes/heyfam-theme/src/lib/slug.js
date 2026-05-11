/** Map a fam display name to a lowercase, hyphenated candidate slug. */
export function slugify( s ) {
  return ( s || '' ).toLowerCase().replace( /[^a-z0-9]+/g, '-' ).replace( /^-+|-+$/g, '' );
}

/** Same shape rule as PHP Slugs::validate(). */
export const SLUG_REGEX = /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/;

export function isValidSlug( s ) {
  return SLUG_REGEX.test( s || '' );
}
