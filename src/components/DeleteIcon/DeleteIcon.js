import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DeleteIcon = ({ width, height, fill, ...props }) => {
  return (
    <svg className='zoom-in delete-icon' width={width} height={height} viewBox='0 0 24 24' fill={fill} {...props}>
      <path d='M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' fill='#212121' />
    </svg>
  )
}

const DeleteIconComponent = styled(DeleteIcon)`
  cursor: pointer;
`
DeleteIconComponent.defaultProps = {
  width: 28,
  height: 28,
  fill: 'none'
}

DeleteIconComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export default DeleteIconComponent
