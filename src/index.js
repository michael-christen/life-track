import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import lifeTrackApp from './reducers';

import {
  updateEvents
} from './actions';

let store = createStore(
    lifeTrackApp,
    // Redux dev-tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

// Every time state changes, log it
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateEvents({1: {name: 'stuff'}}));
store.dispatch(updateEvents({2: {name: 'other_stuff'}}));
store.dispatch(updateEvents({
  1: {name: 'stuff'},
  2: {name: 'other_stuff'},
}));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
