"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../../lib/animations";
import { motion } from "framer-motion";

const ProfileFigurePage = () => {
  const router = useRouter();
  const handleVideoClick = () => {
    router.push("/wulangan/video");
  };

  return (
    <div className="h-[500vh] relative overflow-hidden">
      <div className="h-full w-full divide-y-4 divide-secondary-color">
        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex flex-col-reverse lg:flex-row justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end items-start pb-2 h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative -m-10 md:-mb-10 ml-8 md:ml-14 lg:ml-24 z-20"
              >
                <Image
                  priority
                  className="w-[18.5rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xs md:text-xl w-[15.5rem] md:w-[25rem]">
                  Teks profil tokoh uga diarani teks biografi. Teks kasebut
                  klebu sawijine jinise teks naratif. Teks profil tokoh yaiku
                  teks kang nggambarake tokoh lan prastawa apa wae sing tau
                  dialami dening tokoh kasebut.
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem] scale-x-[-1]"
                  src="/images/woman-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end items-end h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.35)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative -mb-12 md:-mb-20 lg:-mb-32 mr-10 md:mr-24 lg:mr-32 z-20"
              >
                <Image
                  priority
                  className="w-[20rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left top-[40%] left-1/2 font-semibold text-xs md:text-xl w-[14rem] md:w-[24rem]">
                  Teks profil tokoh duweni titikan 3, yaiku:
                  <ul className="list-disc">
                    <li>
                      Ngemot informasi adhedhasar fakta (kasunyatan) paraga kang
                      di critakake sajrone wujud narasi.
                    </li>
                    <li>
                      Ngemot sawijine fakta pengalaman uriping paraga sajrone
                      mecahake masalah nganti tekan sukses ing pungkasane,
                      saengga kena dadi tuladha.
                    </li>
                    <li>Teks profil tokoh duweni struktur kang cetha.</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.3)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full flex justify-end -mb-32 md:-mb-44 lg:mb-0"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem]"
                  src="/images/man-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-72 md:max-w-[25rem]"
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
              priority
              className="max-w-20 md:max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex flex-col-reverse lg:flex-row justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end items-start pb-2 h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="relative -m-10 md:-mb-28 ml-8 md:ml-24 lg:ml-36 z-20"
              >
                <Image
                  priority
                  className="w-[18.5rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xs md:text-xl w-[15.5rem] md:w-[25rem]">
                  Sabanjure, ana apa wae struktur ing teks profil tokoh? Ing
                  teks profil tokoh ana telu struktur yaiku orientasi, prastawa,
                  lan reorientasi.
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem] scale-x-[-1]"
                  src="/images/man-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end items-end h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.35)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="relative -mb-12 md:-mb-20 lg:-mb-32 mr-10 md:mr-24 lg:mr-32 z-20"
              >
                <Image
                  priority
                  className="w-[20rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-xs md:text-xl w-[14rem] md:w-[24rem]">
                  Saiki ayo njlentrehake bareng apa wae struktur teks profil
                  tokoh.
                  <br />
                  <br />
                  Kaping siji ana orientasi, yaitu bagian teks kang isine
                  ngenalake tokoh. Umume ngandharake jeneng, papan kelairan, lan
                  kaluwargane.
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="w-full flex justify-end -mb-32 md:-mb-44 lg:mb-0"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem]"
                  src="/images/woman-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-72 md:max-w-[25rem]"
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-20 md:max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex flex-col-reverse lg:flex-row justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end items-start pb-2 h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="relative -m-10 md:-mb-28 ml-8 md:ml-24 lg:ml-36 z-20"
              >
                <Image
                  priority
                  className="w-[18.5rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xs md:text-xl w-[15.5rem] md:w-[25rem]">
                  Kaping loro yaiku prastawa. Prastawa iku isine ngandharake
                  kahanan, prastawa, prakara sing tau dialami tokoh lan kena di
                  gawe tuladha.
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem] scale-x-[-1]"
                  src="/images/man-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end items-end h-full">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.35)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="relative -mb-12 md:-mb-20 lg:-mb-32 mr-10 md:mr-24 lg:mr-32 z-20"
              >
                <Image
                  priority
                  className="w-[20rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-xs md:text-xl w-[14rem] md:w-[24rem]">
                  Struktur teks profil tokoh kaping telu yaiku reorientasi. Ing
                  reorientasi isine ngandharake pamawase panulis marang
                  tokoh/paraga kang dicritakake.
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="w-full flex justify-end -mb-32 md:-mb-44 lg:mb-0"
              >
                <Image
                  priority
                  className="w-[5rem] md:w-[10rem] lg:w-[15rem]"
                  src="/images/woman-figure-1.png"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-72 md:max-w-[25rem]"
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-20 md:max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-start lg:justify-center items-center relative">
            {/* Center */}
            <div className="flex flex-col justify-end items-start lg:items-center h-full w-full ">
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // exit="exit"
                className="relative -mb-10 ml-24 md:ml-44 lg:ml-[30rem] z-20"
              >
                <Image
                  className="w-[18.5rem] md:w-[30rem] mx-auto"
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xs md:text-xl w-9/12">
                  Bocah-bocah saiki wis mudheng ya ngenani titikane lan struktur
                  ing teks profil tokoh. Saiki awake dhewe bakal ngrembug
                  babagan nulis teks profil tokoh. Ayo gatekna materi ana ing
                  sisih tengen iki!
                </p>
              </motion.div>
              <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // exit="exit"
              >
                <Image
                  className="w-[10rem] md:w-[15rem] scale-x-[-1]"
                  src="/man-figure-2.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-72 md:max-w-[25rem]"
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-20 md:max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-center items-center relative px-6">
            {/* Center */}
            <motion.div
              variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // exit="exit"
              className="max-w-[50rem] p-6 md:p-10 border-4 md:border-8 border-secondary-color rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center text-center font-semibold  text-xs md:text-xl"
            >
              <h4 className="mb-4">
                Nulis teks profil tokoh ana langkah-langkahe, yaiku:
              </h4>
              <ol className="text-left list-decimal">
                <li>
                  Nemtokake tokoh idola <br />
                  Tokoh idola iku titikane kaya apa? Tokoh idola yaiku tokoh
                  kang disenengi masyarakat, ahli ing sawijine bidang, nduweni
                  prestasi kang pinunjul, lan iso dadi panutan.
                </li>
                <li>
                  Golek referensi saka ngenani tokoh saka maneka sumber Sumber
                  sing dikarepake yaiku tuladhane majalah utawa kalawarti, buku,
                  lan internet.
                </li>
                <li>
                  Ngolah data <br />
                  Ngolah data ing kene nulis teks profil tokoh kanthi
                  lelandhesan jati dhirine tokoh sing dipilih kanthi ringkes.
                  Tuladhane jeneng, papan tanggal lair, asmane wong tuwane,
                  cacahe kulawarga, riwayat pendhidhikan, riwayat penggawean,
                  prastawa sing dialami, prestasi, lan kesan tokoh.
                </li>
                <li>
                  Gawe cengkorongan <br />
                  Sajrone gawe cengkorongan dideleng maneh struktur teks profil
                  tokoh
                </li>
                <li>
                  Nulis teks profil tokoh <br />
                  Babagan nulis teks profil tokoh iki bocah-bocah bakal nulis
                  sakabehane data kang uwis disiapne ing langkah sadurunge.
                </li>
              </ol>
            </motion.div>
          </div>
          {/* Cloud elements */}
          <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute left-0 top-[20%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-72 md:max-w-[25rem]"
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10"
          >
            <Image
              priority
              className="max-w-20 md:max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </motion.div>
        </section>
      </div>
      {/* Video Button */}
      <motion.div
        variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10"
      >
        <CircleButton onClick={handleVideoClick}>
          <Image
            className="aspect-square w-6 md:w-[3rem]"
            src="/record.svg"
            alt="record-logo"
            width={500}
            height={500}
          />
        </CircleButton>
      </motion.div>
    </div>
  );
};

export default ProfileFigurePage;
