'use client'

import React, { useState } from 'react'
import img from '../../../assets/images/dump/Simba-1-1256x785.webp';
import Image from 'next/image';

import WorkTopContent from './WorkTopContent';
import useResponsive from '@/app/hooks/useResponsive';

interface SINGLE_INTERFACE {
    customeClass:any
}

export default function SingleWorkCard({customeClass}:SINGLE_INTERFACE) {
  const [isHovered, setIsHovered] = useState(false);
  const isResponsive = useResponsive(762); // Check if the device width is <= 640px

  return (
    <div
      className={`${customeClass} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

        <div className='work_image absolute h-full w-full inset-0 top-0 left-0' >
            <Image
            src={img}
            className='rounded-2xl'
            alt='test_image '
            fill
            />
        </div>

          {/* hidden heading */}
         {
          !isResponsive && (
             <div className={`absolute inset-32 flex items-center z-30 justify-center transition-opacity duration-300 ${ (isHovered || isResponsive) ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-white md:text-[3vw] text-[5vw] font-bold">GAMEIT</h2>
         </div>
          )
         }


      {/* all visible content */}
       <WorkTopContent isHovered={isHovered || isResponsive} /> 

      <div
        className={`absolute top-0 h-[100%] flex flex-col justify-end items-end z-10 w-full transition-transform duration-300 ease-in-out delay-75 ${
          (isHovered || isResponsive) ? 'md:translate-y-0 translate-y-12 ' : 'translate-y-28 '
        }`}
      >
        <h2 className="md:hidden block text-black md:text-[3vw] text-[5.6vw] bg-white pt-4 w-full text-center font-bold">Gamit</h2>
        <p className="relative w-full text-center h-[20%] py-4  md:text-[1vw] text-[3.6vw] text-black bg-white ">Gammit is an application with 2 games implemented with  real time scoring system .unlocking avatar getting top ranked on any games </p>
      </div>

    </div>
  )
}
