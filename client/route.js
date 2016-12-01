import React, { Component } from 'react'
import {
  Router,
  Route,
  hashHistory
} from 'react-router'

import Layout from './container/layout'
import Home from './container/index'

const routes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('', 'home')
      }
    },
    {
      path: 'home',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, Home)
        })
      }
    }
  ]
}

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={ hashHistory } routes={ routes } />
    )
  }
}
