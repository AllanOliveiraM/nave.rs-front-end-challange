import React, { Fragment } from 'react'

import Button from 'components/Button'

import { useAuth } from 'context/auth-context'

const Home = () => {
  const { logout } = useAuth()

  return (
    <Fragment>
      <Button onClick={logout}>logout</Button>
    </Fragment>
  )
}

export default Home
