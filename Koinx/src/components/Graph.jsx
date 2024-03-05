import React from 'react'
import { Bitcoin } from '../assets'
import { IoMdArrowDropup } from "react-icons/io";
import GraphWidget from './GraphWidget';

const Graph = () => {
  return (
    <div className='bg-[#fff] w-[full] px-[24px] py-[24px]'>
      <div className='flex'>
        <img src={Bitcoin}/>
        <button className='bg-[#808A9D] w-[80px] h-[40px] rounded-[8px] ml-[40px] font-medium text-[16px] text-white'>Rank #1</button>
      </div>

      <div className='pt-[24px] flex items-center'>
        <h1 className='text-[#0B1426] font-Inter font-semibold text-[28px] leading-8'>$46,953.04</h1>
        <button className='flex items-center bg-[#EBF9F4] rounded-[8px] px-[8px] py-[4px] ml-[32px] text-[#14B079] font-medium text-[16px]'><IoMdArrowDropup className='mr-[2px] text-[20px]'/>2.51%</button>
        <h3 className='ml-[24px] text-[#768396] text-[14px] font-medium'>(24H)</h3>
      </div>
      <h2 className='text-[#0B1426] pb-[24px] border-b-[1px] border-[#DEE1E6] text-[16px] font-medium pt-[6px]'>₹ 39,42,343</h2>

      
        <GraphWidget />
     
    </div>
  )
}

export default Graph
