import React, { Children } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from 'components/Button'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const ButtonComponent = ({ logout }) => {
  return <StyledButton onClick={logout}>{lang.accounts.logOut}</StyledButton>
}

const StyledButton = styled(Button)`
  background-color: transparent;
  color: black;
  width: auto;
  border: none;
  margin-left: 3.2rem;
`

ButtonComponent.propTypes = {
  logout: PropTypes.func
}

export default ButtonComponent
