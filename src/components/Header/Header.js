import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Logo from 'components/Logo'
import Button from 'components/Button'

import { useAuth } from 'context/auth-context'
import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const HeaderComponent = ({ children, displayLogout, ...props }) => {
  const { logout } = useAuth()

  return (
    <Header {...props}>
      <StyledLogo />
      <RightContainer>
        {children}
        {displayLogout ? <ButtonHeader logout={logout} /> : null}
      </RightContainer>
    </Header>
  )
}

const ButtonHeader = ({ action }) => {
  return <StyledButton onClick={action}>{lang.accounts.logOut}</StyledButton>
}

const StyledButton = styled(Button)`
  background-color: transparent;
  color: black;
  width: auto;
  border: none;
  margin-left: 3.2rem;
`

const Header = styled.header`
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

HeaderComponent.defaultProps = {
  displayLogout: true
}

ButtonHeader.propTypes = {
  action: PropTypes.func
}

HeaderComponent.propTypes = {
  children: PropTypes.element,
  displayLogout: PropTypes.bool
}

export default HeaderComponent
