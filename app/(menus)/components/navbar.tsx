"use client";

import React from "react";
import { DynaPuff } from "next/font/google";
import Drawer from "./drawer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SiJawiButton from "./si-jawi-button";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

const Navbar = () => {
  const pathname = usePathname();
  const location = pathname.split("/")[1];

  const getPageLogo = () => {
    if (location === "profile") {
      return "/profile.svg";
    } else if (location === "wulangan") {
      return "/book.svg";
    } else if (location === "capaian-pasinaonan") {
      return "/target.svg";
    } else if (location === "sri-aji-jayabaya") {
      return "/book.svg";
    } else if (location === "gladhen") {
      return "/question.svg";
    }

    return "";
  };

  return (
    <>
      <div
        className={`${
          location === "sri-aji-jayabaya" ? "sticky" : "fixed"
        } top-0 left-0 w-full flex justify-between items-center p-4 z-50`}
      >
        <div className="flex items-center gap-x-2">
          <Drawer />

          <SiJawiButton>
            <h1
              className={`${dynaPuff.className} text-[40px] font-bold text-white`}
            >
              Si Jawi
            </h1>
          </SiJawiButton>
        </div>

        {typeof getPageLogo() === "string" && (
          <div className="p-4 rounded-full bg-third-color shadow-lg">
            <Image
              src={getPageLogo()}
              alt="page_logo"
              width={500}
              height={500}
              className="w-[44.25px] h-[44.25px]"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
