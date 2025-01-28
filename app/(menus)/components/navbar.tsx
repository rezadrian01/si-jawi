import React from 'react'
import { DynaPuff } from "next/font/google";
import Drawer from './drawer';

const dynaPuff = DynaPuff({ subsets: ["latin"] })

const navbar = () => {
  return (
    <>
        <div className='fixed top-0 left-0 flex items-center p-4'>
            <div className='flex items-center gap-x-2'>
                <Drawer />

                <div className='py-2 px-4 bg-third-color rounded-3xl shadow-lg'>
                    <h1 className={`${dynaPuff.className} text-[40px] font-bold text-white`}>Si Jawi</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default navbar