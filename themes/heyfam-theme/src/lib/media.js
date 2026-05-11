/**
 * Media helpers for the composer.
 *
 * Centralizes the accept/reject decision for image files so it's testable
 * outside the IAPI store. Browsers report iPhone HEIC photos inconsistently
 * (Safari = image/heic; Android Chrome = application/octet-stream); the
 * `acceptable` check has to fall back to the file extension when the MIME
 * type doesn't match.
 */

export const ACCEPT_MIME_RE = /^image\/(jpeg|png|gif|webp|avif|heic|heif)$/i;
export const HEIC_EXT_RE    = /\.(heic|heif)$/i;
const ACCEPT_EXT_RE         = /\.(jpe?g|png|gif|webp|avif|heic|heif)$/i;

/**
 * @param {{ type?: string, name?: string }} file
 * @returns {boolean}
 */
export function acceptable( file ) {
  if ( ! file ) return false;
  if ( ACCEPT_MIME_RE.test( file.type || '' ) ) return true;
  return ACCEPT_EXT_RE.test( file.name || '' );
}

/**
 * @param {{ type?: string, name?: string }} file
 * @returns {boolean}
 */
export function isHeic( file ) {
  if ( ! file ) return false;
  if ( HEIC_EXT_RE.test( file.name || '' ) ) return true;
  return /heif|heic/i.test( file.type || '' );
}
