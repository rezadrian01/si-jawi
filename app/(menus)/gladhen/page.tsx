"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

import BackButton from "../components/back-button";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../lib/animations";

const GladhenPage = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace("/");
  };

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col gap-44 justify-between w-full text-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[15rem] flex flex-col justify-center items-center"
          >
            <CircleButton link="https://quizizz.com/join?gc=18290384">
              <Image
                className="aspect-square w-[5rem]"
                src="/quiz-text.svg"
                alt="head-figure"
                width={500}
                height={500}
              />
            </CircleButton>
            <h3 className="font-semibold text-xl mt-4">Quizziz</h3>
          </motion.div>
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[15rem] flex flex-col justify-center items-center"
          >
            <CircleButton link="https://quizizz.com/join?gc=18290384">
              <Image
                className="aspect-square w-[5rem] p-2"
                src="/gladhen.svg"
                alt="record-logo"
                width={500}
                height={500}
              />
            </CircleButton>
            <h3 className="font-semibold text-xl mt-4">Gladhen</h3>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center min-w-[40rem] ">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.3)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] -mb-14"
          >
            <Image
              className="w-[37rem] mx-auto"
              src="/bubble-chat-3.svg"
              alt="bubble-chat"
              width={500}
              height={500}
            />
            <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-2xl w-9/12">
              Assalamualaikum bocah-bocah! Kepriye kabare? Ing kene awake dhewe
              bakal ngrembug babagan teks profil tokoh. Ana sing weruh apa iku
              teks profil tokoh? Kepriye carane nulis teks profil tokoh kuwi?
            </p>
          </motion.div>
          {/* Figure image */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="-mr-[40rem]"
          >
            <Image
              className="w-[15rem]"
              src="/man-figure-3.svg"
              alt="woman-figure"
              width={500}
              height={500}
            />
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
        className="absolute left-0 top-[30%] -translate-y-1/2 -z-10"
      >
        <Image
          className="max-w-[25rem]"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 -z-10"
      >
        <Image
          className="max-w-[10rem]"
          src="/right-cloud.svg"
          alt="cloud"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Back Button */}
      <BackButton animate onClick={handleBackClick} />
    </div>
  );
};

export default GladhenPage;
