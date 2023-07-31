import React from 'react'

const styles = {
  label: 'font-graphik-medium text-headers text-lg tracking-[0.45px]',
  input: 'border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]',
}

const AdditionalInfo = ({ property, setProperty, onSubmit }) => {
  const onFormChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setProperty({
      ...property,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <>
      <div className='container flex justify-center items-center bg-white flex-col mt-4 rounded-b-lg'>
        <div className='py-10 px-10 w-full lg:w-3/4'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='developmentNumber'
                className={`${styles.label}`}
              >
                {`Property development number *`}
              </label>
              <input
                type='text'
                onChange={(e) => onFormChange(e)}
                id='developmentNumber'
                name='developmentNumber'
                className={`${styles.input}`}
                placeholder='4564SXZ'
                required
              />
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='planningPermissionNumber'
                className={`${styles.label}`}
              >
                {`Planning permission number *`}
              </label>
              <input
                type='text'
                onChange={(e) => onFormChange(e)}
                id='planningPermissionNumber'
                name='planningPermissionNumber'
                className={`${styles.input}`}
                placeholder='3/22/1700/HH'
                required
              />
            </div>
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='localAuthority'
                className={`${styles.label}`}
              >
                {`Local Authority *`}
              </label>
              <input
                type='text'
                onChange={(e) => onFormChange(e)}
                id='localAuthority'
                name='localAuthority'
                className={`${styles.input}`}
                placeholder='East Herts'
                required
              />
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='titleDeadNumber'
                className={`${styles.label}`}
              >
                {`Title deed number *`}
              </label>
              <input
                type='text'
                onChange={(e) => onFormChange(e)}
                id='titleDeadNumber'
                name='titleDeadNumber'
                className={`${styles.input}`}
                placeholder='17646cnnn'
                required
              />
            </div>
          </div>
          <div className=''>
            <div className='relative z-0 w-full lg:w-1/2'>
              <label
                htmlFor='googleMapLink'
                className={`${styles.label}`}
              >
                {`Google map link`}
              </label>
              <input
                type='text'
                onChange={(e) => onFormChange(e)}
                id='googleMapLink'
                name='googleMapLink'
                className={`${styles.input}`}
                placeholder='124.234.'
                required
              />
            </div>
          </div>
          <button
            type='button'
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
