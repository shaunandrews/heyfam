/** Parse `body.className` and return the post id when on a singular post. */
export function currentPostIdFromClass( className ) {
  const m = ( className || '' ).match( /\bpostid-(\d+)\b/ );
  return m ? parseInt( m[ 1 ], 10 ) : 0;
}

/** Browser-only wrapper. Keep DOM access out of the testable surface. */
export function currentPostId() {
  return typeof document === 'undefined'
    ? 0
    : currentPostIdFromClass( document.body.className );
}
