import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'

import App from './App'

import AppProviders from 'context'

import { version, name } from '../package.json'

if (process.env.REACT_APP_NODE_ENV === 'production') {
  serviceWorker.register()
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_URL,
    environment: process.env.REACT_APP_NODE_ENV,
    debug: process.env.REACT_APP_NODE_ENV !== 'prodution',
    release: `${name}@${version}`
  })
} else {
  serviceWorker.unregister()
}

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)
