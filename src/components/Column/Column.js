import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { MEDIATABLET, MEDIADESKTOP } from 'helpers/constants'

const ColumnComponent = ({ col, children, ...props }) => {
  switch (col) {
    case 2:
      return <ColumnTwo {...props}>{children}</ColumnTwo>
    case 3:
      return <ColumnThree {...props}>{children}</ColumnThree>
    case 4:
      return <ColumnFour {...props}>{children}</ColumnFour>
    default:
      return <Column {...props}>{children}</Column>
  }
}

const ColumnTwo = ({ children, ...props }) => {
  return <StyledColumnTwo {...props}>{children}</StyledColumnTwo>
}

const ColumnThree = ({ children, ...props }) => {
  return <StyledColumnThree {...props}>{children}</StyledColumnThree>
}

const ColumnFour = ({ children, ...props }) => {
  return <StyledColumnFour {...props}>{children}</StyledColumnFour>
}

const Column = styled.div`
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  -webkit-zoom: 1;
  -moz-zoom: 1;
  -ms-zoom: 1;
  -o-zoom: 1;
  zoom: 1;
  -display: inline;
`

const StyledColumnTwo = styled(Column)`
  @media (min-width: ${MEDIATABLET - 83}px) {
    width: 50%;
  }
`

const StyledColumnThree = styled(StyledColumnTwo)`
  @media (min-width: ${MEDIATABLET + 200}px) {
    width: 33.3333%;
  }
`

const StyledColumnFour = styled(StyledColumnThree)`
  @media (min-width: ${MEDIADESKTOP}px) {
    width: 25%;
  }
`

ColumnComponent.defaultProps = {
  col: 1
}

ColumnComponent.propTypes = {
  col: PropTypes.number
}

export default ColumnComponent
