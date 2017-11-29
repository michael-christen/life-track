import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import lifeTrackApp from './reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
    path: '/',
    url: '/',
    isExact: true,
    params: {},
  };
  const location = {
    hash: '',
    pathname: '',
    search: '',
  };
  const store = createStore(lifeTrackApp);
  ReactDOM.render(
    <Provider store={store}>
      <App match={match} location={location} />
    </Provider>,
    div);
});
