import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ArrowPrevSvgIcon, LoadingSvgIcon } from '../../assets/icons'
import { create } from '../../api/company'
import { getTerms, requestAttestation } from '../../api/sporran'
import {
  apiWindow,
  getCompatibleExtensions,
  getSession,
} from '../../utilities/session'
import { setUserData } from '../../redux/features/userSlice'
import { toast } from 'react-toastify'

const CreateCompany = () => {
  const { kilt } = apiWindow
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [extensions, setExtensions] = useState(getCompatibleExtensions());
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    email: '',
    phoneNumber: '',
    address: '',
    associationWebsite: '',
    associationMembershipNumber: '',
    idDoc1: null,
    idDoc2: null,
  })
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function handler() {
      setExtensions(getCompatibleExtensions())
    }

    window.dispatchEvent(new CustomEvent('kilt-dapp#initialized'))
    window.addEventListener('kilt-extension#initialized', handler)
    return () =>
      window.removeEventListener('kilt-extension#initialized', handler)
  }, [])

  const [formImages, setFormImages] = useState({
    doc1: {
      preview: "",
      data: "",
    },
    doc2: {
      preview: "",
      data: "",
    },
  })

  const goProfile = () => {
    navigate('/profile')
  }

  const onFormChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    let name = e.target.name
    setFormImages({ ...formImages, [name]: img })
    setFormData({
      ...formData,
      [name]: e.target.files[0],
    })
  }

  const handleClaim = async () => {
    let sporranSession = session

    try {
      setLoading(true)

      if (!sporranSession) {
        if (kilt && extensions[0] && kilt[extensions[0]]) {
          sporranSession = await getSession(kilt[extensions[0]])
          setSession(sporranSession)
        }
      }

      // storing developer credential data in mongodb and aws s3 for the doc file
      const sendFormData = new FormData()

      sendFormData.append('name', formData.name)
      sendFormData.append('registrationNumber', formData.registrationNumber)
      sendFormData.append('email', formData.email)
      sendFormData.append('phoneNumber', formData.phoneNumber)
      sendFormData.append('address', formData.address)
      sendFormData.append('associationWebsite', formData.associationWebsite)
      sendFormData.append('associationMembershipNumber', formData.associationMembershipNumber)
      sendFormData.append('idDoc1', formData.idDoc1)
      sendFormData.append('idDoc2', formData.idDoc2)

      create(sendFormData)
        .then(async (data) => {
          if (data?.status === 201 && data?.data?.data) {
            const userData = data.data.data

            console.log('userData :: ', userData)

            dispatch(setUserData(userData?.user || {}))

            const { sessionId } = sporranSession
            const type = 'company'
            // define in advance how to handle the response from the extension
            await sporranSession.listen(async (message) => {
              console.log('message :: ', message)
              const attestedResult = await requestAttestation({ ...message, type, }, sessionId)
              console.log('attestedResult :: ', attestedResult)
              if (attestedResult?.status === 201 && attestedResult?.data?.data) {
                setLoading(false)
                const updatedUserData = attestedResult?.data?.data
                dispatch(setUserData(updatedUserData))
                toast.success('Successfully requested attestation')
                navigate('/profile')
              }
            })

            // encrypt submit-terms message on the backend
            const message = await getTerms({ type, claimContents: { ...userData?.company }, }, sessionId)
            if (message?.status === 200 && message?.data) {
              // forward the encrypted message to the extension
              await sporranSession.send(message.data)
            }
          }
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className=" mt-36">
      {/* breadcrumb */}
      <div className='flex items-center pl-[30px] cursor-pointer' onClick={() => goProfile()}>
        <span className='mr-1'>
          <ArrowPrevSvgIcon />
        </span>
        <h5 className=' font-graphik-medium text-xl text-body opacity-[0.8]'>
          {`Back`}
        </h5>
      </div>
      <div className="container m-auto flex justify-center items-center flex-col h-[100%]">
        <div className=" flex flex-row items-center w-[60%] h-[68px] bg-white rounded-t-lg px-9 pt-10 mt-10">
          <label
            htmlFor="bordered-radio-1"
            className=" font-graphik-bold text-xl text-[rgba(21,23,25,0.80)] tracking-[0.5px]"
          >
            {`Company credentials`}
          </label>
        </div>
        <div className="py-10 px-9 rounded-b-lg bg-white w-[60%]">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="name"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Company name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="Gade Lettings Limited"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="registrationNumber"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Registration number
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="8454370"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="email"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Company email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="Lettings@gade.co.uk"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="phoneNumber"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Company phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="7768545547"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="address"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="123 The Avenue"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="associationWebsite"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Association website
              </label>
              <input
                type="text"
                id="associationWebsite"
                name="associationWebsite"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="Gade.associate"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
            <div className="relative z-0 w-full mb-7 group">
              <label
                htmlFor="associationMembershipNumber"
                className=" font-graphik-medium block mb-[6px] text-lg text-body dark:text-black"
              >
                Association membership number
              </label>
              <input
                type="text"
                id="associationMembershipNumber"
                name="associationMembershipNumber"
                className=" flex flex-row items-center w-full h-[52px] border-2 border-form border-opacity-[0.5] rounded-lg px-6 font-dmsans-regular text-body placeholder:font-dmsans-regular text-lg"
                placeholder="UKALA123"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="document"
              className=" font-graphik-medium block text-lg text-body dark:text-black"
            >
              {`Document`}
            </label>
            <label
              htmlFor="document"
              className=" font-dmsans-regular text-base text-[rgba(25, 26, 27, 0.85)] mt-2"
            >
              {`Please upload your ID (drivers license or passport) and a utility bill within 3 months. `}
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="flex justify-center flex-col">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="idDoc1"
                    className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className=" font-graphik-regular mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      id="idDoc1"
                      className="hidden"
                      name="idDoc1"
                      onChange={(e) => handleFileChange(e)}
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="idDoc2"
                    className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className=" font-graphik-regular mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                    </div>
                    <input
                      id="idDoc2"
                      accept="image/*"
                      type="file"
                      className="hidden"
                      name="idDoc2"
                      onChange={(e) => handleFileChange(e)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClaim}
            disabled={loading}
            className=" flex flex-row items-center justify-center w-full h-[60px] mt-10 rounded-md bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%]"
          >
            {loading ? <LoadingSvgIcon /> : <h5 className=" font-graphik-bold text-lg text-white">
              {`Verify`}
            </h5>}
          </button>
        </div>
      </div>

    </section>
  )
}

export default CreateCompany
