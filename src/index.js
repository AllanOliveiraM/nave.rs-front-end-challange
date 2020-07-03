import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './styles/index.css'

import AppComponents from './App'


ReactDOM.render(
  <AppComponents.LoadBar />,
  document.getElementById('load-bar')
)

ReactDOM.render(
  <AppComponents.App />,
  document.getElementById('root')
)

serviceWorker.unregister()
