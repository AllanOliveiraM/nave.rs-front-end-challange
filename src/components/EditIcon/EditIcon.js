import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const EditIcon = ({ width, height, fill, ...props }) => {
  return (
    <svg className='zoom-in edit-icon' width={width} height={height} viewBox='0 0 24 24' fill={fill} {...props}>
      <path
        d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z'
        fill='#212121'
      />
    </svg>
  )
}

const EditIconComponent = styled(EditIcon)`
  cursor: pointer;
`

EditIconComponent.defaultProps = {
  width: 28,
  height: 28,
  fill: 'none'
}

EditIconComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export default EditIconComponent
