"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import React from "react";

const page = () => {
  const handleFigureClick = () => {
    console.log("figure clicked");
  };

  const handleVideoClick = () => {
    console.log("video clicked");
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between w-[7rem]">
        <CircleButton onClick={handleFigureClick}>
          <Image
            className="aspect-square w-[5rem]"
            src="head-figure.svg"
            alt="head-figure"
            width={500}
            height={500}
          />
        </CircleButton>
        <div>
          <CircleButton onClick={handleVideoClick}>
            <Image
              className="aspect-square"
              src="record.svg"
              alt="record-logo"
              width={500}
              height={500}
            />
          </CircleButton>
        </div>
      </div>
    </div>
  );
};

export default page;
