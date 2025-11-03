'use client'

import React, { useState } from 'react'
import img from '../../../assets/images/dump/Simba-1-1256x785.webp';
import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';

import WorkTopContent from './WorkTopContent';
import useResponsive from '@/app/hooks/useResponsive';
import { useTechIcons } from '@/app/hooks/useTechIcons';

import { SINGLE_WORK_INTERFACE } from '../Works';
import AnimatedDiv from '../../Common/AnimatedDiv';

interface SINGLE_INTERFACE {
    customeClass:any
    data:SINGLE_WORK_INTERFACE
}

export default function SingleWorkCard({customeClass,data}:SINGLE_INTERFACE) {
  const isResponsive = useResponsive(762); // Check if the device width is <= 640px

  // Use the custom hook for tech icons
  const techIcons = useTechIcons(data.techUsed, "text-slate-900 text-[6vw] md:text-[1.2vw] lg:text-[1.2vw]");

  return (
   <AnimatedDiv>
   
    <div className='single_wrap grid md:grid-cols-2 gap-[1vw]' >

      <div className='content_left_work' >
         <div
            className={`${customeClass} cursor-pointer`}
          >

        <div className='work_image absolute h-full w-full inset-0 top-0 left-0' >
            <Image
            src={`/works/${data.name}.webp`}
            className='rounded-2xl object-cover object-top object-left'
            alt='test_image '
            fill
            />
        </div>


      {/* all visible content */}


    </div>
      </div>

      <div className='content_right_work flex flex-col justify-center md:px-6 px-2 md:py-8 py-4' >
        {/* Title */}
        <h2 className="font-karantina text-black md:text-[2.8vw] text-[10vw] leading-[1.1] mb-4">
          {data.name || 'Gamit'}
        </h2>
        
        {/* Description */}
        <p className="text-black md:text-[1.1vw] text-[4.4vw] mb-6 leading-relaxed">
          {data.description || 'A comprehensive web application built with modern technologies, featuring responsive design and optimal user experience.'}
        </p>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-black md:text-[1.1vw] font-bold text-[4.4vw]">Tech Stack</h3>
            <div className="flex items-center gap-3">
              {techIcons.map((tech, index) => (
                <span key={index}>
                  {tech.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Button Links */}
        <div className="flex gap-4">


          {data.siteLink ? (
            <a
              href={data.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black px-4 py-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 md:text-[0.9vw] text-[4.4vw]"
            >
              <FiLink className="md:text-[1.2vw] text-[3.6vw]" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 text-gray-400 px-4 py-2 bg-gray-50 rounded-lg cursor-not-allowed md:text-[0.9vw] text-[3.6vw] opacity-50"
            >
              <FiLink className="md:text-[1.2vw] text-[3.6vw]" />
              Live Demo
            </button>
          )}


          {data.githubLink ? (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 md:text-[0.9vw] text-[4.4vw]"
            >
              <FiGithub className="md:text-[1.2vw] text-[4.4vw]" />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 text-gray-400 px-4 py-2 bg-gray-50 rounded-lg cursor-not-allowed md:text-[0.9vw] text-[4.4vw] opacity-50"
            >
              <FiGithub className="md:text-[1.2vw] text-[4.4vw]" />
              GitHub
            </button>
          )}
          
          
        </div>
      </div>

    </div>

   </AnimatedDiv>
  )
}