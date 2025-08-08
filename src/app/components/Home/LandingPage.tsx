import Button from '../Common/Button';

import LO from '../landingVector/V0'

const LandingPage = () => {
  return (
    <div className="home_layout">
      <div className="flex md:flex-row flex-col items-center justify-between min-h-[80vh] md:gap-12 gap-24 md:py-0 py-12">
        {/* Left Side - Content */}
        <div className="md:w-1/2 w-full">
          <h1 className="lg:text-[5.4vw] md:text-[7vw] text-[12vw] text-black font-karantina font-bold leading-[1.1] mb-6">
            FRONTEND 
            <br />
            DEVELOPER
          </h1>
          <p className="text-gray-600 xl:text-[1.2vw] text-[4.4vw] mb-8 leading-relaxed">
            With years of experience in building web apps, I turn concepts into fully functional systems. I love creating things that lives on the internet.
          </p>
         <a href="mailto:rikeshsherpa1@gmail.com" className="w-fit block" >
           <Button>Contact Me</Button>
         </a>
        </div>

        {/* Right Side - Image/Space */}
        <div className="md:w-1/2 h-fit w-full flex justify-center">
          <div className="relative md:ml-auto mr-[1vw] md:w-[29vw] w-[70vw] flex items-center justify-center z-0">
            <LO/>
            <div className="absolute h-[110px] w-full bg-black/50 blur-2xl rounded-2xl bottom-0 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
