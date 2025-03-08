"use client";

import React from 'react';
import {
  DynaPuff
} from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { DEFAULT_FADE_IN_OUT_ANIMATION } from "../lib/animations";
import BackButton from "../components/back-button";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

const PanuntunMigunakakePage = () => {
  return (
    <>
        <section className="h-screen relative">
            <div className="max-w-[80rem] h-full mx-auto flex justify-center items-center relative px-6">
                {/* Center */}
                <motion.div
                    variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    // exit="exit"
                    className="relative max-w-[50rem] flex items-center justify-center"
                >
                    <Image
                    src="/images/paper.png"
                    alt="paper_img"
                    width={500}
                    height={500}
                    className="min-w-fit min-h-[37rem] md:min-w-[60rem] md:min-h-auto"
                    />

                    <div className="w-full absolute text-center font-semibold text-xs md:text-xl">
                        <h4 className={`mb-2.5 ${dynaPuff.className} text-base md:text-2xl font-normal`}>
                            Tuntunan anggenipun nggunakake situs pasinaon 
                        </h4>
                        <h4 className={`${dynaPuff.className} text-3xl md:text-5xl font-bold`}>
                            Sinau Basa Jawi
                        </h4>

                        <ol className="mt-6 text-left list-decimal">
                            <li>
                                Media memirsa profil tokoh iki damêl murid kelas 7 SMP.
                            </li>
                            <li>
                                Nalika situs web dipêncèt bakal pindhah menyang kaca ngarep utawa pertama.
                            </li>
                            <li>
                                Ing kaca ngarep ana 7 pilihan, yaiku, omah, wewangunan, capaian pasinaon, wulangan, sri aji jayabaya, gladhen, panuntun migunakake.
                            </li>
                            <li>
                                Nalika mêncèt salah siji pilihan, bakal pindhah menyang kaca sing trep karo irah-irahan sing dipilih.
                            </li>
                            <li>
                                Telung garis ing sudhut kiwa ndhuwur digunakake kanggo cepet ngalih menyang kaca liyane.
                            </li>
                            <li>
                                Kanggo bali, pêncèt panah ing sisih kiwa ngisor kaca.
                            </li>
                            <li>
                                Kanggo pindhah menyang kaca sabanjuré, isa mêncèt panah ing sisih tengen ngisor kaca.
                            </li>
                            <li>
                                Sajrone gladhen, bakal dialihake menyang kaca liya, mula yen wis rampung, bali menyang situs web Sinau Basa Jawi.
                            </li>
                        </ol>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Back Button */}
        <BackButton animate />
    </>
  )
}

export default PanuntunMigunakakePage;