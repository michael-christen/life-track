import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import lifeTrackApp from './reducers';

import {
  updateEntries,
  updateActivities,
  fetchEntries,
  fetchActivities,
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
store.dispatch(updateActivities([
    {
        "type": "self-balancing-robot",
        "role": "Personal",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T16:45:00Z"),
        "end": new Date("2018-10-31T17:15:00Z"),
    },
    {
        "type": "Website Cleanup",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:15:00Z"),
        "end": new Date("2018-10-31T18:35:38Z")
    },
    {
        "type": "Documentation",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:35:00Z"),
        "end": new Date("2018-10-31T18:51:16Z")
    },
    {
        "type": "Tools",
        "role": "Work",
        "category": "",
        "sub_category": "",
        "project": "",
        "start": new Date("2018-10-31T18:55:00Z"),
        "end": new Date("2018-10-31T19:47:16Z")
    },
]));
store.dispatch(fetchActivities());

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <Router>
	  <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
