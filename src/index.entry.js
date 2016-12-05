// Style
import 'normalize.css'
import 'util/variable.less'
import 'util/global.less'

// `react`
import React from 'react'
import { render } from 'react-dom'

// `react-router`
import AppRouter from './route'

// `redux`
import { Provider } from 'react-redux'
import configStore from './store'
const store = configStore()

render(
  (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  ),
  document.getElementById('app')
)
