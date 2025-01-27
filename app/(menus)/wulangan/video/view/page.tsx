"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ViewVideoPage = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  const handleNextClick = () => {
    router.replace("/wulangan");
  };

  return (
    <div className="relative h-screen w-full">
      <div className="flex h-full justify-between items-center max-w-[60rem] mx-auto">
        <div className="flex flex-col justify-center items-center w-full text-center">
          {/* Content */}
          <div className="w-[800] h-[450] border-8 border-secondary-color rounded-[3rem] flex items-center justify-center">
            <p>Video Placeholder (16:9)</p>
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

export default ViewVideoPage;
