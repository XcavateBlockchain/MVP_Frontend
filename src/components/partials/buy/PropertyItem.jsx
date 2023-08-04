import React from 'react'

const PropertyItem = ({ className = '', label, value }) => {
  return (
    <>
      <div className={` grid grid-cols-2 gap-2 items-center ${className}`}>
        <h4 className=' font-graphik-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'>
          {label}
        </h4>
        <h4 className=' font-graphik-medium text-lg text-body opacity-80 tracking-[0.45px]'>
          {value}
        </h4>
      </div>
      <div className=' w-full h-[5px] rounded-lg bg-[#D9D9D9] mt-1'></div>
    </>
  )
}

export default PropertyItem
