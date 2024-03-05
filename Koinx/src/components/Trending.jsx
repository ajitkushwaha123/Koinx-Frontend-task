import React from 'react'
import { Bit } from '../assets'
import { Poly } from '../assets'
import { IoMdArrowDropup } from "react-icons/io";

const Trending = () => {
  return (
    <div className='bg-[#fff] ml-[20px] mt-[20px] p-[24px]'>
      <h1 className='font-semibold text-[24px] text-[#0F1629]'> Trending Coins (24h) </h1>

      <div className='pt-[24px]'>
        <div className='flex items-center justify-between pb-[20px]'>
            <div className='flex items-center'> 
               <img src={Bit}/>
               <h2 className='text-[#0F1629] pl-[10px] text-[16px] font-medium leading-6'>Ethereum(ETH)</h2>
            </div>
            <button className='flex items-center bg-[#EBF9F4] rounded-[8px] px-[8px] py-[4px] ml-[32px] text-[#14B079] font-medium text-[16px]'><IoMdArrowDropup className='mr-[2px] text-[20px]'/>2.51%</button>
        </div>

        <div className='flex items-center justify-between pb-[20px]'>
            <div className='flex items-center'> 
              <img src={Poly}/>
              <h2 className='text-[#0F1629] pl-[10px] text-[16px] font-medium leading-6'>Bitcoin (BTC)</h2>
            </div>
            <button className='flex items-center bg-[#EBF9F4] rounded-[8px] px-[8px] py-[4px] ml-[32px] text-[#14B079] font-medium text-[16px]'><IoMdArrowDropup className='mr-[2px] text-[20px]'/>8.21%</button>
        </div>

        <div className='flex items-center justify-between pb-[20px]'>
            <div className='flex items-center'> 
              <img src={Bit}/>
              <h2 className='text-[#0F1629] pl-[10px] text-[16px] font-medium leading-6'>Polygon (MATIC)</h2>
           </div>
            <button className='flex items-center bg-[#EBF9F4] rounded-[8px] px-[8px] py-[4px] ml-[32px] text-[#14B079] font-medium text-[16px]'><IoMdArrowDropup className='mr-[2px] text-[20px]'/>5.56%</button>
        </div>
      </div>
    </div>
  )
}

export default Trending
