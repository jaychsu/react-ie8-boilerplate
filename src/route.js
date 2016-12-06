import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router'
import { createHistory, useBasename } from 'history'

// `redux`
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configStore from './store'

// Containers
import Layout from './container/layout'
import Home from './container/home'
import Profile from './container/profile'
import Payment from './container/payment'
import Communication from './container/communication'
import Product from './container/product'

const store = configStore()
const history = syncHistoryWithStore(useBasename(createHistory)({ basename: '/' }), store)

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ history }>
          <Route path="/" component={ Layout }>
            <IndexRoute onEnter={ (nextState, replace) => replace('', 'home') } />
            <Route path="home" component={ Home } />
            <Route path="profile" component={ Profile } />
            <Route path="payment" component={ Payment } />
            <Route path="communication" component={ Communication } />
            <Route path="product" component={ Product } />
            <Route path="product/:pname" component={ Product } />
            <Route path="*" onEnter={ (nextState, replace) => replace('', 'home') } />
          </Route>
        </Router>
      </Provider>
    )
  }
}
