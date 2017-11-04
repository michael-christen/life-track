/* Action Types
 *
 */
export const UPDATE_EVENTS = 'UPDATE_EVENTS';


/* Action Creators
 *
 */

export function updateEvents(events) {
  return { type: UPDATE_EVENTS, events };
}
