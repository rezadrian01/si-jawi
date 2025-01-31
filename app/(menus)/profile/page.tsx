"use client";

import Image from "next/image";
import React from 'react';
import BackButton from "../components/back-button";
import { motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../lib/animations";

const ProfilePage = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Left Cloud */}
        <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit" 
            className="absolute -left-28 md:left-0 top-[25%] md:top-[20%] -translate-y-1/2 -z-10">
            <Image
                className="max-w-72 md:max-w-[25rem]"
                src="/left-cloud.svg"
                alt="cloud"
                width={500}
                height={500}
            />
        </motion.div>

        {/* Right Cloud */}
        <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit" 
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10">
            <Image
                className="max-w-20 md:max-w-[10rem]"
                src="/right-cloud.svg"
                alt="cloud"
                width={500}
                height={500}
            />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen min-w-full flex justify-center items-center">
          <div className="p-8 w-full max-w-xs md:max-w-3xl bg-white flex flex-col items-center mx-auto rounded-3xl md:rounded-[50px] shadow-lg">
            {/* Image */}
            <div className="rounded-full overflow-hidden border-4 md:border-8 border-secondary-color">  
              <Image priority src="/images/foto.jpg" alt="profile_image" width={500} height={500} className="w-[115.85px] md:w-[231.7px] h-[115.85px] md:h-[231.7px]" />
            </div>

            {/* Profile */}
            <div className="mt-4">
              <p className="text-xs md:text-xl font-bold text-center">Retno Anjani</p>
              <p className="text-xs md:text-xl font-bold text-center">NIM 210211602807</p>
              <p className="text-xs md:text-xl font-bold text-center">Program Studi S1 Pendidikan Bahasa, Sastra Indonesia dan Daerah</p>
            </div>
          </div>
        </motion.div>
        
        {/* Back Button */}
        <BackButton animate />
      </div>
    </>
  )
}

export default ProfilePage