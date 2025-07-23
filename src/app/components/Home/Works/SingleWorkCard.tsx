'use client'

import React, { useState } from 'react'
import img from '../../../assets/images/dump/Simba-1-1256x785.webp';
import Image from 'next/image';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiReact, 
  SiFirebase, 
  SiWordpress, 
  SiPostgresql,
  SiPrisma,
  SiGreensock,
  SiThreedotjs,
  SiBootstrap
} from 'react-icons/si';
import { FiGithub, FiLink } from 'react-icons/fi';

import WorkTopContent from './WorkTopContent';
import useResponsive from '@/app/hooks/useResponsive';

import { SINGLE_WORK_INTERFACE } from '../Works';
import AnimatedDiv from '../../Common/AnimatedDiv';

interface SINGLE_INTERFACE {
    customeClass:any
    data:SINGLE_WORK_INTERFACE
}

export default function SingleWorkCard({customeClass,data}:SINGLE_INTERFACE) {
  const isResponsive = useResponsive(762); // Check if the device width is <= 640px

  // Function to get icon component based on tech name
  const getTechIcon = (techName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'next': <SiNextdotjs className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'typescript': <SiTypescript className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'node': <SiNodedotjs className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'mongoDB': <SiMongodb className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'react': <SiReact className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'firebase': <SiFirebase className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'wordpress': <SiWordpress className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'postgrace': <SiPostgresql className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'prisma': <SiPrisma className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'gsap': <SiGreensock className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'threejs': <SiThreedotjs className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />,
      'bootstrap': <SiBootstrap className="text-slate-900 text-[4vw] md:text-[1.2vw] lg:text-1.2vw]" />
    };
    return iconMap[techName] || null;
  };

  return (
   <AnimatedDiv>
   
    <div className='single_wrap grid md:grid-cols-2 gap-5' >

      <div className='content_left_work' >
         <div
            className={`${customeClass} cursor-pointer`}
          >

        <div className='work_image absolute h-full w-full inset-0 top-0 left-0' >
            <Image
            src={`/works/${data.name}.webp`}
            className='rounded-2xl object-cover object-top'
            alt='test_image '
            fill
            />
        </div>


      {/* all visible content */}


    </div>
      </div>

      <div className='content_right_work flex flex-col justify-center md:px-6 px-2 md:py-8 py-4' >
        {/* Title */}
        <h2 className="font-karantina text-black md:text-[2.8vw] text-[7vw] leading-[1.1] mb-4">
          {data.name || 'Gamit'}
        </h2>
        
        {/* Description */}
        <p className="text-black md:text-[1.1vw] text-[3.6vw] mb-6 leading-relaxed">
          {data.description || 'A comprehensive web application built with modern technologies, featuring responsive design and optimal user experience.'}
        </p>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-black md:text-[1.1vw] font-bold text-[3.6vw]">Tech Stack</h3>
            <div className="flex items-center gap-3">
              {data.techUsed.map((tech, index) => (
                <span key={index}>
                  {getTechIcon(tech)}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Button Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 md:text-[0.9vw] text-[3.6vw]"
          >
            <FiGithub className="md:text-[1.2vw] text-[3.6vw]" />
            GitHub
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent black text-black px-4 py-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 md:text-[0.9vw] text-[3.6vw]"
          >
            <FiLink className="md:text-[1.2vw] text-[3.6vw]" />
            Live Demo
          </a>
        </div>
      </div>

    </div>

   </AnimatedDiv>
  )
}