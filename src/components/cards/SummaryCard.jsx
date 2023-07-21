import React from 'react'

const SummaryCard = ({sumData}) => {
    return ( 
        <>
            
        <div className='max-w-lg mt-2 bg-white relative asset-card  shadow'>
      
        <div className='px-5 py-3 summarry-card'>
        
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-black-900 dark:text-black'>
             {sumData.title}
            </h5>
            <div className='w-full flex justify-center mt-5 items-center'><h5 className='text-2xl font-bold tracking-tight text-gray-500'>
               {sumData.value}
            </h5></div>
      
          <h3 className='text-white mt-1 mb-1'>{sumData.value}</h3>
        </div>
      </div>

        </>
     )
}
 
export default SummaryCard