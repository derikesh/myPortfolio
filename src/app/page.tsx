import Image from "next/image";

import LandingVector from "./assets/landingVector/LandingVector";

export default function Home() {
  return (
    <div className="home_layout">
      <div className="flex md:flex-row flex-col items-center justify-between min-h-[80vh] gap-12">
        
        {/* Left Side - Content */}
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-[7vw] text-[12vw]  text-black font-semibold font-clash leading-[1] mb-6">
            FRONTEND 
            <br />
            ENGINEER
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
            I create modern, responsive web experiences with cutting-edge technologies.Specialized in React, Next.js, and performance optimization to
          </p>
          
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
            View My Work
          </button>
        </div>

        {/* Right Side - Image/Space */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-[450px] flex items-center justify-center">
           <LandingVector/>
          </div>
        </div>

      </div>



     <div className="bg-white h-screen" ></div>
     <div className="bg-yellow-400 h-screen" ></div>

    </div>
  );
}