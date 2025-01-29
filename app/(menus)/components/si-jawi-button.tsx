"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface SiJawiButtonProps {
  children: React.ReactNode;
}

const SiJawiButton: FC<SiJawiButtonProps> = ({ children }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.replace("/")}
      className="py-2 px-4 bg-third-color rounded-3xl shadow-lg"
    >
      {children}
    </button>
  );
};

export default SiJawiButton;
