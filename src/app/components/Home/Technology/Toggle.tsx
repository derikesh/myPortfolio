'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { throttle } from '@/app/assets/landingVector/LandingVector';

import ReactImg from '../../../assets/images/dump/React.svg';

import { BsArrowRepeat } from "react-icons/bs";

const ModenFrameWorks = ['react', 'node', 'mongoDB', 'firebase', 'postgrace', 'typescript'];

const CMS_and_tools = ['wordpress', 'JWT', 'docker', 'git', 'figma', 'postman'];

export default function Toggle() {
  
  const [activeTech, _setActiveTech] = useState<string[]>([...ModenFrameWorks , ...CMS_and_tools]);
  const [activeIndex, setActiveIndex] = useState<{start:number,end:number}>({start:0,end:6});
  const [leftContent, setLeftContent] = useState<{ heading: string; paragraph: string }>(
    { heading: 'Modern Frameworks', paragraph: 'Using Next Js for quick full stack application, Node for flexibilty and different sql and no sql database along with different frameworks' }
  );


  function changeIcons() {
    setActiveIndex((prev) => ({
      start: prev.end === 6 ? prev.end : 0,
      end: prev.start === 0 ? 12 : prev.start,
    }));

    setLeftContent((prev) => {
      return prev.heading === 'Modern Frameworks'
        ? { heading: 'CMS and Tools', paragraph: 'Tools enabling quick prototypes , allowing additinal features , quick CMS and ability to shift whole application' }
        : { heading: 'Modern Frameworks', paragraph: 'Using Next Js for quick full stack application, Node for flexibilty and different sql and no sql database along with different frameworks' };
    });
  }


  return (
    <div className='lg:w-[85vw] md:w-[95vw] sm:w-[90vw] w-[100%] mx-auto  md:rounded-[1vw] rounded-xl overflow-hidden text-white tech_stack_wraper'>
      <div className='w-full flex md:flex-row flex-col'>

        {/* content left */}
        <div className='md:w-[40%] bg-gradient-to-r shadow-2xl from-teal-900 via-gray-800 to-slate-900 content_left border-[#d5fffb] border-[0.1vw] relative flex flex-col items-start justify-center px-[2.6vw] md:py-0 py-[10vw]'>
          <div
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out flex flex-col items-start justify-center ${
              leftContent.heading === 'Modern Frameworks' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className='font-karantina md:text-[4vw] text-[8vw] leading-[1.1]'>{leftContent.heading}</h3>
            <p className='lg:text-[1vw] md:text-[1.5vw] text-[3vw] mt-[1vw] md:w-[22vw]'>{leftContent.paragraph}</p>
          </div>

          <div
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out flex flex-col items-start justify-center ${
              leftContent.heading === 'CMS and Tools' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className='font-karantina md:text-[4vw] text-[8vw] leading-[1.1]'>{leftContent.heading}</h3>
            <p className='lg:text-[1vw] md:text-[1.5vw] text-[3vw] mt-[1vw] md:w-[22vw]'>{leftContent.paragraph}</p>
          </div>

          {/* trigger change icons and content */}
          <div
            onClick={changeIcons}
            className='absolute md:top-[50%] md:left-[100%] left-[50%] top-[100%] transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2 z-30 bg-[#d5fffb] md:p-[2vw] p-[3vw] rounded-full hover:scale-[1.2]'
          >
            <BsArrowRepeat fill='black' className='md:w-[1.8vw] md:h-[1.8vw] h-[4vw] w-[4vw]' />
          </div>

        </div>

        {/* content right */}
        <div className='content_right md:w-[60%] relative'>
          <div className='grid md:grid-cols-3 grid-cols-2 h-full'>
            {activeTech?.map((item,index) => {

                console.log('inside loop',index)

              return (
                 <div
               key={item}
               style={{ transitionDelay: `${(index - activeIndex.start) * 100}ms` }}
               className={`stack-item ${index >= activeIndex.start && index < activeIndex.end  ? 'relative translate-y-0 opacity-100' : 'invisible absolute top-0 left-0 opacity-0'} transition-transform duration-500 ease-linear single_item_stack  border-[#d5fffb] border-[0.1vw] bg-slate-800 overflow-hidden`}>

                <div
                style={{ transitionDelay: `${(index - activeIndex.start) * 50}ms` }}
                className={`origin-top ${index >= activeIndex.start && index < activeIndex.end  ? 'scale-y-100 translate-y-0 opacity-100' : 'scale-y-0 -translate-y-10 opacity-0'} relative transition-transform duration-300 ease-in-out bg-slate-900` } >
                  <img className='tech_iconn relative m-auto md:py-[5vw] lg:py-[3.6vw] py-[9vw] opacity-60 w-[18vw] sm:w-[12vw] md:w-[9vw] lg:w-[6vw] md:h-[18vw] sm:h-[28vw] h-[32vw] lg:h-[12vw] object-contain' src={`/techs/${item}.svg`} alt="alls" />
                <div className='absolute lg:left-[42%] md:left-[38%] left-[40%] lg:top-[75%] top-[80%] lg:text-[1vw] md:text-[1.8vw] text-[3vw] opacity-70' >{item}</div>
                </div>

              </div>
              )

            })}
          </div>
        </div>

      </div>
    </div>
  );
}
