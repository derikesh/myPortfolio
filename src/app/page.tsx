import LandingPage from "./components/Home/LandingPage";


import AboutSection from "./components/Home/AboutSection";
import WorkSection from "./components/Home/Works";
import TechStack from "./components/Home/Technology/TechStack";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my portfolio - showcasing my work as a Full Stack Developer and Designer',
}

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutSection />
      <WorkSection />
      <TechStack/>
    </>
  );
}