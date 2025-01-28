"use client";

import Image from "next/image";
import React from 'react'
import BackButton from "../components/back-button"

const ProfilePage = () => {
  return (
    <>
      {/* Cloud elements */}
      <div className="absolute left-0 top-[30%] -translate-y-1/2 -z-10">
        <Image
          className="max-w-[25rem]"
          src="/left-cloud.svg"
          alt="cloud"
          width={500}
          height={500}
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10">
        <Image
          className="max-w-[10rem]"
          src="/right-cloud.svg"
          alt="cloud"
          width={500}
          height={500}
        />
      </div>

      {/* Main */}
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <div className="py-8 w-full max-w-3xl bg-white flex flex-col items-center mx-auto rounded-[50px] shadow-lg">
          {/* Image */}
          <div className="rounded-full overflow-hidden border-8 border-secondary-color">  
            <Image src="/images/foto.jpg" alt="profile_image" width={500} height={500} className="w-[231.7px] h-[231.7px]" />
          </div>

          {/* Profile */}
          <div className="mt-4">
            <p className="text-xl font-bold text-center">Retno Anjani</p>
            <p className="text-xl font-bold text-center">NIM 210211602807</p>
            <p className="text-xl font-bold text-center">Program Studi S1 Pendidikan Bahasa,</p>
            <p className="text-xl font-bold text-center">Retno Anjani</p>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <BackButton />
    </>
  )
}

export default ProfilePage