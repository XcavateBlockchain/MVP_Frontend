import React from 'react'
import { BellSvgIcon, FolderShareSvgIcon, FolderSvgIcon, UserSvgIcon, WalletSvgIcon, TransactionSvgIcon } from '../../assets/icons'

const ProfileTab = ({ tab, setTab }) => {
  return (
    <div className=' container mt-10'>
      <div className=' flex flex-row justify-around items-center'>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('profile')}>
          <UserSvgIcon opacity={tab === 'profile' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'profile' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Profile`}
          </h4>
        </div>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('properties')}>
          <FolderSvgIcon opacity={tab === 'properties' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'properties' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Properties`}
          </h4>
        </div>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('sold')}>
          <FolderShareSvgIcon opacity={tab === 'sold' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'sold' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Sold properties`}
          </h4>
        </div>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('transactions')}>
          <TransactionSvgIcon opacity={tab === 'transactions' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'transactions' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Transactions`}
          </h4>
        </div>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('wallet')}>
          <WalletSvgIcon opacity={tab === 'wallet' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'wallet' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Wallet access`}
          </h4>
        </div>
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setTab('notification')}>
          <BellSvgIcon opacity={tab === 'notification' ? 0.8 : 0.6} />
          <h4 className={` ${tab === 'notification' ? 'font-graphik-medium' : 'font-graphik-regular'} font-graphik-medium text-xl text-headers opacity-80 ml-1`}>
            {`Notification`}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab
