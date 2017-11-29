import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
const store = createStore(
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

store.dispatch(updateEntries({
  1: {
    title: 'stuff',
    date: '11-11-2017',
    path: "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/23498153_1869512336695645_9040460074186702848_n.jpg",
  },
  2: {
    title: 'other_stuff',
    date: '11-12-2017',
    path: "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/23498153_1869512336695645_9040460074186702848_n.jpg",
  },
}));
store.dispatch(fetchEntries('b', 'e', 'type'));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/month/:year/:month" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
