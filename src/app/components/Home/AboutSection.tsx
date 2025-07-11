import Image from "next/image";
import image from "../../assets/images/bg_sep.svg";
import SectionTitle from "../Common/SectionTitle";

const AboutSection = () => {
  return (
    <div className="relative bottom-12">

    <div className="absolute h-1/2 -bottom-16 bg-[#3a3a3a] w-full" >

    </div>

      {/* Background Image */}
      <div className="relative inset-0 w-full z-0 top-2">
        <Image
          src={image}
          alt="Section Break"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="home_layout bg-[#252525] mx-auto px-6 py-32 relative z-10">
        <SectionTitle  color="white" title="ABOUT ME"   />
       <div className="about_me md:text-[2vw] text-[4.6vw] flex flex-col gap-[6vw] md:gap-[2vw] text-center items-center font-grotesk text-white mx-auto leading-relaxed my-[16vw] md:my-[3.5vw]" >
           <p>
          My name is Rikesh. I’m a frontend software developer with roots in
          system thinking and user interaction. I’m passionate about music,
          technology, and everything that involves <span className="bg-purple-600 px-2 font-bold" >creating out of nothing</span></p>

          <p>
          Everything I know is self-taught, which at this point has allowed me
          to learn and adapt to any new technology or idea. I started my journey
          from making illustrations to progressively building full-stack
          applications. My hunger doesn’t end here 
          </p>

          <p>I still plan to excel in 
          technology that contributes to and adds value in both my workspace and
          self-learning journey
        </p>
       </div>
       <div className="flex flex-col sm:flex-row gap-[1.5vw] justify-center">
          <button className="bg-white text-black px-[2vw] py-[1vw] rounded-full font-medium hover:bg-gray-100 transition-colors">
            Learn More
          </button>
          <button className="border border-white text-white px-[2vw] py-[1vw] rounded-full font-medium hover:bg-white hover:text-black transition-colors">
            Contact Me
          </button>
       </div>
      </div>
    </div>
  );
};

export default AboutSection;
