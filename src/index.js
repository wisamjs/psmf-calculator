import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './containers/App';
import Weight from './containers/Weight/Weight';
import Bodyfat from './containers/Bodyfat/Bodyfat';
import Landing from './containers/Landing/Landing';
import Training from './containers/Training/Training';
import Results from './containers/Results/Results';
import Gender from './containers/Gender/Gender';

import * as reducers from './reducers/index';
import './styles/index.css';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={ store }>
   <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to='landing'/>
        <Route path="landing" component={Landing}/>
        <Route path="weight" component={Weight}/>
        <Route path="bodyfat" component={Bodyfat}/>
        <Route path="training" component={Training}/>
        <Route path="gender" component={Gender}/>
        <Route path="results" component={Results}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
