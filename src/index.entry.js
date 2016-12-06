/* global document */
// Style
import 'normalize.css'
import 'util/variable.less'
import 'util/global.less'

// `react`
import React from 'react'
import { render } from 'react-dom'
import AppRouter from './route'

render((
  <AppRouter />
), document.getElementById('app'))
