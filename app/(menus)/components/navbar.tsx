"use client"

import React from 'react'
import { DynaPuff } from "next/font/google";
import Drawer from './drawer';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const dynaPuff = DynaPuff({ subsets: ["latin"] })

const Navbar = () => {
  const pathname = usePathname();
  const location = pathname.split("/")[1];

  const getPageLogo = () => {
    if (location === "profile") {
      return "/profile.svg";
    } else if (location === "wulangan") {
      return "/book.svg";
    } else if (location === "capaian-pasinaonan") {
      return "/target.svg";
    };

    return "";
  };

  return (
    <>
        <div className='fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50'>
            <div className='flex items-center gap-x-2'>
                <Drawer />

                <div className='py-2 px-4 bg-third-color rounded-3xl shadow-lg'>
                    <h1 className={`${dynaPuff.className} text-[40px] font-bold text-white`}>Si Jawi</h1>
                </div>
            </div>

            {typeof(getPageLogo()) === "string" && 
              <div className="p-4 rounded-full bg-third-color shadow-lg">
                <Image src={getPageLogo()} alt="page_logo" width={500} height={500} className="w-[44.25px] h-[44.25px]" />
              </div>
            }
        </div>
    </>
  )
}

export default Navbar
