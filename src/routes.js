import React from 'react'
import store from './store/'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import {history} from './history'
import App from './components/App'


export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>
)
