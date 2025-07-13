import React from "react";

type SectionTitleProps = {
  title: string;
  color?:string
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title , color }) => {
  return (
    <h2 className={`lg:text-[3vw] text-[10vw] font-karantina font-bold text-center text-${color ? color : 'black'}`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
