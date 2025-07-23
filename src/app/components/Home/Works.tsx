'use client'

import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";
import SingleWorkCard from "./Works/SingleWorkCard";


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


  return (
    <div className="relative bg-white">
        <div className="work_content mx-4 py-[4vw] pt-[8vw]" >

        <SectionTitle title="Works"/>

        <p className="md:text-[1.3vw] text-[4.6vw] md:w-[70%] w-[100%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
          I'v worked across lots of project from figma design to full responsive applications.
        </p>

        <div className="grid md:grid-cols-1 grid-cols-1 md:gap-14 gap-20 justify-start  works_wrap">
          {
            works.map( (item,index) =>(
              <SingleWorkCard key={index} data={item} customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
            ) )
          }
         
      </div>

      <Button variant="primary" className="my-8 md:mt-[3vw] mt-[18vw]" >
       View all works
        </Button>

        </div>
    </div>
  );
};

export default WorkSection;
