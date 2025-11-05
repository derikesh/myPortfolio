import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

import Toggle from './Toggle';
import AnimatedDiv from '../../Common/AnimatedDiv';


export default function TechStack() {
  return (
    <div className='bg-[#e4fdfb] h-auto md:px-6 px-4 py-[22vw] md:py-[8vw]'>
      <SectionTitle color="black" title="THINGS I PLAY WITH" />
      <p className="md:text-[1.3vw] text-[4.6vw] md:w-[70%] w-[90%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
       Using the Right tools is important for me , it makes building better and faster  
      </p>
      <AnimatedDiv>
       <Toggle/>
      </AnimatedDiv>
    </div>
  );
}
