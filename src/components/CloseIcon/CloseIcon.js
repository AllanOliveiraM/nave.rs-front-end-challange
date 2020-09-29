import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CloseIcon = ({ width, height, fill, ...props }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill={fill} {...props}>
      <path
        d='M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z'
        fill='#212121'
      />
    </svg>
  )
}

CloseIcon.defaultProps = {
  width: 14,
  height: 14,
  fill: 'none'
}

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`

export default StyledCloseIcon
