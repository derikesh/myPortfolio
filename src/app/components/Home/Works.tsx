'use client'

import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";
import SingleWorkCard from "./Works/SingleWorkCard";
import OtherWorksSlider from "./Works/OtherWorksSlider";


export interface SINGLE_WORK_INTERFACE {
  name:string,
  techUsed:string[],
  description:string
}

const WorkSection = () => {


  const works:SINGLE_WORK_INTERFACE[] = [
    { 
      name:'GAMEIT',
      techUsed:['next','postgrace','prisma'],
      description:'js Application made from server actions and client side handling from next js from server actions and client side handling  from server actions and client side from next js'
    },
    { 
     name:'ESTORE',
     techUsed:['react','gsap','threejs'],
     description:'application made from server actions and client side handling from next js application made from server actions and client side handlingtions and client side handling from next js from server actions and client side handling from next js'
    },
     { 
      name:'Network Store',
      techUsed:['wordpress','bootstrap'],
      description:'application made from server actions and client side handling from next js application made from server actions and client side handling from next js s and client side handling from next js from server actions anext js'
     },

  ]

    const works2:SINGLE_WORK_INTERFACE[] = [
    { 
      name:'GAMEIT',
      techUsed:['next','postgrace','prisma'],
      description:'js Application made from server actions and client side handling from next js from server actions and client side handling  from server actions and client side from next js'
    },
    { 
     name:'ESTORE',
     techUsed:['react','gsap','threejs'],
     description:'application made from server actions and client side handling from next js application made from server actions and client side handlingtions and client side handling from next js from server actions and client side handling from next js'
    },
     { 
      name:'Network Store',
      techUsed:['wordpress','bootstrap'],
      description:'application made from server actions and client side handling from next js application made from server actions and client side handling from next js s and client side handling from next js from server actions anext js'
     },
      { 
      name:'3D',
      techUsed:['wordpress','bootstrap'],
      description:'application made from server actions and client side handling from next js application made from server actions and client side handling from next js s and client side handling from next js from server actions anext js'
     },
      { 
     name:'ESTORE',
     techUsed:['react','gsap','threejs'],
     description:'application made from server actions and client side handling from next js application made from server actions and client side handlingtions and client side handling from next js from server actions and client side handling from next js'
    },

  ]


  return (
    <div className="relative bg-white">
        <div className="work_content mx-4 py-[4vw] pt-[8vw]" >

        <SectionTitle title="Works"/>

        <p className="md:text-[1.3vw] text-[4.6vw] md:w-[70%] w-[100%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
          I'v worked across lots of project from figma design to full responsive applications.
        </p>

        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-[4vw] gap-20 justify-start  works_wrap">
          {
            works.map( (item,index) =>(
              <SingleWorkCard key={index} data={item} customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
            ) )
          }
      </div>

      {/* Other Works Section */}
      <div className="mt-[8vw] md:mt-[8vw]">
        <h2 className="font-karantina text-black text-[6vw] md:text-[3vw] lg:text-[2.5vw] text-center mb-[6vw] md:mb-[3vw]">
          Other Works
        </h2>
        
        <OtherWorksSlider works={works2} />
      </div>

        </div>
    </div>
  );
};

export default WorkSection;
