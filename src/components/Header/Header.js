import React, { Children } from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Button from 'components/Button'

import { useAuth } from 'context/auth-context'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const Header = ({ children, displayLogout = true, ...props }) => {
  const { logout } = useAuth()

  return (
    <HeaderComponent {...props}>
      <StyledLogo />
      <RightContainer>
        {children}
        {displayLogout ? <StyledButtonComponent logout={logout} /> : null}
      </RightContainer>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5rem;
  width: 100%;
`

const StyledLogo = styled(Logo)`
  margin-left: 3.2rem;
  width: 14.5rem;
`

const RightContainer = styled.div`
  margin-right: 3.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledButton = styled(Button)`
  background-color: transparent;
  color: black;
  width: auto;
  border: none;
  margin-left: 3.2rem;
`

const StyledButtonComponent = ({ logout }) => {
  return <StyledButton onClick={logout}>{lang.accounts.logOut}</StyledButton>
}

export default Header
