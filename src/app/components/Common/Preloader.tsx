'use client'

import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldHide(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800); 
      window.scroll({
        top:0,
        behavior:'smooth'
      })
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 bg-white z-50 transition-transform duration-700 ease-in-out ${
        shouldHide ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center space-y-4">
          {/* Simple loading spinner */}
          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
          {/* Loading text */}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
