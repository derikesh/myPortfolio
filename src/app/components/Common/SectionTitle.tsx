'use client'

import React from "react";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  color?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color }) => {
  const characters = title.split(""); // Split the title into individual characters

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className={`lg:text-[3vw] text-[10vw] font-karantina font-bold text-center text-${
        color ? color : "black"
      }`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char} {/* Replace spaces with non-breaking spaces */}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;
