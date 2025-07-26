'use client'

import React from 'react'
import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';
import { useTechIcons } from '@/app/hooks/useTechIcons';

import { SINGLE_WORK_INTERFACE } from '../Works';

interface OTHER_WORKS_INTERFACE {
  data: SINGLE_WORK_INTERFACE
}

export default function OtherWorksCard({ data }: OTHER_WORKS_INTERFACE) {
  
  // Use the custom hook for tech icons
  const techIcons = useTechIcons(data.techUsed, "text-gray-600 md:text-[0.8vw] text-[4.8vw]");

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
        <h3 className="font-karantina text-black md:text-[1.8vw] text-[7vw] leading-tight md:mb-[0.5vw] mb-[2vw]">
          {data.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 md:text-[0.9vw] text-[4.4vw] leading-relaxed md:mb-[1vw] mb-[4vw] line-clamp-5">
          {data.description}
        </p>
        
        {/* Tech Stack */}
        <div className="md:mb-[1vw] mb-[4vw]">
          <div className="flex items-center md:gap-[0.5vw] gap-[2vw] md:mb-[0.5vw] mb-[2vw]">
            <span className="text-gray-800 font-semibold md:text-[0.8vw] text-[4.5vw]">Tech:</span>
            <div className="flex items-center md:gap-[0.3vw] gap-[1vw]">
              {techIcons.map((tech, index) => (
                <span key={index}>
                  {tech.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex md:gap-[0.5vw] gap-[2vw]">
          
                {data.siteLink ? (
            <a
              href={data.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 bg-black text-white md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg hover:bg-gray-800 transition-colors duration-200 md:text-[0.8vw] text-[3vw]"
            >
              <FiLink className="md:text-[0.8vw] text-[3vw]" />
              Demo
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 bg-gray-200 text-gray-400 md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg cursor-not-allowed md:text-[0.8vw] text-[3vw] opacity-50"
            >
              <FiLink className="md:text-[0.8vw] text-[3vw]" />
              Demo
            </button>
          )}
          
          
          {data.githubLink ? (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 text-gray-700 border border-gray-300 md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg hover:bg-gray-50 transition-colors duration-200 md:text-[0.8vw] text-[3vw]"
            >
              <FiGithub className="md:text-[0.8vw] text-[3vw]" />
              Code
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center md:gap-[0.3vw] gap-[1vw] flex-1 text-gray-400 border border-gray-200 md:py-[0.5vw] md:px-[0.8vw] py-[2vw] px-[3vw] rounded-lg cursor-not-allowed md:text-[0.8vw] text-[3vw] opacity-50 bg-gray-50"
            >
              <FiGithub className="md:text-[0.8vw] text-[3vw]" />
              Code
            </button>
          )}
          
        
        </div>
      </div>
    </div>
  )
}
