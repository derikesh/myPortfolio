import React, { memo } from 'react';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FiPlus, FiGithub, FiLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface WorkTopContentProps {
  isHovered: boolean;
}

const WorkTopContent: React.FC<WorkTopContentProps> = ({ isHovered }) => {
  return (
    <div
      className={`first_content h-[100%] ${isHovered ? 'md:bg-black/50' : ''} relative transition-transform duration-300 ease-in-out z-20 ${
        isHovered ? '-translate-y-[15%]' : ''
      }`}
    >
      <div className="absolute bottom-4 w-full z-0">
        <div className="flex flex-row px-6  justify-between items-center relative gap-4">
          <div className="bg-white text-black flex items-center gap-3 p-2 rounded-md">
            <SiNextdotjs className="text-[3.5vw] md:text-lg lg:text-xl" />
            <SiTypescript className="text-[3.5vw] md:text-lg lg:text-xl" />
            <SiNodedotjs className="text-[3.5vw] md:text-lg lg:text-xl" />
            <SiMongodb className="text-[3.5vw] md:text-lg lg:text-xl" />
          </div>
          <div className="relative flex items-center justify-center z-20">
            {!isHovered ? (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-white transition-all duration-300`}
              >
                <FiPlus size={22} style={{ strokeWidth: 2 }} className="text-black" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex gap-2"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="md:w-10 md:h-10 h-7 w-7 rounded-full flex items-center justify-center bg-white shadow-md"
                >
                  <FiGithub className="text-black text-[3.5vw] md:text-lg lg:text-xl" />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:w-10 md:h-10 h-7 w-7 rounded-full flex items-center justify-center bg-white shadow-md"
                >
                  <FiLink className="text-black text-[3.5vw] md:text-lg lg:text-xl" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WorkTopContent);
