import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { createStore, combineReducers } from 'redux';
import './styles/index.css';
import * as reducers from './reducers/index';
import { Provider } from 'react-redux';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});


ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
