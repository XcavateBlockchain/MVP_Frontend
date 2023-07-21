import React, { useEffect, useState } from 'react'
import { data } from '../../utils/estateData'
import EstateAssetCard from '../cards/EstateAssetCard'
import SummaryCard from '../cards/SummaryCard'
import { sumData } from '../../utils/summary'
import { MdVerified } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { USER_ROLES } from '../../data/mockData'
import { VerifiedSvgIcon } from '../../assets/icons'

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    if (user) {
      const role = USER_ROLES.find((role) => {
        return role.value === user?.userData?.role
      })
      setUserRole(role)
    }
  }, [user])  

  return (
    <>
      <div className='container banner h-[14rem] border w-[100%] relative p-4 mx-auto mb-5 mt-20'>
        <div className='absolute bottom-[-55px] w-[85%] right-0 flex  justify-between '>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <h3 className=' font-graphik-bold text-headers text-2xl tracking-[0.6px] opacity-[0.8]'>
                {user?.userData?.fullName || ''}
              </h3>
              <VerifiedSvgIcon />
              <span className='text-gray-400 mx-1'>
                {userRole?.label || ''}
              </span>
            </div>
            <p className='text-sm font-light text-gray-500'>{`Account created at ${moment(user?.userData?.createdAt).format('MMM DD, YYYY')}`}</p>
          </div>
          <div className='flex'>
            <button
              type='button'
              className=' rounded-lg border border-blue-400 text-sm px-4 py-2 text-center md:mr-0'
            >
              {`Share`}
            </button>
            <button
              type='button'
              className=' button rounded-lg text-sm px-4 py-2 text-center mx-3 md:mr-0'
            >
              {`Add Property`}
            </button>
          </div>
        </div>
        <div className='w-[120px] h-[120px] left-10 p-1 flex justify-center items-center object-center absolute bottom-[-50px] border rounded-full overflow-hidden  profile-banner'></div>
      </div>
      <div className='px-4 py-10 grid grid-cols-4 gap-2 container mx-auto '>
        {sumData.map((item) => {
          return <SummaryCard sumData={item} key={item.id} />
        })}
      </div>
      <div className='px-4 py-10 grid grid-cols-3 gap-2 container mx-auto'>
        {data.map((item) => {
          return <EstateAssetCard item={item} key={item._id} />
        })}
      </div>
    </>
  )
}

export default Profile
