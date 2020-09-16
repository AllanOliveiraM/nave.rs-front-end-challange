import React from 'react'
import styled from 'styled-components'

const RowComponent = ({ children, ...props }) => {
  return (
    <Row className='row' {...props}>
      {children}
    </Row>
  )
}

const Row = styled.div`
  width: 100%;
  margin-left: -5px;
  margin-right: -5px;
`

export default RowComponent
