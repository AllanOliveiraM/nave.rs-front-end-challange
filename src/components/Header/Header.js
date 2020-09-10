import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { useAuth } from 'context/auth-context'

import Logo from './Logo'
import Button from './Button'
import RightContainer from './RightContainer'

const HeaderComponent = ({ children, displayLogout, ...props }) => {
  const { logout } = useAuth()

  return (
    <Header {...props}>
      <Logo />
      <RightContainer>
        {children}
        {displayLogout ? <Button logout={logout} /> : null}
      </RightContainer>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5rem;
  width: 100%;
`

HeaderComponent.defaultProps = {
  displayLogout: true
}

HeaderComponent.propTypes = {
  children: PropTypes.element,
  displayLogout: PropTypes.bool
}

export default HeaderComponent
