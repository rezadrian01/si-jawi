"use client";

import CircleButton from "@/components/circle-button/circle-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileFigurePage = () => {
  const router = useRouter();
  const handleFigureClick = () => {
    console.log("figure clicked");
  };

  const handleVideoClick = () => {
    router.push("/wulangan/video");
  };

  const handleBackClick = () => {
    router.replace("/");
  };

  return (
    <div className="h-[500vh] relative">
      <div className="h-full w-full divide-y-4 divide-secondary-color">
        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end pb-2 h-full">
              <div className="relative -mb-4 ml-44 z-20">
                <Image
                  priority
                  className="w-[30rem] "
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xl w-9/12">
                  Teks profil tokoh uga diarani teks biografi. Teks kasebut
                  klebu sawijine jinise teks naratif. Teks profil tokoh yaiku
                  teks kang nggambarake tokoh lan prastawa apa wae sing tau
                  dialami dening tokoh kasebut.
                </p>
              </div>
              <div>
                <Image
                  priority
                  className="w-[18rem] scale-x-[-1]"
                  src="/woman-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end pb-2 h-ful">
              <div className="relative -mb-4 mr-44 z-20">
                <Image
                  priority
                  className="w-[25rem]"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-xl w-9/12">
                  Teks profil tokoh uga diarani teks biografi. Teks kasebut
                  klebu sawijine jinise teks naratif. Teks profil tokoh yaiku
                  teks kang nggambarake tokoh lan prastawa apa wae sing tau
                  dialami dening tokoh kasebut.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Image
                  priority
                  className="w-[18rem]"
                  src="/man-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="space-y-8"></div>
          </div>
          {/* Cloud elements */}
          <div className="absolute left-0 top-[30%] -translate-y-1/2 -z-10">
            <Image
              priority
              className="max-w-[25rem]"
              src="/left-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10">
            <Image
              priority
              className="max-w-[10rem]"
              src="/right-cloud.svg"
              alt="cloud"
              width={500}
              height={500}
            />
          </div>
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end pb-2 h-full">
              <div className="relative -mb-4 ml-44 z-20">
                <Image
                  className="w-[30rem] "
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xl w-9/12">
                  Sabanjure, ana apa wae struktur ing teks profil tokoh? Ing
                  teks profil tokoh ana telu struktur yaiku orientasi, prastawa,
                  lan reorientasi.
                </p>
              </div>
              <div>
                <Image
                  className="w-[18rem] scale-x-[-1]"
                  src="/man-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="space-y-8"></div>

            {/* Right */}
            <div className="flex flex-col justify-end pb-2 h-ful">
              <div className="relative -mb-4 mr-44 z-20">
                <Image
                  className="w-[25rem]"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-xl w-9/12">
                  Saiki ayo njlentrehake bareng apa wae struktur teks profil
                  tokoh.
                  <br />
                  <br />
                  Kaping siji ana orientasi, yaitu bagian teks kang isine
                  ngenalake tokoh. Umume ngandharake jeneng, papan kelairan, lan
                  kaluwargane.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Image
                  className="w-[18rem]"
                  src="/woman-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="space-y-8"></div>
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
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-between relative">
            {/* Left */}
            <div className="flex flex-col justify-end pb-2 h-full">
              <div className="relative -mb-4 ml-44 z-20">
                <Image
                  className="w-[30rem] "
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xl w-9/12">
                  Kaping loro yaiku prastawa. Prastawa iku isine ngandharake
                  kahanan, prastawa, prakara sing tau dialami tokoh lan kena di
                  gawe tuladha.
                </p>
              </div>
              <div>
                <Image
                  className="w-[18rem] scale-x-[-1]"
                  src="/man-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end pb-2 h-ful">
              <div className="relative -mb-4 mr-44 z-20">
                <Image
                  className="w-[25rem]"
                  src="/bubble-chat-5.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-[40%] left-1/2 font-semibold text-xl w-9/12">
                  Struktur teks profil tokoh kaping telu yaiku reorientasi. Ing
                  reorientasi isine ngandharake pamawase panulis marang
                  tokoh/paraga kang dicritakake.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Image
                  className="w-[18rem]"
                  src="/woman-figure-1.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>
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
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-center items-center relative">
            {/* Center */}
            <div className="flex flex-col justify-end items-center pb-2 h-full">
              <div className="relative -mb-4 -mr-[30rem] z-20">
                <Image
                  className="w-[30rem] "
                  src="/bubble-chat-4.svg"
                  alt="bubble-chat"
                  width={500}
                  height={500}
                />
                <p className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1/2 font-semibold text-xl w-9/12">
                  Bocah-bocah saiki wis mudheng ya ngenani titikane lan struktur
                  ing teks profil tokoh. Saiki awake dhewe bakal ngrembug
                  babagan nulis teks profil tokoh. Ayo gatekna materi ana ing
                  sisih tengen iki!
                </p>
              </div>
              <div>
                <Image
                  className="w-[20rem] scale-x-[-1]"
                  src="/man-figure-2.svg"
                  alt="figure"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="space-y-8"></div>
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
        </section>

        <section className="h-screen relative">
          <div className="max-w-[80rem] h-full mx-auto flex justify-center items-center relative">
            {/* Center */}
            <div className="max-w-[50rem] p-10 border-8 border-secondary-color rounded-[3rem] flex flex-col items-center justify-center text-center font-semibold text-xl">
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
            </div>
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
        </section>
      </div>
      {/* Back Button */}
      <div className="absolute bottom-10 right-10 rotate-180">
        <CircleButton onClick={handleVideoClick}>
          <Image
            className="aspect-square w-[3rem] scale-x-[-1]"
            src="/record.svg"
            alt="next-logo"
            width={500}
            height={500}
          />
        </CircleButton>
      </div>
    </div>
  );
};

export default ProfileFigurePage;
