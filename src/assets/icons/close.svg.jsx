import React from 'react'

const CloseSvgIcon = ({ width = 19, height = 19, color = "#1C1F20" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7457 0.328507C17.3552 -0.0620168 16.722 -0.0620173 16.3315 0.328507L9.03712 7.62288L1.74275 0.328509C1.35223 -0.0620154 0.719062 -0.0620154 0.328538 0.328509C-0.0619863 0.719033 -0.0619867 1.3522 0.328538 1.74272L7.62291 9.0371L0.328559 16.3314C-0.0619658 16.722 -0.0619658 17.3551 0.328559 17.7457C0.719083 18.1362 1.35225 18.1362 1.74277 17.7457L9.03713 10.4513L16.3315 17.7457C16.722 18.1362 17.3552 18.1362 17.7457 17.7457C18.1362 17.3551 18.1362 16.722 17.7457 16.3315L10.4513 9.0371L17.7457 1.74272C18.1362 1.3522 18.1362 0.719032 17.7457 0.328507Z" fill={color} />
    </svg>
  )
}

export default CloseSvgIcon