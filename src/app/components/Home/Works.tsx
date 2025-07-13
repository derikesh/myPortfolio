import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";
import AnimateButton from "./Works/AnimateButton";
import SingleWorkCard from "./Works/SingleWorkCard";

const WorkSection = () => {
  return (
    <div className="relative bg-white">
        <div className="work_content mx-4 py-[4vw] pt-[8vw]" >

        <SectionTitle title="Works"/>

        <p className="md:text-[1.3vw] text-[4.6vw] md:w-[70%] w-[100%] flex flex-col gap-12 text-center items-center font-grotesk text-black mx-auto leading-relaxed my-[10vw] md:my-[3.9vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo fugit. Cum alias odit dolorum sint illum explicabo sit necessitatibus fugiat facilis officia. Doloremque, ducimus.
        </p>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-28 justify-start  works_wrap">
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
           <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl md:overflow-hidden relative aspect-[692/364] h-full '} />
      </div>

      <Button variant="primary" className="my-8 md:mt-0 mt-[18vw]" >
       View all works
        </Button>

        </div>
    </div>
  );
};

export default WorkSection;
