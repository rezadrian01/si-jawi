"use client";

import React from "react";
import { DynaPuff } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ITEM_VARIANTS,
  LIST_VARIANTS,
  DEFAULT_FADE_IN_OUT_ANIMATION,
  DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../lib/animations";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

const SriAjiJayabayaPage = () => {
  return (
    <>
      <div className="relative overflow-x-hidden pt-8 md:pt-0 pb-16">
        {/* Content 1 */}
        <div className="relative flex justify-center items-center">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${dynaPuff.className} text-4xl md:text-8xl font-bold`}
            >
              Sri Aji Jayabaya
            </motion.h1>

            <div className="flex flex-col items-center mt-6 md:mt-16">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  src="/location.svg"
                  alt="location_icon"
                  width={500}
                  height={500}
                  className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
                />
              </motion.div>

              <motion.h3
                variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
              >
                Raja Kediri 1135-1159 M
              </motion.h3>

              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-xs md:max-w-2xl px-4 md:px-0 flex justify-center mt-2 md:mt-6"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15809.748029015997!2d112.0122286!3d-7.8492473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78570dfd6e0647%3A0x25037b968333d9b2!2sKediri%2C%20Kabupaten%20Kediri%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1738044339900!5m2!1sid!2sid"
                  width="600"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-square md:aspect-video"
                ></iframe>
              </motion.div>
            </div>
          </div>

          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:absolute left-0 top-[20%] -translate-y-1/2 -z-10"
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
            className="hidden md:absolute right-0 top-[40%] -translate-y-1/2 -z-10"
          >
            <Image
              className="max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 6 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 2 */}
        <div className="relative flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Putra saka Raja Kijing Wahana
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/footprint.svg"
              alt="footprint_image"
              width={668}
              height={97}
              layout="responsive"
              className="max-w-xs px-8 md:px-0 md:max-w-[668px] mt-4"
            />
          </motion.div>

          {/* Wayang */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute left-0 top-[185%] -translate-y-1/2 -z-10"
          >
            <Image
              className="max-w-[25rem]"
              src="/kelir-2.svg"
              alt="kelir-2"
              width={227}
              height={264}
            />
          </motion.div>

          {/* Woman */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute right-0 top-[150%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/images/woman-figure-1.png"
              alt="woman_figure"
              width={259}
              height={376}
            />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 8 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 3 */}
        <div className="relative flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Tani lan dagang masyarakat maju
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="mx-8 md:mx-0 rounded-3xl overflow-hidden border-4 md:border-8 border-[#663D24] mt-2 md:mt-8"
          >
            <Image
              src="/images/tani.png"
              alt="footprint_image"
              width={416}
              height={277}
            />
          </motion.div>

          {/* Man figure */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute left-0 top-[73%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/images/man-figure-1.png"
              alt="man_figure"
              width={233}
              height={365}
            />
          </motion.div>

          {/* Cloud */}
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute right-0 top-[140%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
              className="max-w-[10rem]"
            />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 9 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 4 */}
        <div className="relative flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Hubungan diplomatik kang apik
            <br />
            klawan kerajaan-kerajaan Jawa
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/handshake.svg"
              alt="handshake_icon"
              width={240}
              height={240}
              className="max-w-24 md:max-w-[240px]"
            />
          </motion.div>

          {/* Woman */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute left-0 top-[100%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/images/woman-figure-1.png"
              alt="woman_figure"
              width={259}
              height={376}
              className="scale-x-[-1]"
            />
          </motion.div>

          {/* Wayang */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute right-0 top-[130%] -translate-y-1/2 -z-10"
          >
            <Image src="/kelir-3.svg" alt="kelir-3" width={227} height={264} />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 6 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 5 */}
        <div className="relative flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Jayabaya raja sing adil lan wicaksana,
            <br />
            ngatur pranatan kang ngutamakaké uripe
            <br />
            kawula cilik lan kemakmurane praja.
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/scale.svg"
              alt="scale_icon"
              width={200}
              height={227}
              className="max-w-24 md:max-w-[200px] mt-8"
            />
          </motion.div>

          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute left-0 top-[110%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
              className="max-w-[25rem]"
            />
          </motion.div>

          {/* Man Figure */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute right-0 top-[110%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/images/man-figure-3.png"
              alt="man_figure"
              width={239}
              height={376}
            />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 9 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 6 */}
        <div className="relative flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Kondhang amarga ramalan-ramalane kang uga
            <br />
            kasebut Jangka Jayabaya.
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="mx-8 md:mx-0 rounded-3xl overflow-hidden border-4 md:border-8 border-[#663D24] mt-2 md:mt-8"
          >
            <Image
              src="/images/jayabaya.jpg"
              alt="jayabaya_image"
              width={545}
              height={363}
            />
          </motion.div>

          {/* Woman */}
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute left-0 top-[90%] -translate-y-1/2 -z-10"
          >
            <Image
              src="/woman-figure-2.svg"
              alt="woman_figure"
              width={245}
              height={367}
            />
          </motion.div>

          {/* Cloud */}
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="hidden md:absolute right-0 top-[110%] -translate-y-1/2 -z-10"
          >
            <Image
              className="max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </div>

        {/* Line */}
        <motion.div
          variants={LIST_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-y-1 justify-center items-center my-4 md:my-6"
        >
          {Array.from({ length: 4 }).map((_, index: number) => {
            return (
              <motion.span
                variants={ITEM_VARIANTS}
                key={index}
                className="w-2 md:w-2.5 h-7 md:h-[37px] bg-black rounded-full"
              ></motion.span>
            );
          })}
        </motion.div>

        {/* Content 7 */}
        <div className="flex flex-col justify-center items-center">
          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <Image
              src="/location.svg"
              alt="location_icon"
              width={500}
              height={500}
              className="w-[23px] md:w-[60px] h-[23px] md:h-[60px]"
            />
          </motion.div>

          <motion.h3
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className={`mt-2 md:mt-4 ${dynaPuff.className} text-base md:text-4xl font-bold text-center`}
          >
            Pamoksan
          </motion.h3>

          <motion.div
            variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="max-w-xs md:max-w-2xl px-4 md:px-0 flex justify-center mt-2 md:mt-6"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0998295119143!2d112.08008199999999!3d-7.779239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785b71f0855a57%3A0xef92876fd4c4fb31!2sPamuksan%20Prabu%20Sri%20Aji%20Joyoboyo%2C%20Menang%2C%20Pagu%2C%20Kediri!5e0!3m2!1sid!2sid!4v1738044215313!5m2!1sid!2sid"
              width="600"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-square md:aspect-video"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SriAjiJayabayaPage;
