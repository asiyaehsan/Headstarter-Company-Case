/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='App bg-gradient-to-b from-[#BBC2FA] to-white'>
      <div className='w-screen h-[120px] z-10 fixed drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center ml-60 text-[#424B5A]'>
            <a href='/'>
              <h1 className='text-3cl font-bold mr-4 sm:text-4xl text-[#424B5A]'>
                Headstarter Group Manager
              </h1>
            </a>
          </div>

          <div className='hidden md:flex pr-4 mr-60'>
            <a
              href='/videocall'
              className='border-none bg-transparent text-[#424B5A] font-bold mr-4 flex justify-center items-center'
            >
              Video Call
            </a>
            <a href='/calendar'>
              <button className='px-8 py-3 bg-[#424B5A] text-white rounded-2xl'>
                Calendar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Navbar
