/**
 * Mirror of PHP REST\Routes::relative_time(). Same buckets, same month strings.
 * Pure: pass `now` to make this deterministic in tests.
 */
const MONTHS = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];

export function relativeTime( iso, now = Date.now() ) {
  if ( ! iso ) return '';
  const then = new Date( iso ).getTime();
  if ( Number.isNaN( then ) ) return '';
  const diff = ( now - then ) / 1000;
  if ( diff < 60 )         return 'now';
  if ( diff < 3600 )       return `${Math.floor( diff / 60 )}m ago`;
  if ( diff < 86400 )      return `${Math.floor( diff / 3600 )}h ago`;
  if ( diff < 86400 * 7 )  return `${Math.floor( diff / 86400 )}d ago`;
  const d        = new Date( iso );
  const m        = MONTHS[ d.getUTCMonth() ];
  const day      = d.getUTCDate();
  const year     = d.getUTCFullYear();
  const thisYear = new Date( now ).getUTCFullYear();
  return year === thisYear ? `${m} ${day}` : `${m} ${day}, ${year}`;
}
