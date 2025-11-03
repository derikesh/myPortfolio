import React from 'react';
import SvgIcon from '../../assets/logo/Logo'; // Corrected the import path to SvgIcon

import { FaSquareArrowUpRight, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer_wrap bg-gray-900 text-white py-12 overflow-hidden'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Logo Section */}
        <div className="">
          <span className='text-[6.8vw] md:text-[2.5vw] font-clash tracking-tighter font-light' >RIKESH</span>
        </div>

        {/* Text Content Section */}
        <div className='text_content flex flex-col gap-6 md:pl-[12vw]'>
          <div>
            <h3 className='font-bold text-[3.8vw] lg:text-[1vw] md:text-[1.8vw]'>Address</h3>
            <p className='text-[3vw] lg:text-[0.9vw] md:text-[1vw] font-thin'>Jytha, Kathmandu</p>
          </div>
          <div>
            <h3 className='font-bold text-[3.8vw] lg:text-[1vw] md:text-[1.8vw]'>Contact</h3>
            <p className='text-[3vw] lg:text-[0.9vw] md:text-[1vw] font-thin'>Email: rikeshsherpa1@gmail.com</p>
          </div>
          <div>
            <h3 className='font-bold text-[3.8vw] lg:text-[1vw] md:text-[1.8vw]'>Social</h3>
            <div className='flex gap-[3vw] md:gap-[0.9vw] mt-2'>
              <a href='https://www.linkedin.com/in/rikesh-sherpa-4278a3223/' target='_blank' rel='noopener noreferrer' className='text-lg font-thin'>
                <i className='text-[4vw] lg:text-[1.6vw] md:text-[1.8vw]'><FaLinkedin /></i>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full justify-between items-center md:pt-[10vw] pt-[20vw] footer_last home_layout transition-transform duration-300 group'>
        <a href="mailto:rikeshsherpa1@gmail.com" className="w-fit block">
          <div className='flex flex-col items-start'>
            <p className='text-[3vw] lg:text-[1vw] md:text-[1.8vw] font-thin'>Got A Project In Mind?</p>
            <div className='text-[12vw] md:text-[8vw] group-hover:text-purple-500 group-hover:scale-105 transition-transform duration-300'>
              LET'S TALK
            </div>
          </div>
        </a>
        <FaSquareArrowUpRight className='text-[12vw] md:text-[8vw] group-hover:text-purple-500 group-hover:scale-105 transition-transform duration-300' />
      </div>

    </div>
  );
}
