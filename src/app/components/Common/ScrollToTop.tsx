'use client'

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex justify-center items-center fixed bottom-8 right-8 z-50 w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] bg-black border-4 border-black text-white rounded-full transition-all duration-300 hover:bg-white hover:text-black group shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg md:text-base transition-colors duration-300" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
