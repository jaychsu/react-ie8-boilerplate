import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'
import { createHistory, useBasename } from 'history'

import Layout from './container/layout'
import Home from './container/home'

const history = useBasename(createHistory)({
    basename: '/'
})

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={ history }>
        <Route path="/" component={ Layout }>
          <IndexRoute onEnter={ (nextState, replace) => replace('', 'home') } />
          <Route path="home" component={ Home }/>
        </Route>
      </Router>
    )
  }
}
