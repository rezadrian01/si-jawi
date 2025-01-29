"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BackButton from "../components/back-button";
import { motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../lib/animations";

const WulanganPage = () => {
  const router = useRouter();
  const handleFigureClick = () => {
    router.push("/wulangan/profile-figure");
  };

  const handleVideoClick = () => {
    router.push("/wulangan/video");
  };

  const handleBackClick = () => {
    router.replace("/");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col gap-44 justify-between w-full text-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[15rem] flex flex-col justify-center items-center"
          >
            <CircleButton onClick={handleFigureClick}>
              <Image
                className="aspect-square w-[5rem] object-cover"
                src="/images/head-figure.png"
                alt="head-figure"
                width={500}
                height={500}
              />
            </CircleButton>
            <h3 className="font-semibold text-xl mt-4">Teks Profile Tokoh</h3>
          </motion.div>
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[15rem] flex flex-col justify-center items-center"
          >
            <CircleButton onClick={handleVideoClick}>
              <Image
                className="aspect-square w-[5rem]"
                src="/record.svg"
                alt="record-logo"
                width={500}
                height={500}
              />
            </CircleButton>
            <h3 className="font-semibold text-xl mt-4">Wulanagan Video</h3>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 min-w-[40rem] ">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] -mr-[20rem]"
          >
            <Image
              className="w-[40rem]"
              src="/bubble-chat-1.svg"
              alt="bubble-chat"
              width={500}
              height={500}
            />
            <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-2xl w-9/12">
              Assalamualaikum bocah-bocah! Kepriye kabare? Ing kene awake dhewe
              bakal ngrembug babagan teks profil tokoh. Ana sing weruh apa iku
              teks profil tokoh? Kepriye carane nulis teks profil tokoh kuwi?
            </p>
          </motion.div>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            <Image
              className="w-[40rem]"
              src="/bubble-chat-2.svg"
              alt="bubble-chat"
              width={500}
              height={500}
            />
            <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[35%] left-1/2 font-semibold text-2xl w-9/12">
              Ana ing sisih kiwa iki materi teks profil tokoh kang kudu
              digatekake! Ayo sinau bebarengan!
            </p>
          </motion.div>
        </div>
      </div>
      {/* Absolute  elements */}

      {/* Figure image */}
      <motion.div
        variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute bottom-0 right-0 -z-10"
      >
        <Image
          className="w-[15rem]"
          src="/images/woman-figure-1.png"
          alt="woman-figure"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Cloud elements */}
      <motion.div
        variants={LEFT_CLOUD_ANIMATION}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
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
        className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
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

export default WulanganPage;
