import React from 'react'

const StakingSvgIcon = ({width = 24, height = 24, color = "#191A1B", opacity = 0.85}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C14 7.17157 13.3284 6.5 12.5 6.5H10C10 7.60457 9.10457 8.5 8 8.5C6.89543 8.5 6 7.60457 6 6.5H3.5C2.67157 6.5 2 7.17157 2 8M14 8V12C14 12.8284 13.3284 13.5 12.5 13.5H3.5C2.67157 13.5 2 12.8284 2 12V8M14 8V6M2 8V6M14 6C14 5.17157 13.3284 4.5 12.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6M14 6V4C14 3.17157 13.3284 2.5 12.5 2.5H3.5C2.67157 2.5 2 3.17157 2 4V6" stroke={color} strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default StakingSvgIcon
