import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const InputComponent = ({ label, name, register, placeholder, error, disabled, type, ...props }) => (
  <>
    {label && <Text mb={5}>{label}</Text>}
    <Input {...props} name={name} ref={register} placeholder={placeholder} error={error} type={type} />
    <Text position='absolute' bottom={0} color='red' variant='small'>
      {error}
    </Text>
  </>
)

const Input = styled.input`
  height: 40px;
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 0;
`

InputComponent.defaultProps = {
  width: 'regular',
  mb: 10
}

InputComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default InputComponent
