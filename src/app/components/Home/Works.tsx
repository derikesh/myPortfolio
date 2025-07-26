'use client'

import SectionTitle from "../Common/SectionTitle";
import SingleWorkCard from "./Works/SingleWorkCard";
import OtherWorksSlider from "./Works/OtherWorksSlider";
import AnimatedDiv from "../Common/AnimatedDiv";


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
      description:'Gammit is a skill-based gaming platform with fast, competitive challenges that test reflexes, knowledge, and strategy. Players compete across mini-games, earn points, and climb leaderboards while unlocking rank-based avatars and achievements. Designed for replayability, Gammit offers an engaging and evolving competitive experience with more games coming soon.'
    },
    { 
     name:'Network Store',
     techUsed:['wordpress','bootstrap'],
     description:'A product showcase website built with WordPress, designed to display various items with clean layouts and easy navigation. Focused on presenting products effectively with customizable sections and a user-friendly browsing experience.'
    },
    { 
     name:'ESTORE',
     techUsed:['react','mongodb','node'],
     description:'Estore is a full-featured e-commerce platform built with a modern web stack, designed for seamless product browsing and user interaction. It includes product listing, detailed product pages, user authentication, and cart management, with a focus on clean UI and smooth performance. The system was structured for scalability, enabling easy integration of future payment gateways and order tracking features.'
    },

  ]

    const works2:SINGLE_WORK_INTERFACE[] = [
      { 
       name:'ICT',
       techUsed:['react','chakraUi'],
       description:'Website made on collobration with other team for IT club for its biggest annual event.'
      },
    { 
      name:'Portfolio',
      techUsed:['react','three','gsap','tailwind'],
      description:'Old portfolio made from react three js for 3d model with gsap for smooth scroll aniamtion throughout the page'
    },
    //  { 
    //   name:'Network Store',
    //   techUsed:['wordpress','bootstrap'],
    //   description:'application made from server actions and client side handling from next js application made from server actions and client side handling from next js s and client side handling from next js from server actions anext js'
    //  },
      { 
      name:'Supreme Trade',
      techUsed:['wordpress','bootstrap'],
      description:'First Project as wordpress developer , Created custome fileds and design for there corporate organization covering all information about them'
     },
      { 
     name:'Prime International',
     techUsed:['wordpress'],
     description:'Project for prime school ,Created whole website with wordpress elementor and different plugin for funcationality of project'
    },
      { 
     name:'Utkrishta',
     techUsed:['wordpress'],
     description:'Currently handling the maitance and development of web project for Utkrishta.Made from wordpress elementory'
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
        
        <AnimatedDiv>
          <OtherWorksSlider works={works2} />
        </AnimatedDiv>
      </div>

        </div>
    </div>
  );
};

export default WorkSection;
