"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BackButton from "../../components/back-button";
import { motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../../lib/animations";

const VideoPage = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  const handleNextClick = () => {
    router.push("video/view");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex h-full flex-col justify-center items-center w-full text-center mt-24">
          {/* Content */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative mb-2 ml-28 md:-mb-28"
          >
            <Image
              className="w-[20rem] md:w-[38rem]"
              src="/bubble-chat-4.svg"
              alt="bubble-chat"
              width={500}
              height={500}
            />
            <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xs md:text-2xl w-9/12">
              Babagan ngenani teks profil tokoh sampun rampung dibahas.
              Bocah&ndash;bocah sampun paham nggih? Saiki ana video kang isine
              ngrembug ngenani profil tokoh Sri Aji Jayabaya. Gatekna apa isi
              kang ana ing video kasebut. Sugeng mirsani!
            </p>
          </motion.div>
          {/* Figure */}
          <div className="flex justify-start w-full">
            <motion.div
              variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[18rem]"
            >
              <Image
                className="w-[15rem] md:w-[18rem]"
                src="/images/figure-2.png"
                alt="figure"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
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

export default VideoPage;
