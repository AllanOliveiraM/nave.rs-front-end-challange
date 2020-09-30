import styled from 'styled-components'
import PropTypes from 'prop-types'

import { MEDIATABLET, MEDIADESKTOP } from 'helpers/constants'

const ColumnComponent = styled.div`
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

  ${({ col }) => {
    return `
      ${
        col >= 2
          ? `@media (min-width: ${MEDIATABLET - 83}px) {
              width: 50%;
            }`
          : ''
      }
      ${
        col >= 3
          ? `@media (min-width: ${MEDIATABLET + 200}px) {
              width: 33.3333%;
            }`
          : ''
      }
      ${
        col >= 4
          ? `@media (min-width: ${MEDIADESKTOP}px) {
              width: 25%;
            }`
          : ''
      }
      ${
        col >= 5
          ? `@media (min-width: ${MEDIADESKTOP}px) {
              width: ${100 / col}%;
            }`
          : ''
      }
    `
  }}
`

ColumnComponent.defaultProps = {
  col: 1
}

ColumnComponent.propTypes = {
  col: PropTypes.number
}

export default ColumnComponent
