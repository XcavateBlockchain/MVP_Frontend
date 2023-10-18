import React, { useEffect, useRef } from 'react'
import { LoadingSvgIcon, Upload2SvgIcon } from '../../assets/icons'

const styles = {
  input: ' flex flex-row items-center w-full h-[51px] px-4 font-dmsans-regular text-base text-body opacity-[0.85] mt-2 rounded border border-solid border-[#E0DCDC] outline-none',
}

const LoanRequestSubmitModal = ({ isOpen, setIsOpen, loan, setLoan, submit, loading }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current !== null && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('mousedown', handler)

    return () => {
      window.removeEventListener('mousedown', handler)
    }
  }, [setIsOpen])

  const handleFileChange = (e) => {
    const name = e.target.name
    setLoan({
      ...loan,
      [name]: e.target.files[0],
    })
  }

  const cancel = () => {
    setIsOpen(false)
  }

  const handleForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    setLoan({
      ...loan,
      [name]: value,
    })
  }

  const loanSubmit = () => {
    submit()
  }

  return (
    <>
      {isOpen ? (
        <>
          <div
            className='flex fixed justify-center items-center inset-0 z-50 backdrop-blur-sm backdrop-brightness-50'
          >
            <div
              ref={modalRef}
              className=' flex flex-col max-w-[1146px] w-full'
            >
              <div className='flex flex-col w-full bg-white rounded-md mt-3 h-[calc(100vh-60px)] overflow-y-scroll'>
                {/*body*/}
                <section className='flex flex-col justify-center px-7 py-10'>
                  <h3 className=' font-graphik-semibold text-2xl text-headers opacity-[0.85]'>
                    {`Loan application`}
                  </h3>
                  <div className='grid grid-cols-3 gap-2 mt-4'>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Development company name`}
                      </label>
                      <input
                        type='text'
                        value={loan?.developmentCompanyName || ''}
                        name='developmentCompanyName'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='GADE Lettings Limited'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Development experience (years)`}
                      </label>
                      <input
                        type='text'
                        value={loan?.developmentExperience || ''}
                        name='developmentExperience'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='5'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Land owner name`}
                      </label>
                      <input
                        type='text'
                        value={loan?.landOwnerName || ''}
                        name='landOwnerName'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='Jhon Doe'
                      />
                    </div>
                  </div>
                  <h3 className=' font-graphik-semibold text-2xl text-headers opacity-[0.85] mt-6'>
                    {`Project details`}
                  </h3>
                  <div className='grid grid-cols-3 gap-2 mt-4'>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Project name`}
                      </label>
                      <input
                        type='text'
                        value={loan?.projectName || ''}
                        name='projectName'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='Plot 5 - Lancaster House'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Project location`}
                      </label>
                      <input
                        type='text'
                        value={loan?.projectLocation || ''}
                        name='projectLocation'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='394 London'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Planning permission code`}
                      </label>
                      <input
                        type='text'
                        value={loan?.planningPermissionCode || ''}
                        name='planningPermissionCode'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='EILD83938DKS'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-3 gap-2 mt-6'>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Land title deed number`}
                      </label>
                      <input
                        type='text'
                        value={loan?.landTitleDeedNumber || ''}
                        name='landTitleDeedNumber'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='17646cnnn5'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Existing land value`}
                      </label>
                      <input
                        type='text'
                        value={loan?.existingLandValue || ''}
                        name='existingLandValue'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='EER8473'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                        {`Total GDV`}
                      </label>
                      <input
                        type='text'
                        value={loan?.totalGDV || ''}
                        name='totalGDV'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='E38483'
                      />
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className=' font-graphik-semibold text-lg text-headers opacity-[0.85]'>
                      {`Document`}
                    </label>
                    <div className='grid grid-cols-3 gap-2 mt-2'>
                      <div>
                        <label className=' font-graphik-regular text-base text-body opacity-[0.35]'>
                          {`Development plan`}
                        </label>
                        <div className='flex items-center justify-center w-full mt-2'>
                          <label
                            htmlFor='developmentPlan'
                            className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                          >
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                              <Upload2SvgIcon />
                              <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                                <span className=' font-dmsans-medium'>Click to upload</span>
                              </p>
                            </div>
                            <input
                              id='developmentPlan'
                              onChange={(e) => handleFileChange(e)}
                              type='file'
                              className='hidden'
                              name='developmentPlan'
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className=' font-graphik-regular text-base text-body opacity-[0.35]'>
                          {`Elevation/CGIS`}
                        </label>
                        <div className='flex items-center justify-center w-full mt-2'>
                          <label
                            htmlFor='elevationCGIS'
                            className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                          >
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                              <Upload2SvgIcon />
                              <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                                <span className=' font-dmsans-medium'>Click to upload</span>
                              </p>
                            </div>
                            <input
                              id='elevationCGIS'
                              onChange={(e) => handleFileChange(e)}
                              type='file'
                              className='hidden'
                              name='elevationCGIS'
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className=' font-graphik-regular text-base text-body opacity-[0.35]'>
                          {`Estimated pricing schedule`}
                        </label>
                        <div className='flex items-center justify-center w-full mt-2'>
                          <label
                            htmlFor='estimatedPricingSchedule'
                            className='flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 px-5   dark:border-gray-600 dark:hover:border-gray-500 '
                          >
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                              <Upload2SvgIcon />
                              <p className='mb-2 text-center font-dmsans-regular text-xs text-body'>
                                <span className=' font-dmsans-medium'>Click to upload</span>
                              </p>
                            </div>
                            <input
                              id='estimatedPricingSchedule'
                              onChange={(e) => handleFileChange(e)}
                              type='file'
                              className='hidden'
                              name='estimatedPricingSchedule'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <label className='flex flex-row items-center'>
                      <h3 className=' font-graphik-semibold text-lg text-headers opacity-[0.85] mr-1'>
                        {`Description`}
                      </h3>
                      <h4 className=' font-graphik-regular text-base text-headers opacity-[0.35]'>
                        {`(optional)`}
                      </h4>
                    </label>
                    <textarea
                      rows={6}
                      className=' w-full px-4 py-[15px] font-dmsans-regular text-base text-body rounded border border-solid border-[rgba(25, 26, 27, 0.16)] mt-2 placeholder:font-dmsans-regular placeholder:text-base placeholder:text-[rgba(25, 26, 27, 0.35)]'
                      placeholder='Briefly describe the purpose and scope of the land development project.'
                      name='description'
                      onChange={(e) => handleForm(e)}
                      value={loan?.description || ''}
                    />
                  </div>
                  <h3 className=' font-graphik-semibold text-2xl text-headers opacity-[0.85] mt-6'>
                    {`Loan request`}
                  </h3>
                  <div className='grid grid-cols-3 gap-2 mt-4'>
                    <div>
                      <label className=' font-graphik-regular text-base text-headers opacity-[0.35] mt-4'>
                        {`Loan amount`}
                      </label>
                      <input
                        type='text'
                        value={loan?.amount || ''}
                        name='amount'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='1000000000'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-regular text-base text-headers opacity-[0.35] mt-4'>
                        {`Loan term required`}
                      </label>
                      <input
                        type='text'
                        value={loan?.termRequired || ''}
                        name='termRequired'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='5'
                      />
                    </div>
                    <div>
                      <label className=' font-graphik-regular text-base text-headers opacity-[0.35] mt-4'>
                        {`Payment account or wallet address`}
                      </label>
                      <input
                        type='text'
                        value={loan?.paymentAccount || ''}
                        name='paymentAccount'
                        onChange={(e) => handleForm(e)}
                        className={styles.input}
                        placeholder='4tchkknQ8LCQoEbt83MML3HcNCJJvsHD8vXumX18Bsy5E2f1'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4 mt-10'>
                    <button
                      onClick={cancel}
                      className=' flex w-full h-14 rounded-lg bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] p-[1px] hover:scale-[1.01] active:scale-100 hover:shadow-sm'>
                      <div className=' flex flex-row items-center justify-center w-full h-full rounded-lg bg-white'>
                        <h5 className=' font-graphik-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] uppercase'>
                          {`Cancel`}
                        </h5>
                      </div>
                    </button>
                    <button
                      disabled={loading}
                      onClick={loanSubmit}
                      className=' flex flex-row items-center justify-center w-full h-14 rounded-md bg-gradient-to-r hover:scale-[1.01] hover:shadow-sm active:scale-[1] from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%]'
                    >
                      {loading ? <LoadingSvgIcon /> : <h5 className=' font-graphik-semibold text-lg text-white uppercase'>
                        {`Submit`}
                      </h5>}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='opacity-70 fixed inset-0 z-40 bg-purple'></div>
        </>
      ) : null}
    </>
  )
}

export default LoanRequestSubmitModal
