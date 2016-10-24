import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App/App';
import * as reducers from './reducers/index';
import './styles/index.css';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
