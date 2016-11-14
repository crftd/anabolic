/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import store from './store'

import 'index.html'

//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
          {routes}
      </Router>
  </Provider>,
  document.getElementById('app')
);