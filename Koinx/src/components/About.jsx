import React from 'react'
import { Info1, Info2 } from '../assets'
import { FaArrowRightLong } from "react-icons/fa6";


const About = () => {
  return (
    <div className='w-full h-[995px] bg-[#fff] p-[24px] mt-[24px]'>
      <h2 className='text-[#0F1629] font-semibold text-[24px] leading-[28.8px]'>About Bitcoin</h2>
      <h4 className='text-[#0B1426] font-bold text-[18px] leading-[21px] pt-[20px]'>What is Bitcoin?</h4>
      <p className='text-[#3E424A] border-b-[1px] border-[#C9CFDD] text-[16px] font-medium py-[16px]'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>


      <h4 className='text-[#0B1426] font-bold text-[18px] leading-[21px] pt-[20px]'>Lorem ipsum dolor sit amet</h4>
      <p className='text-[#3E424A] text-[16px] font-medium py-[16px]'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
      <p className='text-[#3E424A] text-[16px] font-medium py-[16px]'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
      <p className='text-[#3E424A] border-b-[1px] border-[#C9CFDD] text-[16px] font-medium py-[16px]'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

      <h2 className='text-[#0F1629] font-semibold text-[24px] leading-[28.8px] py-[16px]'>Already Holding Bitcoin?</h2>

      <div>
        <div className='flex py-[16px] border-b-[1px] border-[#C9CFDD]'>
            <div className='card bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] w-[338px] h-[151px] rounded-[8px] flex items-center'>
              <img className='w-[128px] h-[128px] p-[12px] rounded-[8px]' src={Info1} />
              <div className='flex-col'>
                <h3 className='text-[#fff] leading-7 font-bold text-[20px] w-[195px]'>Calculate your Profits</h3>
                <button className='my-[10px] w-[132px] h-[32px] flex justify-center items-center text-[#0F1629] text-[14px] font-semibold leading-7 bg-[#ffffff] py-[8px] px-[15px] rounded-[8px]'>Check Now <FaArrowRightLong  className='w-[20px] ml-[10px] h-[20px]'/></button>
              </div>
            </div>

            <div className='card1 bg-gradient-to-r ml-[28px] from-[#FF9865] to-[#EF3031] w-[338px] h-[151px] rounded-[8px] flex items-center'>
              <img className='w-[128px] h-[128px] p-[12px] rounded-[8px]' src={Info2} />
              <div className='flex-col'>
                <h3 className='text-[#fff] leading-7 font-bold text-[20px] w-[195px]'>Calculate your Profits</h3>
                <button className='my-[10px] w-[132px] h-[32px] flex justify-center items-center text-[#0F1629] text-[14px] font-semibold leading-7 bg-[#ffffff] py-[8px] px-[15px] rounded-[8px]'>Check Now <FaArrowRightLong  className='w-[20px] ml-[10px] h-[20px]'/></button>
              </div>
            </div>
        </div>
      </div>

      <p className='font-medium py-[16px] leading-[25.6px] text-[16px] text-[#3E424A]'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
    </div>
  )
}

export default About
