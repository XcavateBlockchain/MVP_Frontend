import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GiBathtub } from 'react-icons/gi'
import { LuBedSingle } from 'react-icons/lu'
const EstateAssetCard = ({ item }) => {
  // const [newAssets, setNewAssets] = useState()
  //   const toggleVerification = (index) => {
  //       const newEstateAssets = [...newAssets]
  //       newAssets[index].isCompleted = !newAssets[index].isCompleted
  //       setNewAssets(newEstateAssets)
  //     }
  return (
    <>
      <div className='max-w-sm mt-2 bg-white relative  asset-card  rounded-lg shadow'>
        <a href='#'>
          <img
            className='rounded-t-lg w-[100%]'
            src={item.imageUrl}
            alt='hello'
          />
        </a>
        <div className='p-3 absolute top-0 '>
          {item.verificationStatus === 'Listed' && (
            <span className='text-orange-500  bg-white font-bold   text-xs mr-2 px-2.5 py-0.5 rounded '>
              Listed
            </span>
          )}
          {item.verificationStatus === 'Verified' && (
            <span className='text-blue-500  bg-white text-xs font-bold    mr-2 px-2.5 py-0.5 rounded '>
              Verified
            </span>
          )}
          {item.verificationStatus === 'Not Verified' && (
            <span className='text-red-500   text-xs bg-white font-bold mr-2 px-2.5 py-0.5 rounded '>
              Not Verified
            </span>
          )}
        </div>
        <div className='p-5'>
          <div className='flex justify-between'>
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black'>
              {item.title}
            </h5>
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-black dark:text-black'>
              £ {item.listingPrice}
            </h5>
          </div>
          {/* <h3 className='text-black mt-1 mb-1'>{item.description}</h3> */}
          <div className='flex '>
            <a className='flex' href={item.googleMapCode}>
              <HiOutlineLocationMarker className='text-blue-400' size={22} />
              <h5 className=' mx-2 text-1xl tracking-tight text-gray-900 dark:text-gray-500'>
                {item.address}
              </h5>
            </a>
          </div>
          <div className='mt-2 flex justify-between '>
            <div className='mt-3 text-black flex'>
              <span className='flex font-medium text-[15px]'>
                <LuBedSingle className='mx-1' size={20} /> 4{' '}
              </span>
              <span className='flex font-medium text-[15px]'>
                <GiBathtub className='mx-1' size={20} /> 3{' '}
              </span>
            </div>
            <div className='mt-5 flex'>
              {item.verificationStatus === 'Not Verified' && (
                <button className='inline-flex button  items-center px-3 py-2 text-sm text-center text-white rounded-lg '>
                  verify
                </button>
              )}
              {item.verificationStatus === 'Verified' && (
                <button className='inline-flex button  items-center px-3 py-2 text-sm text-center text-white rounded-lg '>
                  Listed
                </button>
              )}
              {item.verificationStatus === 'Listed' && (
                <button className='inline-flex button  items-center px-3 py-2 text-sm text-center text-white rounded-lg '>
                  Listed
                </button>
              )}
              <button className='text-center mx-5 w-[100%] border  px-3 py-2 text-sm text-black rounded-lg'>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EstateAssetCard
