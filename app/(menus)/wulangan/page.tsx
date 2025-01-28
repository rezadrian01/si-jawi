"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BackButton from "../components/back-button";

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
    <div className="relative h-screen w-full">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col gap-44 justify-between w-full text-center">
          <div className="w-[15rem] flex flex-col justify-center items-center">
            <CircleButton onClick={handleFigureClick}>
              <Image
                className="aspect-square w-[5rem]"
                src="/head-figure.svg"
                alt="head-figure"
                width={500}
                height={500}
              />
            </CircleButton>
            <h3 className="font-semibold text-xl mt-4">Teks Profile Tokoh</h3>
          </div>
          <div className="w-[15rem] flex flex-col justify-center items-center">
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 min-w-[40rem] ">
          <div className="relative w-[40rem] -mr-[20rem]">
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
          </div>

          <div className="relative">
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
          </div>
        </div>
      </div>
      {/* Absolute  elements */}

      {/* Figure image */}
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          className="w-[15rem]"
          src="/woman-figure-1.svg"
          alt="woman-figure"
          width={500}
          height={500}
        />
      </div>

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

      {/* Back Button */}
      <BackButton onClick={handleBackClick} />
    </div>
  );
};

export default WulanganPage;
