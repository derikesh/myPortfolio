import Link from 'next/link';
import React from 'react'

const SubMenu =  React.memo( ( {clicked, setClicked}:{clicked:boolean, setClicked: (value: boolean) => void} ) => {
  
  const handleLinkClick = () => {
    setClicked(false);
  };

  return (
    <div  >
             <div className={` hidden_menu bg-black transition-transform duration-700 ease-in-out md:h-[90vh] h-[90vh] ${clicked ? 'translate-y-0' : '-translate-y-full'} absolute top-0 left-0 w-full`}>

              <div className={`home_layout flex md:flex-row flex-col-reverse h-full justify-center transition-opacity duration-200 ${clicked ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                
                {/* Left Side - Contact Info */}
                <div className="md:w-1/2 w-full flex flex-col sm:justify-center justify-start items-start md:pl-12  ">
                  <h3 className="text-white md:text-[1vw] text-[4vw] mb-2 font-thin">Start a conversation</h3>
                  <a 
                    href="mailto:rikeshhsherpa1@gmail.com" 
                    className="md:text-[2vw] text-[4.8vw] font-medium underline text-slate-400 hover:text-gray-300 transition-colors"
                  >
                    rikeshhsherpa1@gmail.com
                  </a>
                </div>

                {/* Right Side - Navigation Menu */}
                <div className="md:w-1/2 w-full flex md:justify-center justify-start items-center md:mb-0 mb-20">
                  <ul className="text-white flex flex-col gap-[4vw] text-2xl font-semibold">
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">
                      <Link href={'/'} onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">
                      <Link href='/about' onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-gray-300 transition-colors cursor-pointer">
                      <Link href='/contact' onClick={handleLinkClick}>Contact</Link>
                    </li>
                    <li className="md:text-[4.3vw] text-[12vw] font-light hover:text-purple-400 transition-colors cursor-pointer">
                      <a 
                        href='/cv.pdf' 
                        download="Rikesh_Sherpa_CV.pdf"
                        onClick={handleLinkClick}
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        Download CV ↓
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
    </div>
  )
});

SubMenu.displayName = "SubMenu";
export default SubMenu;
