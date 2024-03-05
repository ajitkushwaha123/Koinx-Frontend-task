import React from 'react'
import { Sentiment1, Sentiment2 } from '../assets'

const Sentiments = () => {
  return (
    <div className='w-full bg-[#fff] mt-[24px] p-[24px]'>
      <h2 className='font-semibold text-[24px] leading-[28.8px] text-[#0F1629]'>Sentiment</h2>
      <h3 className='text-[#44475B] leading-5 py-[17px] text-[19px] font-medium'>Key Events</h3>

      <div className='flex'>
        <div className='bg-[#E8F4FD] w-[456px] h-[204px] pt-[18px] pl-[18px] py-[38px] pr-[18px] rounded-[12px] flex'>
           <div className='w-[128px]'>
              <img className='w-[128px] h-[128px]' src={Sentiment1}/>
           </div>

           <div className='ml-[10px]'>
             <p className='text-[#191C1F] font-medium text-[14px] leading-5'>Lorem ipsum dolor sit amet consectetur. Dui vel <br/> quis dignissim mattis enim tincidunt.</p>
             <p className='text-[14px] leading-5 font-normal text-[#3E5765] py-[10px]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
           </div>
        </div>

   {/* Second Div */}

        <div className='bg-[#EBF9F4] ml-[28px] w-[456px] h-[204px] pt-[18px] pl-[18px] py-[38px] pr-[18px] rounded-[12px] flex'>
           <div className='w-[128px]'>
              <img className='w-[40px] h-[40px]' src={Sentiment2}/>
           </div>

           <div className='ml-[10px]'>
             <p className='text-[#191C1F] font-medium text-[14px] leading-5'>Lorem ipsum dolor sit amet consectetur. Dui vel <br/> quis dignissim mattis enim tincidunt.</p>
             <p className='text-[14px] leading-5 font-normal text-[#3E5765] py-[10px]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Sentiments
