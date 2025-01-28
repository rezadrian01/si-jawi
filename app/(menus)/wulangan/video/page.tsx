"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const VideoPage = () => {
  const router = useRouter();
  const handleBackClick = () => {
    console.log("back clicked");
  };

  const handleNextClick = () => {
    router.push("video/view");
  };

  return (
    <div className="relative h-screen w-full">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col justify-center items-center w-full text-center">
          {/* Content */}
          <div className="relative -mb-14">
            <Image
              className="w-[35rem]"
              src="/bubble-chat-4.svg"
              alt="bubble-chat"
              width={500}
              height={500}
            />
            <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-2xl w-9/12">
              Babagan ngenani teks profil tokoh sampun rampung dibahas.
              Bocah-bocah sampun paham nggih? Saiki ana video kang isine
              ngrembug ngenani profil tokoh Sri Aji Jayabaya. Gatekna apa isi
              kang ana ing video kasebut. Sugeng mirsani!
            </p>
          </div>
          {/* Figure */}
          <div className="flex justify-start w-full">
            <div className="max-w-[18rem]">
              <Image
                src="/figure-2.svg"
                alt="figure"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Absolute  elements */}

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
      <div className="absolute bottom-10 left-10">
        <CircleButton onClick={handleBackClick}>
          <Image
            className="aspect-square w-[3rem]"
            src="/back.svg"
            alt="back-logo"
            width={500}
            height={500}
          />
        </CircleButton>
      </div>

      {/* Next Button */}
      <div className="absolute bottom-10 right-10 rotate-180">
        <CircleButton onClick={handleNextClick}>
          <Image
            className="aspect-square w-[3rem]"
            src="/back.svg"
            alt="next-logo"
            width={500}
            height={500}
          />
        </CircleButton>
      </div>
    </div>
  );
};

export default VideoPage;
