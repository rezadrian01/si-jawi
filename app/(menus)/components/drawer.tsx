"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Noto_Traditional_Nushu } from "next/font/google";
import { useRouter } from 'next/navigation';

const notoTraditionalNushu = Noto_Traditional_Nushu({ subsets: ["latin"] })

const Drawer = () => {
    const router = useRouter();
    const drawerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDrawer = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutsideDrawer = (e: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            };
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutsideDrawer);
          } else {
            document.removeEventListener("mousedown", handleClickOutsideDrawer);
          }
      
        return () => document.removeEventListener("mousedown", handleClickOutsideDrawer);
    }, [isOpen])

    const handleRoute = (url: string) => {
        router.push(url);
        setIsOpen(false);
    };
  return (
    <>
        <button type="button" onClick={openDrawer}>
            <Image src="/hamburger-menu-white.svg" alt="hamburger-menu-white_icon" width={500} height={500} className="w-[72px] h-[72px]"/>
        </button>

        <div ref={drawerRef} className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-white w-80`}>
            <button type="button" onClick={openDrawer} className='m-4'>
                <Image src="/hamburger-menu-orange.svg" alt="hamburger-menu-orange_icon" width={500} height={500} className="w-[72px] h-[72px"/>
            </button>

            <ul>
                {/* Home */}
                <li>
                    <button onClick={() => handleRoute("/")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-3.5 bg-[#FF8F1B] rounded-full">
                            <Image src="/home.svg" alt="home_logo" width={500} height={500} className="w-[30.25px] h-[30.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Home</h5>
                    </button>
                </li>

                {/* Profile */}
                <li>
                    <button onClick={() => handleRoute("/profile")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-3.5 bg-[#FF8F1B] rounded-full">
                            <Image src="/profile.svg" alt="profile_logo" width={500} height={500} className="w-[30.25px] h-[30.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Profil</h5>
                    </button>
                </li>

                {/* Target */}
                <li>
                    <button onClick={() => handleRoute("/capaian-pasinaonan")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-3.5 bg-[#FF8F1B] rounded-full">
                            <Image src="/target.svg" alt="target_logo" width={500} height={500} className="w-[30.25px] h-[30.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Capaian Pasinaonan</h5>
                    </button>
                </li>

                {/* Wulangan */}
                <li>
                    <button onClick={() => handleRoute("/wulangan")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-3.5 bg-[#FF8F1B] rounded-full">
                            <Image src="/book.svg" alt="book_logo" width={500} height={500} className="w-[30.25px] h-[30.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Wulangan</h5>
                    </button>
                </li>

                {/* Sri Aji Jayabaya */}
                <li>
                    <button onClick={() => handleRoute("/sri-aji-jayabaya")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-1 bg-[#FF8F1B] rounded-full">
                            <Image src="/puppet.svg" alt="puppet_logo" width={500} height={500} className="w-[50.25px] h-[50.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Sri Aji Jayabaya</h5>
                    </button>
                </li>

                {/* Gladhen */}
                <li>
                    <button onClick={() => handleRoute("/gladhen")} className="w-full pl-6 py-2 flex items-center gap-x-4 rounded-lg hover:bg-third-color/[.45]">
                        <div className="p-3.5 bg-[#FF8F1B] rounded-full">
                            <Image src="/question.svg" alt="question_logo" width={500} height={500} className="w-[30.25px] h-[30.25px]" />
                        </div>
        
                        <h5 className={`${notoTraditionalNushu.className} font-bold font-xl text-center`}>Gladhen</h5>
                    </button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Drawer