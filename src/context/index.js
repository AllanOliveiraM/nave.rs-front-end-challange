import React from 'react'

import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'
import { LoadBarProvider } from './loadbar-context'

const AppProviders = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <LoadBarProvider>{children}</LoadBarProvider>
    </UserProvider>
  </AuthProvider>
)

export default AppProviders
