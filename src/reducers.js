import { UPDATE_EVENTS } from './actions';


const initialState = {
  events: {},
};


function lifeTrackApp(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EVENTS:
      return Object.assign({}, state, {
        events: action.events
      });
    default:
      return state;
  }
}

export default lifeTrackApp;
