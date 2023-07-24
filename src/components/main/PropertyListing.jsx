import React, { useState } from 'react'
import PropertyInfo from '../../utils/Forms/PropertyInfo'
import AdditionalInfo from '../../utils/Forms/AdditionalInfo'
import ListedInfo from '../../utils/Forms/ListedInfo'
import { useSelector, useDispatch } from 'react-redux'
import { VerifiedSvgIcon } from '../../assets/icons'

const PropertyListing = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [page, setPage] = useState(1)

  const onChangingPage = (num) => {
    setPage(num)
    console.log(num)
  }

  return (
    <>
      <div className='container mt-20  m-auto flex justify-center items-center flex-col h-[100%]'>
        <label
          htmlFor='dev'
          className=' flex mt-8'
        >
          <h4 className=' font-graphik-bold text-headers text-xl tracking-[0.5px] mr-3'>
            {user?.userData?.fullName || ''}
          </h4>
          <h4 className=' font-graphik-regular text-body text-xl opacity-[0.8] tracking-[0.5px] mr-3'>
            {`#${user?.userData?._id}` || ''}
          </h4>
          <VerifiedSvgIcon />
        </label>
        <div className=' w-full bg-white flex justify-between mt-6 rounded-t-lg p-6'>
          <div className='flex items-center  '>
            <input
              id='bordered-radio-1'
              type='radio'
              checked={page === 1}
              name='info'
              onClick={(e) => onChangingPage(1)}
              className='w-5 h-5'
            />
            <label
              htmlFor='bordered-radio-1'
              className='w-full ml-2 cursor-pointer'
            >
              <h5 className=' font-graphik-bold text-xl text-body tracking-[0.5px]'>
                {`Property Information`}
              </h5>
            </label>
          </div>
          <div className='flex items-center '>
            <input
              id='bordered-radio-2'
              type='radio'
              checked={page === 2}
              name='info'
              onClick={(e) => onChangingPage(2)}
              className='w-5 h-5'
            />
            <label
              htmlFor='bordered-radio-2'
              className='w-full ml-2 cursor-pointer'
            >
              <h5 className=' font-graphik-bold text-xl text-body tracking-[0.5px]'>
                {`Pricing and listing Details`}
              </h5>
            </label>
          </div>
          <div className='flex items-center '>
            <input
              checked={page === 3}
              id='bordered-radio-3'
              type='radio'
              name='info'
              onClick={(e) => onChangingPage(3)}
              className='w-5 h-5'
            />
            <label
              htmlFor='bordered-radio-3'
              className='w-full ml-2 cursor-pointer'
            >
              <h5 className=' font-graphik-bold text-xl text-body tracking-[0.5px]'>
                {`Additional Information`}
              </h5>
            </label>
          </div>
        </div>
        {page === 1 && <PropertyInfo />}
        {page === 2 && <ListedInfo />}
        {page === 3 && <AdditionalInfo />}
      </div>
    </>
  )
}

export default PropertyListing
