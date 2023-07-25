import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Upload1SvgIcon } from '../../assets/icons'
import { addNft } from '../Polkadot/nft'
const PropertyInfo = () => {
  const [formaData, setFormData] = useState({
    p_title: '',
    p_number: '',
    p_street: '',
    p_city: '',
    p_code: '',
    p_desc: '',
  })
  const [formImages, setFormImages] = useState({
    floor_plan: {
      preview: '',
      data: '',
    },
    sale_agreement: {
      preview: '',
      data: '',
    },
    property_image_1: {
      preview: '',
      data: '',
    },
    property_image_2: {
      preview: '',
      data: '',
    },
    property_image_3: {
      preview: '',
      data: '',
    },
    property_image_4: {
      preview: '',
      data: '',
    },
  })

  const [inputFields, setInputFields] = useState([
    {
      feature: '',
    },
  ])

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        feature: '',
      },
    ])
  }
  const removeInputFields = (index) => {
    const rows = [...inputFields]
    rows.splice(index, 1)
    setInputFields(rows)
  }
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target
    const list = [...inputFields]
    list[index][name] = value
    setInputFields(list)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    let name = e.target.name
    setFormImages({ ...formImages, [name]: img })
  }

  const onFormChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({ ...formaData, [name]: value })
    console.log(formaData)
  }

  const formSubmissionClick = () => {
    const data = {
      formaData,
      formImages,
      features: inputFields,
    }
    console.log(data)
  }

  const create = async () => {
    try {
      const collection = 1
      const item = 2
      const mint_to = ['4tXieDGzm6sfAujC4Z4etqoZrsXdXmg446jJ1auYDiJJHTij']
      const data = {
        name: 'C appart 1',
        number: '3/32/34932/HDMLD',
        address: '9389 Alia Bialkk Daialek',
      }
      const is_frozen = false
      const phrase = 'forest turn anchor because angry miracle slot unhappy claim blood champion dolphin'
      
      const tx = await addNft(collection, item, mint_to, data, phrase)
      console.log('tx :: ', tx)
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className='container  m-auto flex justify-center items-center flex-col h-[100%] rounded-b-lg mt-4'>
        <div className='py-10 px-20 bg-white w-full'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='email'
                className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
              >
                {`Property name`}
              </label>
              <input
                type='text'
                id='ptitle'
                name='p_title'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Briks and blocks'
                required
              />
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label
                htmlFor='email'
                className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
              >
                {`Property Number`}
              </label>
              <input
                type='text'
                id='ptype'
                name='p_number'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='3/22/1700/HH'
                required
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='p_street'
              className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
            >
              Property Address
            </label>
            <div className='grid md:grid-cols-3 md:gap-3'>
              <input
                type='text'
                id='p_street'
                name='p_street'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Street'
                required
              />
              <input
                type='text'
                id='p_city'
                name='p_city'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='City'
                required
              />
              <input
                type='text'
                id='p_code'
                name='p_code'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Zip code/ postal code'
                required
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='p_desc'
              className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
            >
              Property Description
            </label>
            <textarea
              id='p_desc'
              name='p_desc'
              rows='4'
              onChange={(e) => onFormChange(e)}
              className=' border-2 border-solid border-form border-opacity-[0.5] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
              placeholder='Give a brief detail about this property'
            ></textarea>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='feature'
              className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
            >
              Property Feature
            </label>
            <div className='grid md:grid-cols-3 md:gap-3'>
              <input
                type='text'
                id='f_internal_area'
                name='f_internal_area'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Internal area'
                required
              />
              <input
                type='text'
                id='f_finish_quality'
                name='f_finish_quality'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Finish quality'
                required
              />
              <input
                type='text'
                id='f_property_type'
                name='f_property_type'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Property type'
                required
              />
              <input
                type='text'
                id='f_number_of_bedrooms'
                name='f_number_of_bedrooms'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Number of bedrooms'
                required
              />
              <input
                type='text'
                id='f_out_door_space'
                name='f_out_door_space'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Out door space'
                required
              />
              <input
                type='text'
                id='f_construction_date'
                name='f_construction_date'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Construction date'
                required
              />
              <input
                type='text'
                id='f_number_of_bathrooms'
                name='f_number_of_bathrooms'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Number of bathrooms'
                required
              />
              <input
                type='text'
                id='f_off_street_parking'
                name='f_off_street_parking'
                onChange={(e) => onFormChange(e)}
                className=' border-2 border-solid border-form border-opacity-[0.5] h-[52px] rounded-lg block w-full outline-none mt-2 p-4 font-graphik-regular text-lg trackign-[0.45px] text-body placeholder:text-headers placeholder:opacity-[0.2]'
                placeholder='Off street parking'
                required
              />
            </div>
          </div>
          <label
            htmlFor=''
            className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
          >
            {`Document upload`}
          </label>
          <div className='mt-5 mb-3 grid grid-cols-2 gap-5'>
            <div className='flex justify-center flex-col'>
              <label
                htmlFor='floor_plan'
                className=' font-graphik-regular text-lg text-headers'
              >
                {`Doc 1 (Floor plan file)`}
              </label>
              <div className='flex items-center justify-center w-full mt-1'>
                <label
                  htmlFor='floor_plan'
                  className='flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      aria-hidden='true'
                      className='w-10 h-10 mb-3 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                      ></path>
                    </svg>
                    <p className=' font-graphik-regular text-base text-body leading-[161.4%]'>
                      <span className=' font-graphik-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    type='file'
                    accept='image/*'
                    id='floor_plan'
                    className='hidden'
                    name='floor_plan'
                    onChange={(e) => handleFileChange(e)}
                  />
                </label>
              </div>
            </div>
            <div className='flex justify-center flex-col mx-3'>
              <label
                htmlFor='id'
                className=' font-graphik-regular text-lg text-headers'
              >
                {`Doc 2 (DEED Of assignment)`}
              </label>
              <div className='flex items-center justify-center w-full mt-1'>
                <label
                  htmlFor='sale_agreement'
                  className='flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      aria-hidden='true'
                      className='w-10 h-10 mb-3 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                      ></path>
                    </svg>
                    <p className=' font-graphik-regular text-base text-body leading-[161.4%]'>
                      <span className=' font-graphik-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id='sale_agreement'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    type='file'
                    className='hidden'
                    name='sale_agreement'
                  />
                </label>
              </div>
            </div>
          </div>
          <label
            htmlFor=''
            className=' font-graphik-medium text-headers text-lg tracking-[0.45px]'
          >
            {`Property image upload`}
          </label>
          <div className='grid md:grid-cols-4 md:gap-2 mt-2'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='property_image_1'
                  className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload1SvgIcon />
                    <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                      <span className=' font-dmsans-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id='property_image_1'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    type='file'
                    className='hidden'
                    name='property_image_1'
                  />
                </label>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='property_image_2'
                  className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload1SvgIcon />
                    <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                      <span className=' font-dmsans-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id='property_image_2'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    type='file'
                    className='hidden'
                    name='property_image_2'
                  />
                </label>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='property_image_3'
                  className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload1SvgIcon />
                    <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                      <span className=' font-dmsans-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id='property_image_3'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    type='file'
                    className='hidden'
                    name='property_image_3'
                  />
                </label>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='property_image_4'
                  className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload1SvgIcon />
                    <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                      <span className=' font-dmsans-medium'>Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id='property_image_4'
                    accept='image/*'
                    onChange={(e) => handleFileChange(e)}
                    type='file'
                    className='hidden'
                    name='property_image_4'
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            type='button'
            onClick={create}
            className=' flex flex-row justify-center items-center w-full h-[60px] rounded-lg mt-12 bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#F5A483] via-[#E574A5] via-[#354E78] to-[#2F8BB2]'
          >
            <h4 className=' font-dmsans-bold text-lg text-white'>
              {`Next`}
            </h4>
          </button>
        </div>
      </div>
    </>
  )
}

export default PropertyInfo
