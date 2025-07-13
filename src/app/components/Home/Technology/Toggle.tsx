import Image from 'next/image';
import React from 'react';

import ReactImg from '../../../assets/images/dump/React.svg';

import { BsArrowRepeat } from "react-icons/bs";

const ModenFrameWorks = ['React', 'Node', 'Mongo', 'Firebase', 'Postgrace', 'Express'];

const CMS_and_tools = ['Wordpress', 'JWT', 'Docker', 'Git', 'Figma', 'Postman'];

export default function Toggle() {
  return (
    <div className='md:w-[80vw] sm:w-[90vw] w-[100%] mx-auto bg-gradient-to-r shadow-2xl from-teal-900 via-gray-800 to-black md:rounded-[1.4vw] rounded-xl overflow-hidden text-white tech_stack_wraper'>
      <div className='w-full flex md:flex-row flex-col'>

        {/* content left */}
        <div className='md:w-[40%] content_left border-[#d5fffb] border-[0.1vw] relative'>
          <h3 className='font-karantina md:text-[4vw] text-[12vw] leading-[1.1] md:w-[60%] w-fit mx-auto sm:h-[26vw] h-[40vw] md:h-full flex items-center'>Modern Frameworks</h3>

          <div className='absolute md:top-[35%] md:left-[92%] left-[45%] top-[85%] z-20 bg-[#d5fffb] md:p-[2vw] p-[3vw] rounded-full'>
            <BsArrowRepeat fill='black' className='md:w-[1.8vw] md:h-[1.8vw] h-[4vw] w-[4vw]' />
          </div>
        </div>

        {/* content right */}
        <div className='content_right md:w-[60%]'>
          <div className='grid md:grid-cols-3 grid-cols-2 h-full'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className='single_item_stack relative border-[#d5fffb] border-[0.1vw]'>
                <Image className='tech_iconn relative m-auto md:py-[3vw] py-[5vw] opacity-70 w-[18vw] sm:w-[12vw] md:w-[6vw]' src={ReactImg} alt="alls" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
