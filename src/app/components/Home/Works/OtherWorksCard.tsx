'use client'

import React from 'react'
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

import { SINGLE_WORK_INTERFACE } from '../Works';

interface OTHER_WORKS_INTERFACE {
  data: SINGLE_WORK_INTERFACE
}

export default function OtherWorksCard({ data }: OTHER_WORKS_INTERFACE) {
  
  // Function to get icon component based on tech name
  const getTechIcon = (techName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'next': <SiNextdotjs className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'typescript': <SiTypescript className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'node': <SiNodedotjs className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'mongoDB': <SiMongodb className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'react': <SiReact className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'firebase': <SiFirebase className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'wordpress': <SiWordpress className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'postgrace': <SiPostgresql className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'prisma': <SiPrisma className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'gsap': <SiGreensock className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'threejs': <SiThreedotjs className="text-gray-600 md:text-[0.8vw] text-[3vw]" />,
      'bootstrap': <SiBootstrap className="text-gray-600 md:text-[0.8vw] text-[3vw]" />
    };
    return iconMap[techName] || null;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative md:h-[12vw] h-[40vw] w-full">
        <Image
          src={`/works/${data.name}.webp`}
          className="object-cover object-top"
          alt={data.name}
          fill
        />
      </div>
      
      {/* Content Section */}
      <div className="md:p-[1.2vw] p-[4vw]">
        {/* Title */}
        <h3 className="font-karantina text-black md:text-[1.8vw] text-[5vw] leading-tight md:mb-[0.5vw] mb-[2vw]">
          {data.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 md:text-[0.9vw] text-[3.5vw] leading-relaxed md:mb-[1vw] mb-[4vw] line-clamp-5">
          {data.description}
        </p>
        
        {/* Tech Stack */}
        <div className="md:mb-[1vw] mb-[4vw]">
          <div className="flex items-center md:gap-[0.5vw] gap-[2vw] md:mb-[0.5vw] mb-[2vw]">
            <span className="text-gray-800 font-semibold md:text-[0.8vw] text-[3vw]">Tech:</span>
            <div className="flex items-center md:gap-[0.3vw] gap-[1vw]">
              {data.techUsed.map((tech, index) => (
                <span key={index}>
                  {getTechIcon(tech)}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex md:gap-[0.5vw] gap-[2vw]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 text-gray-700 border border-gray-300 md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg hover:bg-gray-50 transition-colors duration-200 md:text-[0.8vw] text-[3vw]"
          >
            <FiGithub className="md:text-[0.8vw] text-[3vw]" />
            Code
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 bg-black text-white md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg hover:bg-gray-800 transition-colors duration-200 md:text-[0.8vw] text-[3vw]"
          >
            <FiLink className="md:text-[0.8vw] text-[3vw]" />
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}
