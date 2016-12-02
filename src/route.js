import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'
import { createHistory, useBasename } from 'history'

import Layout from './container/layout'
import Home from './container/home'
import Profile from './container/profile'
import Payment from './container/payment'
import Communication from './container/communication'
import Product from './container/product'

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
          <Route path="profile" component={ Profile }/>
          <Route path="payment" component={ Payment }/>
          <Route path="communication" component={ Communication }/>
          <Route path="product/:pname" component={ Product }/>
        </Route>
      </Router>
    )
  }
}
