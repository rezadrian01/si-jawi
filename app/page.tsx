"use client"

import { useEffect, useState } from "react";
import { DynaPuff, Shantell_Sans, Noto_Traditional_Nushu } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] })

const shantellSans = Shantell_Sans({ subsets: ["latin"] })
const notoTraditionalNushu = Noto_Traditional_Nushu({ subsets: ["latin"] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? 
        <div className="min-h-screen flex justify-center items-center">
          <img src="/loading.svg" alt="loading_image" />
        </div>
      : <>
          <div className="h-[67.5px] bg-[#452A00]"></div>

          <div className="mt-8">
            <h1 className={`${dynaPuff.className} text-[80px] font-bold text-center`}>
              Sinau Bahasa Jawi
            </h1>
            <h2 className={`${shantellSans.className} text-[56px] font-extrabold text-center`}>
              ꦱꦶꦤꦲꦸꦧꦱꦗꦮꦶ
            </h2>
          </div>

          <ul className="flex justify-center items-center mt-24 gap-x-8">
            {/* Home */}
            <li className="flex flex-col">
              <div className="p-6 bg-[#FF8F1B] rounded-full">
                <img src="/home.svg" alt="home_logo" className="h-[63.05px] w-[63.05px]" />
              </div>

              <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Home</h5>
            </li>

            {/* Profile */}
            <li className="flex flex-col">
              <div className="p-6 bg-[#FF8F1B] rounded-full">
                <img src="/profile.svg" alt="profile_logo" className="h-[63.05px] w-[63.05px]" />
              </div>

              <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Profil</h5>
            </li>
          </ul>
        </>
      }
    </>
  );
}
