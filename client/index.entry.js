// Style
import 'normalize.css'
import 'util/global.less'

// Init React
import React from 'react'
import { render } from 'react-dom'
import AppRouter from './route'

render(
  <AppRouter />,
  document.getElementById('app')
)