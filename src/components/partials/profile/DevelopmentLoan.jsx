import React, { useState } from 'react'
import LoanRequestModal from '../../modals/LoanRequestModal'
import LoanRequestDetailModal from '../../modals/LoanRequestDetailModal'
import LoanRequestSubmitModal from '../../modals/LoanRequestSubmitModal'
import { create, getLoansByUser } from '../../../api/loan'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import LoanRequestItem from './LoanRequestItem'
import { useSubstrateState } from '../../../contexts/SubstrateContext'
import { web3FromSource } from '@polkadot/extension-dapp'

const DevelopmentLoan = () => {
  const { api, keyring, polkadotAccount } = useSubstrateState()
  const [active, setActive] = useState('request')
  const [isOpen, setIsOpen] = useState(false)
  const [detailIsOpen, setDetailIsOpen] = useState(false)
  const [submistIsOpen, setSubmitIsOpen] = useState(false)
  const [loan, setLoan] = useState({
    developmentCompanyName: '',
    developmentExperience: '',
    landOwnerName: '',
    projectName: '',
    projectLocation: '',
    planningPermissionCode: '',
    landTitleDeedNumber: '',
    existingLandValue: '',
    totalGDV: '',
    developmentPlan: null,
    elevationCGIS: null,
    estimatedPricingSchedule: null,
    description: '',
    amount: '',
    termRequired: '',
    paymentAccount: '',
  })
  const [loading, setLoading] = useState(false)
  const [loans, setLoans] = useState([])

  const getLoans = async () => {
    try {
      const result = await getLoansByUser()
      if (result.status === 200) {
        setLoans(result.data.data)
      }
    } catch (error) {
      console.log('error :: ', error)
    }
  }

  useEffect(() => {
    getLoans()
  }, [])

  const getFromAcct = async () => {
    const currentAccount = keyring.getPair(polkadotAccount)
    const {
      address,
      meta: { source, isInjected },
    } = currentAccount

    if (!isInjected) {
      return [currentAccount]
    }

    // currentAccount is injected from polkadot-JS extension, need to return the addr and signer object.
    // ref: https://polkadot.js.org/docs/extension/cookbook#sign-and-send-a-transaction
    const injector = await web3FromSource(source)
    return [address, { signer: injector.signer }]
  }

  const submit = async () => {
    try {
      setLoading(true)

      const fromAcct = await getFromAcct()
      // collection creation
      await api.tx.communityLoanPool.propose(loan?.amount, loan?.paymentAccount, loan?.developmentExperience, loan?.termRequired).signAndSend(...fromAcct, ({ events = [], status, txHash }) => {
        status.isFinalized
          ? toast.success(`Loan request finalized. Block hash: ${status.asFinalized.toString()}`)
          : toast.info(`Loan request: ${status.type}`)

        events.forEach(async ({ _, event: { data, method, section } }) => {
          if ((section + ":" + method) === 'system:ExtrinsicFailed') {
            console.log('loan request :: failed')
            toast.warn('Unexpected error occurred')
            setLoading(false)
          } else if (section + ":" + method === 'system:ExtrinsicSuccess' && status?.type !== 'InBlock') {
            console.log('loan request :: ', `❤️️ Transaction successful! tx hash: ${txHash}, Block hash: ${status.asFinalized.toString()}`)
            const formData = new FormData()

            formData.append('developmentCompanyName', loan.developmentCompanyName)
            formData.append('developmentExperience', loan.developmentExperience)
            formData.append('landOwnerName', loan.landOwnerName)
            formData.append('projectName', loan.projectName)
            formData.append('projectLocation', loan.projectLocation)
            formData.append('planningPermissionCode', loan.planningPermissionCode)
            formData.append('landTitleDeedNumber', loan.landTitleDeedNumber)
            formData.append('existingLandValue', loan.existingLandValue)
            formData.append('totalGDV', loan.totalGDV)
            formData.append('developmentPlan', loan.developmentPlan)
            formData.append('elevationCGIS', loan.elevationCGIS)
            formData.append('estimatedPricingSchedule', loan.estimatedPricingSchedule)
            formData.append('description', loan.description)
            formData.append('amount', loan.amount)
            formData.append('termRequired', loan.termRequired)
            formData.append('paymentAccount', loan.paymentAccount)

            const result = await create(formData)
            if (result?.status === 201 && result?.data?.data) {
              setLoading(false)
              toast.success('Created a new loan request successfully')
              setSubmitIsOpen(false)
              getLoans()
            } else {
              setLoading(false)
              toast.warn('Unexpected error occurred')
            }
          }
        })
      })
    } catch (error) {
      setLoading(false)
      console.log('error :: ', error)
    }
  }

  return (
    <div className='px-4 py-10 container'>
      {/* buttons */}
      <div className='flex flex-row justify-between items-center mt-6'>
        <div className='flex flex-row items-center'>
          <button
            onClick={() => setActive('request')}
            className={`flex flex-row items-center justify-center w-[159px] h-[52px] ${active === 'request' ? 'bg-[#2F90B6]' : 'bg-white'} border border-solid border-[#2FA2C8]`}
          >
            <h4 className={`font-graphik-regular text-lg ${active === 'request' ? 'text-[#D9E3EA]' : 'text-[#2F8BB2]'}`}>
              {`Loan request`}
            </h4>
          </button>
          <button
            onClick={() => setActive('status')}
            className={`flex flex-row items-center justify-center w-[159px] h-[52px]  ${active === 'status' ? 'bg-[#2F90B6]' : 'bg-white'} border border-solid border-[#2FA2C8]`}
          >
            <h4 className={`font-graphik-regular text-lg ${active === 'status' ? 'text-[#D9E3EA]' : 'text-[#2F8BB2]'}`}>
              {`Loan status`}
            </h4>
          </button>
        </div>
        <button
          onClick={() => setSubmitIsOpen(true)}
          className=' flex w-[159px] h-[54px] rounded bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%] p-[1px] hover:scale-[1.01] active:scale-100 hover:shadow-sm'>
          <div className=' flex flex-row items-center justify-center w-full h-full rounded bg-white'>
            <h5 className=' font-graphik-regular text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E574A5_32.81%] via-[#354E78_67.73%] to-[#2F8BB2_100%]'>
              {`Request Loan`}
            </h5>
          </div>
        </button>
      </div>
      {/* loan request */}
      {active === 'request' && <div className=' mt-12'>
        {loans.length > 0 && loans.map((loan, index) => (
          <LoanRequestItem key={index} loan={loan} setLoans={setLoans} />
        ))}
      </div>}
      <LoanRequestModal isOpen={isOpen} setIsOpen={setIsOpen} setDetailIsOpen={setDetailIsOpen} loan={loan} setLoan={setLoan} />
      <LoanRequestDetailModal isOpen={detailIsOpen} setIsOpen={setDetailIsOpen} setSubmitIsOpen={setSubmitIsOpen} />
      <LoanRequestSubmitModal isOpen={submistIsOpen} setIsOpen={setSubmitIsOpen} loan={loan} setLoan={setLoan} submit={submit} loading={loading} />
    </div>
  )
}

export default DevelopmentLoan
