import React from 'react'
import img from '../../assets/common/HighViewProp3-4.jpg'
const PropertyDetail = () => {
  return (
    <>
      <div className='container mt-[7rem] mx-auto px-5'>
        <h1 className='font-bold text-2xl'>Briks and blocks</h1>
        <p>
          Apartment | Located in the heart of downtown | 3 bedroom | 3 bathroom
          | 1871ft.{' '}
        </p>
      </div>
      <div className='flex mt-5 container mx-auto'>
        <div className=' w-2/3 mx-5 flex flex-col'>
          <img
            className='h-[30%] rounded-md w-[100%] max-w-full'
            src={img}
            alt='image description'
          />

          <div className='block w-full p-6 mt-4 bg-white rounded-lg dark:border-gray-700 '>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black'>
              Property Details
            </h5>
            <p className='font-normal text-gray-700 dark:text-black'>
              Welcome to this stunning 3-bedroom, 2-bathroom condo located in
              the heart of downtown. This spacious corner unit boasts
              breathtaking city views and features a modern open floor plan,
              perfect for entertaining. The condo has been recently renovated
              with brand new hardwood floors, stainless steel appliances, and a
              state-of-the-art security system.
            </p>
            <p className='font-normal mt-3 text-gray-700 dark:text-black'>
              Welcome to this stunning 3-bedroom, 2-bathroom condo located in
              the heart of downtown. This spacious corner unit boasts
              breathtaking city views and features a modern open floor plan,
              perfect for entertaining.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-x-2 w-full mt-5 px-6'>
            <div className='block max-w-sm p-4 h-[13rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Property features</h1>
            </div>
            <div className='block max-w-sm p-4 h-[13rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Floor Plan</h1>
            </div>
          </div>
          <div className='mt-5 h-[30rem] w-full p-5 flex flex-col rounded-md bg-white border border-gray-200  hover:bg-gray-100'>
            <h1 className='font-bold'>Map| property location</h1>
            <div className='h-[100%] mt-3'>
              <iframe
                width='100%'
                height='100%'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
                title='map'
                src='https://maps.google.com/maps?width=100%&ampheight=1000&amphl=en&ampq=%C4%B0zmir+(My%20Business%20Name)&ampie=UTF8&ampt=&ampz=14&ampiwloc=B&ampoutput=embed'
              ></iframe>
            </div>
          </div>
        </div>{' '}
        <div className='w-1/3 flex flex-col'>
          <div className='h-auto grid grid-cols-2 gap-4'>
            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>
            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>

            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>
            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>
            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>
            <div className='block max-w-sm p-4 h-[7rem] rounded-md bg-white border border-gray-200  hover:bg-gray-100 '>
              <h1 className='font-bold'>Listing Price</h1>
              <p className='font-bold text-xl text-gray-400 mt-3'>£200,000</p>
            </div>
            <button
              type='button'
              className='border-orange-400 border text-orange-600 rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0'
            >
              Share
            </button>
            <button
              type='button'
              className=' connect-wallet-button rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0'
            >
              List now
            </button>
          </div>
          <div className='block mt-4 w-full p-6 bg-white border border-gray-200 rounded-lg '>
            <h5 className='mb-2 text-md font-bold tracking-tight text-gray-900'>
              DIDcom Message
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              type='button'
              className='border-orange-400 mt-4 w-full border text-orange-600 rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0'
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
