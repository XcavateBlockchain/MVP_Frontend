import React from 'react'
import { useNavigate } from 'react-router-dom'
// import illustration from '../assets/common/ilustration.png'
import AssetCard from './cards/AssetCard'
import { data } from '../utils/assets'
import { DoubleArrowSvgIcon } from '../assets/icons'

const Home = () => {
  const navigate = useNavigate()

  const explore = () => {
    navigate(`/market-place`)
  }

  return (
    <>
    <section className='mt-[170px] flex flex-col gap-2.5 px-[100px] items-center w-full mx-auto container justify-center text-center'>
    <h1 className='text-[3rem]/[4rem] text-center font-bold font-graphik-bold heading'>WELCOME TO THE LARGEST GLOBAL WEB3 REAL ESTATE INVESTOR COMMUNITY </h1>

    <p className='text-2xl text-center font-dmsans-regular text-body max-w-[914px]'>
      Buy, sell & trade real world rental real estate through NFTs in a trustless, fully decentralized way
  </p>
          <button
            onClick={explore}
            className=' flex flex-row items-center justify-center w-[213px] h-14 rounded-lg border-2 border-solid border-form opacity-80 mt-8'
          >
            <h5 className='mr-2 text-lg uppercase font-graphik-medium text-body'>
              {`Explore now`}
            </h5>
            <DoubleArrowSvgIcon />
          </button>

 
    </section>
    <section className='flex flex-col items-center justify-center h-auto'>
    <div className='grid w-full grid-cols-3 gap-4 mt-16 mb-20 xl:w-2/3'>
          <AssetCard item={data[0]} isHome={true} company={'https://xcavate.io/assets/chase-new-homes-logo.png'} />
          <AssetCard item={data[2]} isHome={true} company={'https://xcavate.io/assets/USA_Developments_logo.png'} />
          <AssetCard item={data[3]} isHome={true} company={'https://xcavate.io/assets/chase-new-homes-logo.png'} />
        </div>
    </section>
    </>
  )
}

export default Home
