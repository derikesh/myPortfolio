import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, className }) => {
  const baseStyles = 'border-4  border-black md:text-[1vw] text-[3vw] text-white overflow-hidden rounded-full font-medium transition-colors duration-300 relative group flex items-center justify-center gap-2';
  const primaryStyles = 'bg-black text-white group-hover:text-black';

  return (
    <button
      className={`${baseStyles} ${primaryStyles} ${className} min-w-[11vw] flex justify-between`}
      onClick={onClick}
    >
      <div className='relative z-20 px-[1vw] transition-colors duration-100 ease-linear group-hover:text-black leading-[3]'>{children}</div>
      <div className='bg-white rounded-full absolute right-0 top-0 h-full w-full z-10 transition-transform duration-150 ease-linear group-hover:translate-x-0 translate-x-[75%]' ></div>
      <div className='p-[1vw]'>
        <FaArrowRight className='relative  z-20 md:text-[1vw] text-[2vw] text-black'/>
      </div>
    </button>
  );
};

export default Button;
