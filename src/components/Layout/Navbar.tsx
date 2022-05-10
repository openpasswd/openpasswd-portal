import React, { useState } from 'react';
import { MenuIcon, XIcon, CubeIcon } from '@heroicons/react/outline'

import githubImg from '/github-icon.png';

function Navbar() {
  const [showNavButton, setShowNavButton] = useState(false);
  function handleClick() { setShowNavButton(!showNavButton) }

  return (
    <div className='w-screen h-[60px] bg-gradient-to-r from-secure-blue to-cyan-500 z-10 fixed font-body'>
      <div className='flex justify-between items-center w-full h-full'>

        <h1 className='flex flex-row text-white text-3xl font-bold  sm:text-3xl'><CubeIcon className='h-8 my-auto ml-4' />
          OpenPasswd</h1>
        <div className='flex flex-row gap-1'>
          <button className='hidden md:flex cursor-pointer text-secure-blue font-bold bg-white border-white hover:bg-transparent hover:text-white border rounded-lg px-12 py-2 mr-2'>Login</button>
          <div className='md:hidden invert mr-6' onClick={handleClick}>
            {!showNavButton ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          </div>
          <button className='hidden md:flex mr-8 cursor-pointer text-back bg-transparent border-secure-blue hover:bg-secure-blue hover:text-white border rounded-lg px-4 py-2 text-white'>
            <img className="h-10, h-6 invert "
              src={githubImg}
            />
            Open-Source
          </button>
        </div>
      </div>
      <div className={!showNavButton ? 'hidden' : ' absolute w-full px-2 flex flex-col my-4'}>
        <button className='md:hidden cursor-pointer text-secure-blue bg-white border-white hover:bg-transparent hover:text-white border rounded-lg py-2 mb-3'>Login</button>
        <button className='md:hidden cursor-pointer text-white bg-secure-blue border-secure-blue hover:bg-secure-blue hover:text-white border rounded-lg py-2 mb-3'>Open-Source</button>
      </div>
    </div>
  );
}

export default Navbar;