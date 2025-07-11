'use client'

import React, { useState } from 'react'

import img from '../../../assets/images/dump/Simba-1-1256x785.webp';
import Image from 'next/image';

interface SINGLE_INTERFACE {
    customeClass:any
}

export default function SingleWorkCard({customeClass}:SINGLE_INTERFACE) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${customeClass}`}
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

        <div
        className={`first_content h-[100%] ${isHovered ? 'bg-purple-700/35' : ''} relative transition-transform duration-300 ease-in-out ${
          isHovered ? '-translate-y-16' : ''
        }`}
        >
            <div className="absolute bottom-8 w-full">
            <div className="flex flex-row px-4 justify-between relative ">
            <div className="bg-white text-black">SS</div>
            <div className="bg-white text-black">SS</div>
            </div>
            </div>
        </div>

      <div
        className={`absolute top-0 h-[100%] flex justify-end items-end z-10 w-full transition-transform duration-300 ease-in-out ${
          isHovered ? '-translate-y-0' : 'translate-y-28'
        }`}
      >
        <p className="relative w-full text-center h-fit py-4 text-[1.2vw] text-black bg-yellow-400 ">Two velodromes, one seamless execution</p>
      </div>

    </div>
  )
}
