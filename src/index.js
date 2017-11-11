import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import lifeTrackApp from './reducers';

import {
  updateEntries,
  fetchEntries
} from './actions';

// Redux dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    lifeTrackApp,
    composeEnhancers(
      // Middleware
      applyMiddleware(
        thunkMiddleware,  // Lets us dispatch() functions
      )
    )
);

console.log(store.getState());

// Every time state changes, log it
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateEntries({1: {name: 'stuff'}}));
store.dispatch(updateEntries({2: {name: 'other_stuff'}}));
store.dispatch(updateEntries({
  1: {name: 'stuff'},
  2: {name: 'other_stuff'},
}));
store.dispatch(fetchEntries('b', 'e', 'type'));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
