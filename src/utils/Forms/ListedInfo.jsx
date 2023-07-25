import React from 'react'
const ListedInfo = () => {
  return (
    <>
      <div className='container flex justify-center items-center flex-col mt-4'>
        <div className='py-10 px-10 rounded-sm bg-white w-full flex justify-center items-center  '>
          <div className=' w-full lg:w-1/2'>
            <div className='mb-6'>
              <label
                htmlFor='listingType'
                className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
              >
                Listing Type
              </label>
              <input
                type='text'
                id='listingType'
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Sale'
                required
              />
            </div>
            <div className=''>
              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='listingPricePound'
                  className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
                >
                  Listing Price
                </label>
                <div className='w-full grid grid-cols-2 gap-4'>
                  <input
                    type='number'
                    id='listingPricePound'
                    className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                    placeholder='0.00'
                    required
                  />
                  <input
                    type='number'
                    id='listingPriceXCAV'
                    className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                    placeholder='0.00'
                    required
                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='relative z-0 w-full mb-6 group'>
                <label
                  htmlFor='email'
                  className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
                >
                  Estimated Rental Income
                </label>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type='number'
                    id='incomePound'
                    className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                    placeholder='0.00'
                    required
                  />
                  <input
                    type='number'
                    id='incomeXCAV'
                    className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                    placeholder='0.00'
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className=' flex flex-row justify-center items-center w-full h-[60px] rounded-lg mt-10 bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'
            >
              <h4 className=' font-dmsans-bold text-lg text-white'>
                {`Next`}
              </h4>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListedInfo