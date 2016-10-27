import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './containers/App';
import Weight from './containers/Weight/Weight';
import Bodyfat from './containers/Bodyfat/Bodyfat';
import * as reducers from './reducers/index';
import './styles/index.css';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={ store }>
   <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to='weight'/>
        <Route path="weight" component={Weight}/>
        <Route path="bodyfat" component={Bodyfat}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
