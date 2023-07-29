import React from 'react'

const FolderShareSvgIcon = ({width = 24, height = 24, color = "#151719", opacity = 0.8}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H7.76393C8.90025 1 9.93904 1.64201 10.4472 2.65836L11.3416 4.44721C11.511 4.786 11.8573 5 12.2361 5H20C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H12.2361C11.0998 7 10.061 6.35799 9.55279 5.34164L8.65836 3.55279C8.48897 3.214 8.1427 3 7.76393 3H4Z" fill="#151719" fillOpacity={opacity} />
      <path d="M14.5 11.45C14.5 12.8307 13.3807 13.95 12 13.95C10.6193 13.95 9.5 12.8307 9.5 11.45C9.5 10.0693 10.6193 8.94999 12 8.94999C13.3807 8.94999 14.5 10.0693 14.5 11.45Z" fill={color} fillOpacity={opacity} />
      <path d="M16 19H8C7.44772 19 7.01319 18.5432 7.20937 18.027C7.60293 16.9913 8.73627 15.5 12 15.5C15.2637 15.5 16.3971 16.9913 16.7906 18.027C16.9868 18.5432 16.5523 19 16 19Z" fill={color} fillOpacity={opacity} />
    </svg>
  )
}

export default FolderShareSvgIcon
