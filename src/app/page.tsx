import LandingPage from "./components/Home/LandingPage";


import AboutSection from "./components/Home/AboutSection";
import WorkSection from "./components/Home/Works";
import TechStack from "./components/Home/Technology/TechStack";

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