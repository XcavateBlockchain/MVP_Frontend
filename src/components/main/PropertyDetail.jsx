import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPropertyById } from '../../api/property'
import { DoubleBathSvgIcon, DoubleBedSvgIcon, MapTagSvgIcon } from '../../assets/icons'
const PropertyDetail = () => {
  const params = useParams()
  const [property, setProperty] = useState(null)

  const getProperty = async (propertyId) => {
    const result = await getPropertyById(propertyId)
    if (result?.status === 200) {
      setProperty(result?.data?.data)
    }
  }

  useEffect(() => {
    if (params?.id) {
      getProperty(params.id)
    }
  }, [params])
  return (
    <>
      <div className='container mt-[7rem] mx-auto px-5'>
        <h1 className=' font-graphik-bold text-2xl text-headers tracking-[0.7px] opacity-80'>{property?.name || ''}</h1>
        <p className=' font-graphik-regular text-xl text-headers tracking-[0.5px] mt-4'>
          {property?.features?.f_property_type ? `${property?.features.f_property_type} | ` : ''}
          {`Located in the ${property?.address?.street || ''} ${property?.address?.city || ''} ${property?.address?.zipcode || ''} `}
          | {property?.features?.f_number_of_bedrooms} bedroom
          | {property?.features?.f_number_of_bathrooms} bathroom
        </p>
      </div>
      <div className='flex mt-5 container mx-auto'>
        <div className=' w-2/3 mx-5 flex flex-col'>
          <img
            className='h-[30%] rounded-md w-[100%] max-w-full'
            src={property?.images[0] || ''}
            alt='property'
          />
          <div className='block w-full p-6 mt-6 bg-white rounded-lg'>
            <h5 className=' font-graphik-medium text-xl text-body tracking-[0.5px] opacity-80'>
              {`Property Details`}
            </h5>
            <p className=' font-graphik-regular text-lg text-body tracking-[0.45px] mt-6'>
              {property?.description || ''}
            </p>
          </div>
          <div className='grid grid-cols-2 gap-x-4 w-full mt-4'>
            <div className='flex flex-col p-6 h-[420px] rounded bg-white'>
              <h1 className=' font-graphik-medium text-xl tracking-[0.5px] text-body opacity-80'>
                {`Property features`}
              </h1>
              <div className='flex flex-col mt-6'>
                <div className='flex flex-row items-center'>
                  <DoubleBedSvgIcon />
                  <h4 className=' font-graphik-regular text-xl tracking-[0.5px] text-body ml-2'>
                    {`${property?.features?.f_number_of_bedrooms} - bedroom`}
                  </h4>
                </div>
                <div className='flex flex-row items-center mt-6'>
                  <DoubleBathSvgIcon />
                  <h4 className=' font-graphik-regular text-xl tracking-[0.5px] text-body ml-2'>
                    {`${property?.features?.f_number_of_bathrooms} - bathroom`}
                  </h4>
                </div>
                <div className='flex flex-row items-center mt-6'>
                  <div className='w-6 h-6'>
                    <MapTagSvgIcon />
                  </div>
                  <h4 className=' font-graphik-regular text-xl tracking-[0.5px] text-body ml-2'>
                    {`Located in the ${property?.address?.street || ''} ${property?.address?.city || ''} ${property?.address?.zipcode || ''}`}
                  </h4>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-6 h-[420px] rounded bg-white'>
              <h1 className=' font-graphik-medium text-xl tracking-[0.5px] text-body opacity-80'>
                {`Floor Plan`}
              </h1>
              <object
                type='application/pdf'
                data={property?.floorPlanImage || ''}
                className='w-full h-full mt-2'
                aria-label='floor plan'
              />
            </div>
          </div>
          <div className=' flex flex-col w-full h-[30rem] bg-white p-6 mt-4 rounded'>
            <h1 className=' font-graphik-medium text-xl tracking-[0.5px] text-body opacity-80'>
              {`Map| property location`}
            </h1>
            <div className='h-[100%] mt-4'>
              <iframe
                width='100%'
                height='100%'
                title='map'
                src={property?.googleMapLink || ''}
              ></iframe>
            </div>
          </div>
        </div>
        <div className='w-1/3 flex flex-col'>
          <div className='p-4 grid grid-cols-2 gap-x-4 bg-white rounded'>
            <div className='flex flex-col'>
              <div className='block max-w-sm'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`Listing Price`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  £{property?.price || ''}
                </p>
              </div>
              <div className='block max-w-sm mt-10'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`Rental Income`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  £{property?.rentalIncome || ''}
                </p>
              </div>
              <div className='block max-w-sm mt-10'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`NFTs Minted (100)`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  {`Available (56)`}
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='block max-w-sm'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`Price per NFT`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  £{`${Math.round(Number(property?.price) / 100)} (1 DDED)` || ''}
                </p>
              </div>
              <div className='block max-w-sm mt-10'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`RIO per NFT`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  £{`${Math.round(Number(property?.rentalIncome) / 100)} / per month` || '' || ''}
                </p>
              </div>
              <div className='block max-w-sm mt-10'>
                <h1 className=' font-graphik-medium text-xl text-body opacity-80'>
                  {`Property type`}
                </h1>
                <p className=' font-graphik-regular text-xl text-body opacity-60 mt-6'>
                  {property?.features?.f_property_type || ''}
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-4 mt-4'>
            <button
              className=' flex flex-row items-center justify-center h-[53px] rounded-md bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'
            >
              <h5 className=' font-dmsans-bold text-base text-white uppercase'>
                {`List now`}
              </h5>
            </button>
            <button
              className=' flex h-[53px] rounded-lg bg-gradient-to-r from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2] p-[2px] hover:scale-[1.01] active:scale-100 hover:shadow-sm'>
              <div className=' flex flex-row items-center justify-center w-full h-full rounded-[7px] bg-white'>
                <h5 className=' font-dmsans-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'>
                  {`Share`}
                </h5>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
