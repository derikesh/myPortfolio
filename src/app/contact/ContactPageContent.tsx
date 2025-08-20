'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedDiv from '../components/Common/AnimatedDiv'
import SectionTitle from '../components/Common/SectionTitle'

export default function ContactPageContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-[8vw]">
        <AnimatedDiv>
          <SectionTitle title="Contact Page" />
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <h1 className="font-karantina text-black text-[8vw] md:text-[4vw] lg:text-[3vw] mb-4">Under Development</h1>
            <p className="text-gray-600 text-[4vw] md:text-[1.5vw] lg:text-[1.2vw] mb-8 max-w-2xl leading-relaxed">
              I'm currently working on creating Contact page with a form
            </p>
            <Link href="/" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-[4vw] md:text-[1.2vw] lg:text-[1vw] font-medium">
              Back to Home
            </Link>
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700 text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] mb-2">Want to know more about me right now?</p>
              <a href="mailto:rikeshsherpa1@gmail.com" className="text-black font-semibold text-[3.5vw] md:text-[1.1vw] lg:text-[0.9vw] hover:underline">
                rikeshsherpa1@gmail.com
              </a>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  )
}
