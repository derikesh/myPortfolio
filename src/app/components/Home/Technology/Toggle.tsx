import Image from 'next/image';
import React from 'react'

import ReactImg from '../../../assets/images/dump/React.svg';

import { BsArrowRepeat } from "react-icons/bs";

const ModenFrameWorks = ['React','Node','Mongo','Firebase','Postgrace','Express'];

const CMS_and_tools= ['Wordpress','JWT','Docker','Git','Figma','Postman']

export default function Toggle() {
  return (
    <div className='w-[75vw] mx-auto bg-[#580E7D] rounded-2xl overflow-hidden text-white tech_stack_wraper' >
        <div className='grid grid-cols-8' >

                {/* content left */}
              <div className='col-span-3 content_left  border-[#221824] border-2 relative' >
                    <h3 className='font-karantina text-[4vw] leading-[1.1] w-[60%] h-full flex items-center m-auto' >Modern Frameworks</h3>

                    <div className='absolute top-[35%] left-[88%] z-20 bg-[#221824] p-12 rounded-full' >
                      <BsArrowRepeat size={38} />
                    </div>

                </div>

                {/* content right */}
                <div className='content_right col-span-5' >
                    <div className='grid grid-cols-3 ' >
                      { [1,2,3,4,5,6].map( (item)=>(
                        <div key={item} className=' single_item_stack relative  border-[#221824] border-2' >
                          <div className='absolute inset-0 h-full w-full bg-purple-800/30' ></div>
                          <Image className='m-auto py-12' src={ReactImg}  width={100} alt="alls" />
                        </div>
                      ) ) }
                       
                    </div>
                </div>

        </div>
    </div>
  )
}
