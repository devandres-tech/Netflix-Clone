import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import promise from 'redux-promise';
import '@babel/polyfill';

import App from './containers/App';
// Import main sass file to apply global styles
import './static/sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// TODO
// - implement carousel
const app = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
