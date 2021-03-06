import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, color, border, backgroundColor } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const ButtonComponent = ({ children, isLoading, ...props }) => (
  <Button style={isLoading ? { backgroundColor: 'grey' } : {}} disabled={isLoading} {...props}>
    {children}
  </Button>
)

const Button = styled.button(space, layout, typography, color, border)

ButtonComponent.defaultProps = {
  width: 'regular',
  height: 'small',
  borderRadius: 4,
  color: 'white',
  backgroundColor: 'black'
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.color,
  ...propTypes.border
}

const StyledButton = styled(ButtonComponent)`
  border-radius: 0;
  font-size: 1.4rem;
`

export default StyledButton
