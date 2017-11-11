import { combineReducers } from 'redux';

import { UPDATE_ENTRIES } from './actions';


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
      return action.entries;
      // TODO: Actually update instead of overwriting
      /*
      return Object.assign({}, state, {
        entries: action.entries
      });
      */
    default:
      return state;
  }
}


const lifeTrackApp = combineReducers({
  entries,
  summaries,
  dateSelection,
});


export default lifeTrackApp;
