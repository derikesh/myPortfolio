import React from 'react'

export default function SubMenu( {clicked}:{clicked:boolean} ) {
  return (
    <div>
             <div className={`hidden_menu bg-black transition-all duration-700 ease-in-out ${clicked ? 'md:h-[70vh] h-[90vh]' : 'h-0'} absolute top-0 left-0 w-full overflow-hidden`}>

              <div className={`home_layout flex md:flex-row flex-col-reverse h-full justify-center transition-opacity duration-200 ${clicked ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                
                {/* Left Side - Contact Info */}
                <div className="md:w-1/2 w-full flex flex-col sm:justify-center justify-start items-start md:pl-12  ">
                  <h3 className="text-white md:text-lg text-sm mb-2 font-thin">Start a conversation</h3>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="md:text-[2vw] text-[4vw] font-medium underline text-slate-400 hover:text-gray-300 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>

                {/* Right Side - Navigation Menu */}
                <div className="md:w-1/2 w-full flex md:justify-center justify-start items-center md:mb-0 mb-20">
                  <ul className="text-white flex flex-col gap-16 text-2xl font-semibold">
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">Home</li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">About</li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">Projects</li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">Contact</li>
                  </ul>
                </div>

              </div>
            </div>
    </div>
  )
}