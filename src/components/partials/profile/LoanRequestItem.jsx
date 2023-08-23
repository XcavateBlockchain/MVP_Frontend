import React from 'react'
import moment from 'moment'

const LoanRequestItem = ({ loan }) => {
  return (
    <div>
      <div className='flex flex-row items-center w-full h-[53px] bg-white border-x-2 border-t border-solid border-[#948888] border-opacity-10'>
        <label className='w-[18%]'>
          <h5 className=' font-dmsans-medium text-base text-[#948888] px-4'>
            {`Loan amount`}
          </h5>
        </label>
        <label className='w-[20%]'>
          <h5 className=' font-dmsans-medium text-base text-[#948888] px-4'>
            {`Loan request status`}
          </h5>
        </label>
        <label className='w-[18%]'>
          <h5 className=' font-dmsans-medium text-base text-[#948888] px-4'>
            {`Planning code`}
          </h5>
        </label>
        <label className='w-[15%]'>
          <h5 className=' font-dmsans-medium text-base text-[#948888] px-4'>
            {`Duration`}
          </h5>
        </label>
        <label className='w-[15%]'>
          <h5 className=' font-dmsans-medium text-base text-[#948888] px-4'>
            {`Date`}
          </h5>
        </label>
        <label className='w-[14%]'>
          &nbsp;
        </label>
      </div>
      <div className='flex flex-row items-center w-full h-[53px] border-b-2 border-solid border-[#948888] border-opacity-10'>
        <label className='w-[18%]'>
          <h5 className=' font-dmsans-medium text-base text-body opacity-80 px-4'>
            £{loan?.amount || ''}
          </h5>
        </label>
        <label className='w-[20%]'>
          {!loan?.isApproved && !loan?.isRejected && !loan?.isMinted && !loan?.isCanceled && (
            <h5 className=' font-dmsans-medium text-lg text-progress px-4'>
              {`Under review`}
            </h5>
          )}
          {loan?.isRejected && (
            <h5 className=' font-dmsans-medium text-lg text-red-600 px-4'>
              {`Rejected`}
            </h5>
          )}
          {loan?.isApproved && !loan?.isRejected && !loan?.isMinted && !loan?.isCanceled && (
            <h5 className=' font-dmsans-medium text-lg text-verified px-4'>
              {`Approved`}
            </h5>
          )}
        </label>
        <label className='w-[18%]'>
          <h5 className=' font-dmsans-medium text-base text-body opacity-80 px-4'>
            {loan?.planningPermissionCode || ''}
          </h5>
        </label>
        <label className='w-[15%]'>
          <h5 className=' font-dmsans-medium text-base text-body opacity-80 px-4'>
            {`${loan?.duration} months` || ''}
          </h5>
        </label>
        <label className='w-[15%]'>
          <h5 className=' font-dmsans-medium text-base text-body opacity-80 px-4'>
            {moment(loan?.createdAt || '').format('MMM DD, YYYY')}
          </h5>
        </label>
        <label className='w-[14%]'>
          {!loan?.isApproved && !loan?.isRejected && !loan?.isMinted && !loan?.isCanceled && (
            <div className=' flex flex-row items-center justify-center w-full h-full rounded '>
              <h5 className=' font-dmsans-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] px-4'>
                {`Cancel`}
              </h5>
            </div>
          )}
          {loan?.isRejected && (
            <div className=' flex flex-row items-center justify-center w-full h-full rounded'>
              <h5 className=' font-dmsans-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] px-4'>
                {`Try again`}
              </h5>
            </div>
          )}
          {loan?.isApproved && !loan?.isRejected && !loan?.isMinted && !loan?.isCanceled && (
            <div className=' flex flex-row items-center justify-center w-full h-full rounded'>
              <h5 className=' font-dmsans-medium text-lg text-verified px-4'>
                {`Mint NFT`}
              </h5>
            </div>
          )}
        </label>
      </div>
    </div>
  )
}

export default LoanRequestItem
