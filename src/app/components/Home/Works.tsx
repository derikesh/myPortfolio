'use client'

import SectionTitle from "../Common/SectionTitle";
import SingleWorkCard from "./Works/SingleWorkCard";
import OtherWorksSlider from "./Works/OtherWorksSlider";
import AnimatedDiv from "../Common/AnimatedDiv";


export interface SINGLE_WORK_INTERFACE {
  name:string,
  techUsed:string[],
  description:string,
  githubLink:(string | null),
  siteLink:(string | null)
}

const WorkSection = () => {


  const works:SINGLE_WORK_INTERFACE[] = [
    { 
      name:'GAMEIT',
      techUsed:['next','postgrace','prisma'],
      description:'Gammit is a skill-based gaming platform with fast, competitive challenges that test reflexes, knowledge, and strategy. Players compete across mini-games, earn points, and climb leaderboards while unlocking rank-based avatars and achievements. Designed for replayability, Gammit offers an engaging and evolving competitive experience with more games coming soon.',
      siteLink:'https://gamit-phi.vercel.app/',
      githubLink:'https://github.com/derikesh/gamit'
    },
    { 
     name:'MyTube',
     techUsed:['next','node','redis','docker','miniIO'],
     description:'engineered the complete back-end for a YouTube-style video platform where users can sign in and upload content. To handle multiple simultaneous uploads, I designed a distributed processing pipeline using Docker. A resilient Redis job queue ensures that every video is reliably transcoded without failure. Finally, all media is kept secure in S3-compatible storage and delivered to the front-end via private, time-sensitive URLs.',
     siteLink:'',
     githubLink:'https://github.com/derikesh/youtube-skeleton-workers'

    },
    { 
     name:'Network Store',
     techUsed:['wordpress','bootstrap'],
     description:'A product showcase website built with WordPress, designed to display various items with clean layouts and easy navigation. Focused on presenting products effectively with customizable sections and a user-friendly browsing experience.',
     siteLink:'https://networkstore.com.np/',
     githubLink:null
    },
  ]

    const works2:SINGLE_WORK_INTERFACE[] = [
      { 
       name:'Prime It',
       techUsed:['taliwind'],
       description:'Took frontend lead for prime it website development , collaborating with design team for smooth and slick interfaces',
       siteLink:'https://www.primeitclub.com/',
       githubLink:null

      },
       { 
     name:'ESTORE',
     techUsed:['react','mongodb','node'],
     description:'Estore is a full-featured e-commerce platform built with a modern web stack, designed for seamless product browsing and user interaction. It includes product listing, detailed product pages, user authentication, and cart management, with a focus on clean UI and smooth performance. The system was structured for scalability, enabling easy integration of future payment gateways and order tracking features.',
     siteLink:'https://estoreweb.vercel.app/',
     githubLink:'https://github.com/derikesh/estore/'

    },
      { 
        name:'Portfolio',
        techUsed:['react','three','gsap','tailwind'],
        description:'Old portfolio made from react three js and gsap for smooth scroll aniamtion throughout the page',
        siteLink:'https://portfolio25-eta.vercel.app/',
        githubLink:null

      },
      { 
       name:'ICT',
       techUsed:['react','chakraUi'],
       description:'Website made with collobration with other team for IT club biggest annual event.',
       siteLink:'https://ictv7.primeitclub.com/',
       githubLink:null

      },
      { 
      name:'Supreme Trade',
      techUsed:['wordpress','bootstrap'],
      description:'First wordpress Project , Created custome fileds and design for there corporate organization covering all information about them',
      siteLink:'https://sat.com.np/',
      githubLink:null

     },
      { 
     name:'Prime Global',
     techUsed:['wordpress'],
     description:'Project for prime school ,Created whole website with wordpress elementor and different plugin for funcationality of project',
     siteLink:'https://primeglobalschool.edu.np/',
     githubLink:null

    },
      { 
     name:'Utkrishta',
     techUsed:['wordpress'],
     description:'Currently handling the maitance and development of web project for Utkrishta.Made from wordpress elementory',
     siteLink:'https://primeinternationalschool.edu.np/',
     githubLink:null

    },

  ]


  return (
    <div className="relative bg-white">
        <div className="work_content mx-4 py-[16vw] md:py-[4vw] " >

        <SectionTitle title="Works"/>

        <p className="md:text-[1.3vw] text-[4.8vw] md:w-[70%] w-[100%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
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
