'use client'

import React, { useEffect, useRef } from 'react'
import Glider from 'glider-js'
import 'glider-js/glider.min.css'
import OtherWorksCard from './OtherWorksCard'
import { SINGLE_WORK_INTERFACE } from '../Works'

interface OtherWorksSliderProps {
  works: SINGLE_WORK_INTERFACE[]
}

export default function OtherWorksSlider({ works }: OtherWorksSliderProps) {
  const gliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gliderRef.current) {
      new Glider(gliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.glider-dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          }
        ]
      })
    }
  }, [works])

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="glider-contain">
        <div ref={gliderRef} className="glider">
          {works.map((item, index) => (
            <div key={index} className="px-2">
              <OtherWorksCard data={item} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="hidden !left-[26px] top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black text-white rounded-full w-10 h-10  items-center justify-center hover:bg-gray-800 transition-colors duration-200"
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button 
          className="hidden right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black text-white rounded-full w-10 h-10  items-center justify-center hover:bg-gray-800 transition-colors duration-200"
          aria-label="Next"
        >
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className="glider-dots flex justify-center !mt-[2vw] gap-2"></div>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  )
}
