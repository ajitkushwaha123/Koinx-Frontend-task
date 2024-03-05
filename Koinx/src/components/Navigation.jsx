import React from 'react'
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <div className='w-full h-[52px] px-[56px] flex items-center'>
      <h3> <span className='text-[#3E5765] pr-2 font-normal'>Cryptocurrencies</span> </h3>
      <RiArrowRightDoubleFill className='items-center text-[15px] text-[#3E5765]'/>
      <h3 className='pl-2 text-[14px] font-medium font-inter text-[#0F1629] leading-4'>Bitcoin</h3>
    </div>
  )
}

export default Navigation
