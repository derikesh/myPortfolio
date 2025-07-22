import SvgIcon from "../../assets/landingVector/Prison";
import Button from '../Common/Button';

const LandingPage = () => {
  return (
    <div className="home_layout">
      <div className="flex md:flex-row flex-col items-center justify-between min-h-[80vh] gap-12 md:py-0 py-12">
        {/* Left Side - Content */}
        <div className="md:w-1/2 w-full">
          <h1 className="lg:text-[5.4vw] md:text-[7vw] text-[12vw] text-black font-karantina font-bold leading-[1.1] mb-6">
            FRONTEND 
            <br />
            ENGINEER
          </h1>
          <p className="text-gray-600 xl:text-[1.2vw] mb-8 leading-relaxed">
            I create modern, responsive web experiences with cutting-edge technologies. Specialized in React, Next.js, and performance optimization.
          </p>
          <Button>View My Work</Button>
        </div>

        {/* Right Side - Image/Space */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative ml-auto mr-[1vw] md:w-[29vw] w-[70vw] flex items-center justify-center z-0">
            <SvgIcon />
            <div className="absolute h-[110px] w-full bg-black/50 blur-2xl rounded-2xl bottom-0 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
