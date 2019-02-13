import { combineReducers } from 'redux';

import { RECEIVE_ENTRIES, UPDATE_ENTRIES } from './actions';
import { UPDATE_ACTIVITIES } from './actions';


const INITIAL_SELECTION = {
  // TODO: Specify defaults
  begin: '',
  end: '',
  // TODO: Define granularity [day, week, month, year]
  granularity: 'day',
};


function dateSelection(state = INITIAL_SELECTION, action) {
  switch (action.type) {
    default:
      return state;
  }
}


function summaries(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}


function entries(state = {}, action) {
  switch (action.type) {
    case UPDATE_ENTRIES:
    case RECEIVE_ENTRIES:
      return action.entries;
      // Actually update instead of overwriting
      /*
      return Object.assign({}, state, {
        entries: action.entries
      });
      */
    default:
      return state;
  }
}


function activities(state = [], action) {
  switch (action.type) {
    case UPDATE_ACTIVITIES:
	  return action.payload;
    default:
      return state;
  }
}


const lifeTrackApp = combineReducers({
  entries,
  summaries,
  dateSelection,
  activities,
});


export default lifeTrackApp;
