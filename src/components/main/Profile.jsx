import React, { useEffect, useState } from 'react'
import EstateAssetCard from '../cards/EstateAssetCard'
import SummaryCard from '../cards/SummaryCard'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { USER_ROLES } from '../../data/mockData'
import { ShareSvgIcon, VerifiedSvgIcon } from '../../assets/icons'
import BannerPlaceholderImage from '../../assets/webp/placeholder.webp'
import MalePlaceholderImage from '../../assets/webp/male_placeholder_image.webp'
import { useNavigate } from 'react-router-dom'
import ProfileTab from '../tabs/ProfileTab'
import ProfileDatailTab from '../partials/profile/DetailTab'
import ListedTab from '../partials/profile/ListedTab'
import { getAllProperties } from '../../api/property'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [userRole, setUserRole] = useState('')
  const [tab, setTab] = useState('profile')
  const [properties, setProperties] = useState([])

  const getProperties = async () => {
    try {
      const result = await getAllProperties()
      console.log('result :: ', result)
      if (result?.status === 200) {
        setProperties(result?.data?.data)
      }
    } catch (error) {
      console.log('error :: ', error)
    }
  }

  useEffect(() => {
    getProperties()
  }, [])

  useEffect(() => {
    if (user) {
      const role = USER_ROLES.find((role) => {
        return role.value === user?.userData?.role
      })
      setUserRole(role)
    }
  }, [user])

  const addProperty = () => {
    navigate('/list-property')
  }

  return (
    <section className='mt-[126px] flex flex-col items-center mb-24'>
      {/* banner */}
      <div className=' relative container'>
        {/* banner image */}
        <img
          src={user?.userData?.bannerImage || BannerPlaceholderImage}
          alt='banner image'
          className='w-full h-[300px] object-cover rounded-t-lg'
        />
        {/* profile data */}
        <div className=' absolute bottom-[-87px] flex flex-row items-end w-full h-[175px] pl-[50px]'>
          {/* profile image */}
          <img
            src={user?.userData?.profileImage || MalePlaceholderImage}
            alt='profile image'
            className='w-[180px] h-[180px] rounded-full border-[5px] border-white'
          />
          <div className=' w-full flex flex-row items-center justify-between h-[87px] ml-8'>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-row items-center'>
                <h4 className=' font-graphik-bold text-2xl text-headers opacity-[0.8] mr-2 tracking-[0.6px]'>
                  {user?.userData?.fullName || 'Unnamed'}
                </h4>
                <VerifiedSvgIcon />
                <h4 className=' font-graphik-medium text-2xl text-headers opacity-[0.8] tracking-[0.6px] ml-5'>
                  {userRole?.label || ''}
                </h4>
              </div>
              <div className='mt-2'>
                <h5 className=' font-graphik-regular text-xl tracking-[0.5px] text-headers opacity-[0.8]'>
                  {`Account created ${user?.userData?.createdAt? moment(user?.userData?.createdAt).format('MMM DD, YYYY') : ''}`}
                </h5>
              </div>
            </div>
            <div className='flex flex-row items-center justify-end'>
              <button
                className=' flex w-[135px] h-[53px] rounded-lg bg-gradient-to-r from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2] p-[2px] hover:scale-[1.01] active:scale-100 hover:shadow-sm mr-4'>
                <div className=' flex flex-row items-center justify-center w-full h-full rounded-[7px] bg-white'>
                  <h5 className=' font-dmsans-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2] mr-2 uppercase'>
                    {`Share`}
                  </h5>
                  <ShareSvgIcon />
                </div>
              </button>
              <button
                onClick={addProperty}
                className=' flex flex-row items-center justify-center w-[135px] h-[53px] rounded-md bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'
              >
                <h5 className=' font-dmsans-bold text-base text-white uppercase'>
                  {`Add property`}
                </h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* summary cards */}
      <div className=' container mt-28'>
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5'>
          <SummaryCard title={`NFT'S Sold`} value={0} />
          <SummaryCard title={`Total NFT's minted`} value={0} />
          <SummaryCard title={`Properties listed`} value={0} />
          <SummaryCard title={`Total  property value`} value={0} />
        </div>
      </div>
      {/* tabs */}
      <ProfileTab tab={tab} setTab={setTab} />
      {/* contents */}
      {tab === 'profile' && <ProfileDatailTab />}
      {tab === 'properties' && properties.length > 0 && <ListedTab properties={properties} />}
    </section>
  )
}

export default Profile
