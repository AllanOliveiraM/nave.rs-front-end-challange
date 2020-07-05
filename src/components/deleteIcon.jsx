import * as React from "react"

function DeleteIcon(props) {
  return (
    <svg className='zoom-in delete-icon' width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        fill="#212121"
      />
    </svg>
  )
}

export default DeleteIcon
