import fetch from 'isomorphic-fetch';

/* Action Types
 *
 */
export const UPDATE_ENTRIES = 'UPDATE_ENTRIES';
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';


/* Action Creators
 *
 */

export function updateEntries(entries) {
  return { type: UPDATE_ENTRIES, entries };
}


export function requestEntries(begin, end, entryType) {
  return {
    type: REQUEST_ENTRIES,
    begin: begin,
    end: end,
    entryType: entryType,
  };
}


export function receiveEntries(json) {
  // TODO: Parse json properly
  console.log(json);
  let entryDict = {};
  // eslint-disable-next-line
  json.results.map(result => {
    // TODO: Maybe use id instead of date here
    entryDict[result.date] = result;
  });
  return {
    type: RECEIVE_ENTRIES,
    entries: entryDict,
    receivedAt: Date.now(),
  };
}


// Async action creators
export function fetchEntries(begin, end, entryType) {
  return function(dispatch) {
    dispatch(requestEntries(begin, end, entryType));
    return fetch('/api/timeline/links/')
      .then(response => response.json())
      .then(json => dispatch(receiveEntries(json)));
  }
}
