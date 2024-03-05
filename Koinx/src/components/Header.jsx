import React from 'react';
import { Koinx } from '../assets';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    id: 'crypto-taxes',
    link: '/crypto-taxes',
    title: "Crypto Taxes",
  },
  {
    id: 'free-tools',
    link: '/free-tools',
    title: 'Free Tools',
  },
  {
    id: 'resource-center', 
    link: '/resource-center', 
    title: 'Resource Center', 
  },
];

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#fff] px-[60px] flex justify-between items-center">
      <div>
        <img src={Koinx} alt="Koinx Logo" /> {/* Added alt attribute */}
      </div>

      <nav className="hidden md:block h-[80px] md:flex justify-center items-center align-middle">
        <ul className="flex text-[16px] font-semibold">
          {navItems.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins hover:text-primary cursor-pointer text-[14px] ${
                index === navItems.length - 1 ? 'pr-10' : 'pr-10'
              }`}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <button className='bg-[#1B4AEF] px-5 py-2 rounded-lg'>
            <a className='font-semibold text-white text-[16px'>Get Started</a>
        </button>
      </nav>


    </div>
  );
};

export default Header;
