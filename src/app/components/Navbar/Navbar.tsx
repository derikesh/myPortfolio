"use client";

import SvgIcon from "@/app/assets/logo/Logo";
import { useState } from "react";
import AnimatedMenuIcon from "./PlusIcon";

import SubMenu from "./SubMenu";
import Link from "next/link";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <>
      <div className="home_layout sticky top-0 z-40">
        {/* differern component */}
        <SubMenu clicked={clicked} setClicked={setClicked} />

        <div className="navbar_contnet flex justify-between items-center sm:p-6 p-2  z-10">
          <div className="logo z-10 sm:w-[70px] w-[50px]">
            <Link onClick={ ()=>setClicked(false) } href="/" ><SvgIcon clicked={ clicked } /></Link>
          </div>
         
            <button onClick={() => setClicked( (prev) => !prev )} className={` relative menu_icon ${ clicked ? 'text-white' : 'text-black' } flex gap-3 items-center z-10 overflow-hidden`} >

              <div className="flex flex-col gap-4 items-start ">
                
                <div className={`relative ml-auto transition-all ease-out duration-500 ${clicked ? '-translate-y-12 delay-300' : 'translate-y-5'}`}>Menu</div>

                <div className={`relative transition-all ease-out duration-500 ${ clicked ? '-translate-y-5 delay-300 ' : 'translate-y-5' }`}>
                    <div className="flex gap-4 " >
                        {/* <a href="https://www.instagram.com/_rikesh_sherpa/" target="_blank" rel="noopener noreferrer" className="sm:block hidden" >Instagram</a> */}
                        <a href="https://www.linkedin.com/in/rikesh-sherpa-4278a3223/" target="_blank" rel="noopener noreferrer" className="sm:block hidden" >LinkedIn</a>
                        <span>Close</span>
                    </div>
                </div>
              </div>

              <AnimatedMenuIcon clicked={clicked} />

            </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
