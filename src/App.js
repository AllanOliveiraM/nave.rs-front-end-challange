import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Helmet from 'react-helmet'
// import { Provider } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
// import store from './redux/store'

import Loader from 'components/Loader'
import FullPageContainer from 'components/FullPageContainer'

import { useUser } from 'context/user-context'
import { ToastContainer } from 'react-toastify'

import Theme from 'theme'
import GlobalStyles from 'assets/styles/GlobalStyles'

import 'react-toastify/dist/ReactToastify.css'
import 'sanitize.css/sanitize.css'

const loadAuthenticatedApp = () => import('./AuthenticatedApp')
const AuthenticatedApp = lazy(loadAuthenticatedApp)
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'))

const App = () => {
  const { user } = useUser()

  useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    // <Provider store={store}>
    <Theme>
      <GlobalStyles />
      <ToastContainer />
      <Helmet titleTemplate='Navedex | %s' />
      <Suspense
        fallback={
          <FullPageContainer>
            <Loader useDefault={true} />
          </FullPageContainer>
        }
      >
        <Router>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Router>
      </Suspense>
    </Theme>
    // </Provider>
  )
}

export default App
