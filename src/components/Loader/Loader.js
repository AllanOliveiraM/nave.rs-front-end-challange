import React from 'react'

import './Loader.css'

const DefaultLoader = ({ useDefault, children }) => {
  if (useDefault) {
    return (
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  } else {
    return children || 'carregando'
  }
}

export default DefaultLoader
