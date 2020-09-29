import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Column from 'components/Column'

import { MEDIADESKTOP } from 'helpers'

const ContainerComponent = ({ children, as = Column, ...props }) => (
  <Container as={as} {...props}>
    {children}
  </Container>
)

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3.2rem;

  @media (min-width: ${MEDIADESKTOP}px) {
    max-width: ${MEDIADESKTOP + 80}px;
    padding: 0 4rem;
  }

  ${space}
  ${layout}
  ${color}
`

ContainerComponent.propTypes = {
  as: PropTypes.element
}

export default ContainerComponent
