import React from 'react';
import { Team1, Team2, Team3 } from '../assets';

const teamMem = [
  {
    img: Team1,
    title: "John Smith",
    designation: "Designation Here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: Team2,
    title: "Elina Williams",
    designation: "Designation Here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: Team3,
    title: "John Smith",
    designation: "Designation Here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

const Team = () => {
  return (
    <div className='bg-[#fff] p-[24px] rounded-[8px] mt-[24px] h-[776px]'>
      <h1 className='text-[24px] leading-7 font-semibold text-[#0F1629]'>Team</h1>
      <p className='text-[#3E424A] py-[16px] font-medium text-[16px] leading-6 w-[830px]'>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas.
        Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className='mt-[20px]'>
        {teamMem.map((member, index) => (
          <div key={index} className='bg-[#E8F4FD] mt-[20px] rounded-[8px] flex justify-center items-center h-[177.51px]'>
            <div className='flex flex-col w-[128px] justify-center items-center py-[13.19px]'>
              <img className='w-[96.35px] h-[104.81px] rounded-[6.68px]' src={member.img} alt={member.title} />
              <h2 className='text-[#0F1629] leading-[18px] pt-[4.12px] text-[15px] font-semibold'>{member.title}</h2>
              <h4 className='text-[12px] py-[4.12px] text-[#788F9B] font-medium leading-3'>{member.designation}</h4>
            </div>
            <div>
              <p className='text-[#0F1629] w-[646px] h-[110px] text-[14px] px-[16px] leading-[22.4px] font-normal'>
                {member.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
