/* global document */

// `react`
import React from 'react'
import { render } from 'react-dom'
import AppRouter from './route'

/* eslint-disable import/first */
// Style
import 'normalize.css'
import 'util/global.less'
/* eslint-enable import/first */

render((
  <AppRouter />
), document.getElementById('app'))
