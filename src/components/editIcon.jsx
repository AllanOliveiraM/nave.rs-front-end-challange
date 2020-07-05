import * as React from "react"

function EditIcon(props) {
  return (
    <svg className='zoom-in edit-icon' width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z"
        fill="#212121"
      />
    </svg>
  )
}

export default EditIcon
