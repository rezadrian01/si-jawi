"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "@/app/(menus)/lib/animations";
import BackButton from "@/app/(menus)/components/back-button";

const ViewVideoPage = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  const handleNextClick = () => {
    router.replace("/wulangan");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col justify-center items-center w-full text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.25 } }}
            exit={{ opacity: 0 }}
            className="w-5/6 max-w-[800px] aspect-[16/9] border-8 border-secondary-color rounded-2xl md:rounded-[3rem] flex items-center justify-center"
          >
            <p>Video Placeholder (16:9)</p>
          </motion.div>
        </div>
      </div>

      {/* Absolute  elements */}
      {/* Cloud elements */}
      <motion.div
        variants={LEFT_CLOUD_ANIMATION}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
      >
        <Image
          className="max-w-72 md:max-w-[25rem]"
          src="/left-cloud.svg"
          alt="cloud"
          width={500}
          height={500}
        />
      </motion.div>

      <motion.div
        variants={RIGHT_CLOUD_ANIMATION}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
      >
        <Image
          className="max-w-20 md:max-w-[10rem]"
          src="/right-cloud.svg"
          alt="cloud"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Back Button */}
      <BackButton animate onClick={handleBackClick} />

      {/* Next Button */}
      <motion.div
        variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10"
      >
        <CircleButton onClick={handleNextClick}>
          <Image
            className="aspect-square w-6 md:w-[3rem] scale-x-[-1]"
            src="/back.svg"
            alt="next-logo"
            width={500}
            height={500}
          />
        </CircleButton>
      </motion.div>
    </div>
  );
};

export default ViewVideoPage;
