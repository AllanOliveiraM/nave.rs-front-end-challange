import React, { Fragment } from 'react'

import Button from 'components/Button'

import { useAuth } from 'context/auth-context'

import lang from 'assets/locale/pt-br.json'

const Home = () => {
  const { logout } = useAuth()

  return (
    <Fragment>
      <Button onClick={logout}>{lang.accounts.logOut}</Button>
    </Fragment>
  )
}

export default Home
