"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";

const BackButton = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.replace("/");
    };

  return (
    <div className="absolute bottom-10 left-10 rounded-full shadow-lg z-[-1]">
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
  )
}

export default BackButton