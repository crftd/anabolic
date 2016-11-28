/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 14.11.16
 */

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import store from './store'
import DevTools from './containers/devTools'

ReactDOM.render(
  <Provider store={store}>
      <div>
          <Router history={hashHistory}>
              {routes}
          </Router>
          {process.env.NODE_ENV === 'development' ? <DevTools/> : null}
      </div>
  </Provider>,
  document.getElementById('app')
);