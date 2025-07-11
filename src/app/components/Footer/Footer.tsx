import React from 'react';
import SvgIcon from '../../assets/logo/Logo'; // Corrected the import path to SvgIcon

import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer_wrap bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Logo Section */}
            <div className="logo z-10 sm:w-[120px] w-[50px]">
            <SvgIcon clicked={ true } />
          </div>

        {/* Text Content Section */}
        <div className='text_content flex flex-col gap-6 pl-12 ml-auto'>
          <div>
            <h3 className='font-bold text-lg'>Address</h3>
            <p className='text-sm'>Jytha, Kathmandu</p>
          </div>
          <div>
            <h3 className='font-bold text-lg'>Contact</h3>
            <p className='text-sm'>Email: demo@example.com</p>
            <p className='text-sm'>Phone: +123 456 7890</p>
          </div>

        </div>

        {/* Social Handles Section */}
      

      </div>


      <div className='flex w-full justify-between items-center pt-[4vw] footer_last home_layout' >
     
        
                <button className='text-white text-[8vw]' >
                    LET'S TALK
                </button>
                 <FaSquareArrowUpRight className='text-[8vw]' />   
        </div>

    </div>
  );
}
