import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
