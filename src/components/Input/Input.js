import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

import { useField } from 'formik'

const InputComponent = ({ label, register, placeholder, disabled, type, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      {label && <Text mb={5}>{label}</Text>}
      <Input {...field} {...props} ref={register} placeholder={placeholder} type={type} />
      <Text position='absolute' bottom={0} color='red' variant='small'>
        {meta.touched && meta.error ? meta.error : null}
      </Text>
    </>
  )
}

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
