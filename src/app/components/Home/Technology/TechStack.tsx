import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

import Toggle from './Toggle';


export default function TechStack() {
  return (
    <div className='bg-[#221824] h-auto px-6 pb-[4vw] pt-[8vw]'>
      <SectionTitle color="white" title="TECH STACK" />
      <p className="md:text-[1.3vw] text-[3vw] md:w-[70%] w-[90%] flex flex-col gap-12 text-center items-center font-grotesk text-white mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
       Using the Right tool for right product and action is too important for me , it makes things go just right
      </p>
      <div className='toogle_wrap'>
       <Toggle/>
      </div>
    </div>
  );
}
