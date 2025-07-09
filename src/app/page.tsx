import LandingVector from "./assets/landingVector/LandingVector";
import SvgIcon from "./assets/landingVector/Prison";

import image from "./assets/images/Vector 26(1).svg";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <div className="home_layout">
      <div className="flex md:flex-row flex-col items-center justify-between min-h-[80vh] gap-12">
        
        {/* Left Side - Content */}
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-[5vw] text-[12vw] text-black font-clash font-bold  tracking-tight leading-[1.1] mb-6">
            FRONTEND 
            <br />
            ENGINEER
          </h1>
          
          <p className="text-gray-600 xl:text-[1vw] mb-8 max-w-md leading-relaxed">
            I create modern, responsive web experiences with cutting-edge technologies.Specialized in React, Next.js, and performance optimization to
          </p>
          
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
            View My Work
          </button>
        </div>

        {/* Right Side - Image/Space */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-[31vw] flex items-center justify-center z-0">
           <SvgIcon/>
           <div className="absolute h-[110px] w-full bg-black/50 blur-2xl rounded-2xl bottom-0 -z-10" ></div>
          </div>
        </div>

      </div>


    </div>

    
      <div>
        <Image
        className="relative bottom-8"
          src={image}
          width={1940}
          height={100}
          alt='image'
        />
      </div>

     <div className="bg-white h-screen" ></div>
     <div className="bg-yellow-400 h-screen" ></div>
</>
  );
}