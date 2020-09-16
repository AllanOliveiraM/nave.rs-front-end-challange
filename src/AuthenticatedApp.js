import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import Header from 'components/Header'
import HomeTitleSection from 'components/TitleSection'
import Home from 'routes/Home'

import { useLoadBar } from 'context/loadbar-context'
import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const AuthenticatedApp = () => {
  const { loadBarRef } = useLoadBar()

  return (
    <>
      <LoadingBar color='#212121' ref={loadBarRef} />
      <Header className='in-animation' />
      <HomeTitleSection className='in-animation' title={lang.pageComposition.titleElements.navers} />
      <Switch>
        <Route path='/home' component={Home} />
        <Redirect to='/home' />
      </Switch>
    </>
  )
}

export default AuthenticatedApp
