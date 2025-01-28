"use client"
import { useEffect, useState } from "react";
import { DynaPuff, Shantell_Sans, Noto_Traditional_Nushu } from "next/font/google";
import Image from "next/image";

const dynaPuff = DynaPuff({ subsets: ["latin"] })
const shantellSans = Shantell_Sans({ subsets: ["latin"] })
const notoTraditionalNushu = Noto_Traditional_Nushu({ subsets: ["latin"] })

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Kelir */}
      <div className="fixed -bottom-8 left-[28.7px]">
        <Image src="/kelir.svg" alt="kelir_img" width={500} height={500} className="w-[277.14px] h-[263.81px]" />
      </div>

      {/* Left Cloud */}
      <div className="fixed top-[154.64px] -left-44">
        <Image src="/left-cloud.svg" alt="left-cloud_img" width={500} height={500} className="w-[601.9px] h-[234.13px]" />
      </div>

      {/* Right Cloud */}
      <div className="fixed top-[331.96px] -right-14">
        <Image src="/right-cloud.svg" alt="right-cloud_img" width={500} height={500} className="w-[228.87px] h-[111.29px]" />
      </div>

      {isLoading ? 
        <div className="min-h-screen flex justify-center items-center">
          <Image src="/loading.svg" alt="loading_image" width={500} height={500} />
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

          <ul className="flex justify-center items-start mt-24 gap-x-8">
            {/* Home */}
            <li>
              <button>
                <div className="p-6 bg-[#FF8F1B] rounded-full">
                  <Image src="/home.svg" alt="home_logo" width={500} height={500} className="h-[63.05px] w-[63.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Home</h5>
              </button>
            </li>

            {/* Profile */}
            <li>
              <button>
                <div className="p-6 bg-[#FF8F1B] rounded-full">
                  <Image src="/profile.svg" alt="profile_logo" width={500} height={500} className="h-[63.05px] w-[63.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Profil</h5>
              </button>
            </li>

            {/* Target */}
            <li>
              <button>
                <div className="p-6 bg-[#FF8F1B] rounded-full">
                  <Image src="/target.svg" alt="target_logo" width={500} height={500} className="h-[63.05px] w-[63.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Capaian<br/>Pasinaonan</h5>
              </button>
            </li>

            {/* Wulangan */}
            <li>
              <button>
                <div className="p-6 bg-[#FF8F1B] rounded-full">
                  <Image src="/book.svg" alt="book_logo" width={500} height={500} className="h-[63.05px] w-[63.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Wulangan</h5>
              </button>
            </li>

            {/* Sri Aji Jayabaya */}
            <li>
              <button>
                <div className="p-1.5 bg-[#FF8F1B] rounded-full">
                  <Image src="/puppet.svg" alt="puppet_logo" width={500} height={500} className="h-[99.05px] w-[99.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Sri Aji<br/>Jayabaya</h5>
              </button>
            </li>

            {/* Gladhen */}
            <li>
              <button>
                <div className="p-6 bg-[#FF8F1B] rounded-full">
                  <Image src="/question.svg" alt="question_logo" width={500} height={500} className="h-[63.05px] w-[63.05px]" />
                </div>

                <h5 className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}>Gladhen</h5>
              </button>
            </li>
          </ul>
        </>
      }
    </>
  );
}
