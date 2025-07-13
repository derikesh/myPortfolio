import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

import Toggle from './Toggle';


export default function TechStack() {
  return (
    <div className='bg-[#e4fdfb] h-auto md:px-6 px-4 py-[8vw]'>
      <SectionTitle color="black" title="TECH STACK" />
      <p className="md:text-[1.3vw] text-[4.6vw] md:w-[70%] w-[90%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
       Using the Right tool for right product and action is too important for me , it makes things go just right
      </p>
      <div className='toogle_wrap'>
       <Toggle/>
      </div>
    </div>
  );
}
