import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, className }) => {
  const baseStyles = 'px-8 py-4 text-[1vw] rounded-full font-medium transition-colors duration-300';
  const primaryStyles = 'bg-black text-white hover:bg-gray-800';
  const secondaryStyles = 'border border-white text-white hover:bg-white hover:text-black';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${styles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
