import React, { useState } from 'react'

const styles = {
  label: 'font-graphik-medium text-headers text-lg tracking-[0.45px]',
  input: 'border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]',
}

const AdditionalInfo = () => {
  const initialFormData = Object.freeze({
    development_number: 0,
    permission_number: 0,
    local_authority: '',
    deed_number: 0,
    map_url: '',
  })
  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // ... submit to API or something
  }
  return (
    <>
      <div className='container flex justify-center items-center bg-white flex-col mt-4 rounded-b-lg'>
        <div className='py-10 px-10 w-full lg:w-3/4'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='development_number'
                className={`${styles.label}`}
              >
                Property development number*
              </label>
              <input
                type='number'
                onChange={handleChange}
                id='development_number'
                name='development_number'
                className={`${styles.input}`}
                placeholder='4564SXZ'
                required
              />
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='permission_number'
                className={`${styles.label}`}
              >
                Planning permission number*
              </label>
              <input
                type='number'
                onChange={handleChange}
                id='permission_number'
                name='permission_number'
                className={`${styles.input}`}
                placeholder='3/22/1700/HH'
                required
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='local_authority'
                className={`${styles.label}`}
              >
                Local Authority*
              </label>
              <input
                type='text'
                onChange={handleChange}
                id='local_authority'
                name='local_authority'
                className={`${styles.input}`}
                placeholder='East Herts'
                required
              />
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='deed_number'
                className={`${styles.label}`}
              >
                Title deed number*
              </label>
              <input
                type='number'
                onChange={handleChange}
                id='deed_number'
                name='deed_number'
                className={`${styles.input}`}
                placeholder='17646cnnn'
                required
              />
            </div>
          </div>
          <div className=''>
            <div className='relative z-0 w-full lg:w-1/2'>
              <label
                htmlFor='map_url'
                className={`${styles.label}`}
              >
                Google map link
              </label>
              <input
                type='url'
                onChange={handleChange}
                id='map_url'
                name='map_url'
                className={`${styles.input}`}
                placeholder='124.234.'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className=' flex flex-row justify-center items-center w-full h-[60px] rounded-lg mt-10 bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'
          >
            <h4 className=' font-dmsans-bold text-lg text-white'>
              {`Send for verification`}
            </h4>
          </button>
        </div>
      </div>
    </>
  )
}

export default AdditionalInfo
