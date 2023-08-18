import React, { useState } from 'react'
import LoanRequestModal from '../../modals/LoanRequestModal'
import LoanRequestDetailModal from '../../modals/LoanRequestDetailModal'
import LoanRequestSubmitModal from '../../modals/LoanRequestSubmitModal'

const DevelopmentLoan = () => {
  const [active, setActive] = useState('request')
  const [isOpen, setIsOpen] = useState(false)
  const [detailIsOpen, setDetailIsOpen] = useState(false)
  const [submistIsOpen, setSubmitIsOpen] = useState(false)

  return (
    <div className='px-4 py-10 container'>
      <div className='flex flex-row justify-between items-center mt-6'>
        <div className='flex flex-row items-center'>
          <button
            onClick={() => setActive('request')}
            className={`flex flex-row items-center justify-center w-[159px] h-[52px] ${active === 'request'? 'bg-[#2F90B6]' : 'bg-white'} border border-solid border-[#2FA2C8]`}
          >
            <h4 className={`font-graphik-regular text-lg ${active === 'request'? 'text-[#D9E3EA]' : 'text-[#2F8BB2]'}`}>
              {`Loan request`}
            </h4>
          </button>
          <button
            onClick={() => setActive('status')}
            className={`flex flex-row items-center justify-center w-[159px] h-[52px]  ${active === 'status'? 'bg-[#2F90B6]' : 'bg-white'} border border-solid border-[#2FA2C8]`}
          >
            <h4 className={`font-graphik-regular text-lg ${active === 'status'? 'text-[#D9E3EA]' : 'text-[#2F8BB2]'}`}>
              {`Loan status`}
            </h4>
          </button>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className=' flex w-[159px] h-[54px] rounded bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] p-[1px] hover:scale-[1.01] active:scale-100 hover:shadow-sm'>
          <div className=' flex flex-row items-center justify-center w-full h-full rounded bg-white'>
            <h5 className=' font-graphik-regular text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%]'>
              {`Request Loan`}
            </h5>
          </div>
        </button>
      </div>
      <LoanRequestModal isOpen={isOpen} setIsOpen={setIsOpen} setDetailIsOpen={setDetailIsOpen} />
      <LoanRequestDetailModal isOpen={detailIsOpen} setIsOpen={setDetailIsOpen} setSubmitIsOpen={setSubmitIsOpen} />
      <LoanRequestSubmitModal isOpen={submistIsOpen} setIsOpen={setSubmitIsOpen} />
    </div>
  )
}

export default DevelopmentLoan
