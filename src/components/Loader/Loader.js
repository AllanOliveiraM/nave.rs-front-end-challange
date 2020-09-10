import React from 'react'
import PropTypes from 'prop-types'

import './Loader.css'

const Loader = ({ useDefault, children }) => {
  if (useDefault) {
    return (
      <div className='lds-ellipsis'>
        <div />
        <div />
        <div />
        <div />
      </div>
    )
  }

  return children || 'carregando'
}

Loader.propTypes = {
  useDefault: PropTypes.bool,
  children: PropTypes.element
}

export default Loader
