'use client'

import Image from "next/image";
import image from "../../assets/images/bg_sep.svg";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";
import AnimatedDiv from "../Common/AnimatedDiv";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative md:bottom-12">

      {/* Background Image */}
      <div className="relative inset-0 z-0 top-2">
        <Image
          src={image}
          alt="Section Break"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="home_layout bg-gray-900 mx-auto px-6 md:py-32 py-20 relative z-10">
        <SectionTitle color="white" title="ABOUT ME" />
        <div className="about_me md:text-[2vw] text-[4.8vw] flex flex-col gap-[6vw] md:gap-[2vw] sm:text-center items-center font-grotesk text-white/90 mx-auto leading-relaxed my-[10vw] md:my-[3.5vw] ">
          {/* Background Decorative Circles */}
          <div className="absolute top-20 right-0 w-[30vw] h-[30vw] bg-purple-600/30 blur-3xl rounded-full opacity-30 -z-10"></div>
          <div className="absolute bottom-20 left-0 w-[25vw] h-[25vw] bg-teal-500/30 blur-3xl rounded-full opacity-30 -z-10"></div>

          <AnimatedDiv>
            <p className="font-light" >
              My name is Rikesh. I’m a frontend <span className="bg-purple-600/20 px-1">software developer</span> with roots in
              system thinking and user interaction. I’m passionate about music,
              technology, and everything that involves creating out of nothing
                <br></br>
              Everything I know is <span className="bg-purple-600/20 px-1">self-taught</span>, which at this point has allowed me
              to learn and adapt to any new technology or idea. I started my journey
              from making illustrations to progressively building <span className="bg-purple-600/20 px-1">full-stack</span>
              applications. My curiocity doesn’t end here

              I still plan to excel in
              technology that contributes to and adds value in both my workspace and
              self-learning journey
            </p>
          </AnimatedDiv>
        </div>
        <center>
         <Link href="/about" className="w-fit block" >
           <Button variant="secondary" >Lean More</Button>
         </Link>
        </center>
      </div>
    </div>
  );
};

export default AboutSection;
