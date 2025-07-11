import SectionTitle from "../Common/SectionTitle";
import SingleWorkCard from "./Works/SingleWorkCard";

const WorkSection = () => {
  return (
    <div className="relative bg-yellow-400">
        <div className="work_content mx-4" >

        <SectionTitle title="Works"/>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo fugit. Cum alias odit dolorum sint illum explicabo sit  necessitatibus fugiat facilis officia. Doloremque, ducimus.
        </p>

      <div className="grid grid-cols-2 gap-4 justify-start  works_wrap">
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl overflow-hidden relative aspect-[692/364] h-full '} />
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl overflow-hidden relative aspect-[692/364] h-full '} />
          <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl overflow-hidden relative aspect-[692/364] h-full '} />
            <SingleWorkCard customeClass={'w-full h-auto  rounded-2xl overflow-hidden relative aspect-[692/364] h-full '} />
      </div>

        </div>
    </div>
  );
};

export default WorkSection;
