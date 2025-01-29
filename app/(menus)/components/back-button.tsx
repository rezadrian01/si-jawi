"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { motion } from "framer-motion";
import { DEFAULT_FADE_IN_OUT_ANIMATION } from "../lib/animations";

interface BackButtonProps {
  onClick?: () => void;
  animate?: boolean;
}

const BackButton: FC<BackButtonProps> = ({ onClick, animate = false }) => {
  const router = useRouter();
  const handleBackClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.replace("/");
    }
  };

  return (
    <motion.div
      variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.2, 0.2)}
      initial={animate ? "hidden" : ""}
      animate={animate ? "visible" : ""}
      exit={animate ? "exit" : ""}
      className="absolute bottom-10 left-10 rounded-full shadow-lg z-10"
    >
      <CircleButton onClick={handleBackClick}>
        <Image
          className="aspect-square w-[3rem]"
          src="/back.svg"
          alt="back-logo"
          width={500}
          height={500}
        />
      </CircleButton>
    </motion.div>
  );
};

export default BackButton;
