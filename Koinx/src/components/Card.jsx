import React from 'react'
import { Frame } from '../assets'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = () => {
  return (
    <div className='bg-[#0052FE] h-[515px] ml-[20px] rounded-[8px] flex flex-col items-center pb-[19px] px-[31px] py-[16px]'>
      <h1 className='font-bold text-[24px] w-[268px] py-[19px] h-[80px] text-center text-[#fff] leading-10'>Get Started with KoinX for FREE</h1>

      <p className='text-[white] leading-6 text-[14px] font-medium text-center w-[327px] h-[68px] py-[28px]'>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</p>

<img className='pt-[50px]' src={Frame}/>

<button className='font-semibold text-[16px] leading-7 flex items-center px-[24px] py-[8px] rounded-[8px] mt-[28px] bg-[white]'>Get Started for FREE <IoIosArrowRoundForward className='w-[30px] h-[25px] text-[40px] text-black font-bold'/></button>
    </div>
  )
}

export default Card
