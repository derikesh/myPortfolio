'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { throttle } from '@/app/assets/landingVector/LandingVector';

import ReactImg from '../../../assets/images/dump/React.svg';

import { BsArrowRepeat } from "react-icons/bs";

const ModenFrameWorks = ['React', 'Node', 'Mongo', 'Firebase', 'Postgrace', 'Express'];

const CMS_and_tools = ['Wordpress', 'JWT', 'Docker', 'Git', 'Figma', 'Postman'];

export default function Toggle() {
  
  const [activeTech, _setActiveTech] = useState<string[]>([...ModenFrameWorks , ...CMS_and_tools]);
  const [activeIndex, setActiveIndex] = useState<{start:number,end:number}>({start:0,end:6});


  function changeIcons(){
      setActiveIndex( (prev)=>({start:prev.end === 6 ? prev.end : 0 ,end:prev.start == 0 ? 12 : prev.start}) ) , 9000 
  }


  return (
    <div className='lg:w-[85vw] md:w-[95vw] sm:w-[90vw] w-[100%] mx-auto  md:rounded-[1vw] rounded-xl overflow-hidden text-white tech_stack_wraper'>
      <div className='w-full flex md:flex-row flex-col'>

        {/* content left */}
        <div className='md:w-[40%] bg-gradient-to-r shadow-2xl from-teal-900 via-gray-800 to-slate-900 content_left border-[#d5fffb] border-[0.1vw] relative flex flex-col items-start justify-center px-[2.6vw] md:py-0 py-[10vw]'>
          <h3 className='font-karantina md:text-[4vw] text-[8vw] leading-[1.1] '>Modern Frameworks</h3>
          <p className=' lg:text-[1vw] md:text-[1.5vw] text-[3vw] mt-[1vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui numquam velit. Alias explicabo, exercitationem ducimus non</p>
         

         {/* trigger change icons and conntent */}
          <div onClick={ changeIcons } className='absolute md:top-[50%] md:left-[100%] left-[50%] top-[100%] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#d5fffb] md:p-[2vw] p-[3vw] rounded-full'>
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
                className={`origin-top ${index >= activeIndex.start && index < activeIndex.end  ? 'scale-y-100 translate-y-0 opacity-100' : 'scale-y-0 -translate-y-10 opacity-0'} transition-transform duration-300 ease-in-out bg-slate-900` } >
                  <Image className='tech_iconn relative m-auto md:py-[5vw] lg:py-[3.6vw] py-[9vw] opacity-60 w-[18vw] sm:w-[12vw] md:w-[9vw] lg:w-[6vw]' src={ReactImg} alt="alls" />
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
