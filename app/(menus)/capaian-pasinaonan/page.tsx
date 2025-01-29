"use client";

import Image from "next/image";
import React from 'react';
import BackButton from "../components/back-button";
import { motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../lib/animations";

const CapaianPasinaonanPage = () => {
  return (
    <>
        <div className="relative overflow-hidden">
            {/* Cloud elements */}
            <motion.div
                variants={LEFT_CLOUD_ANIMATION}
                initial="hidden"
                animate="visible"
                exit="exit" 
                className="absolute left-0 top-[20%] -translate-y-1/2 -z-10">
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
                className="absolute right-0 top-[40%] -translate-y-1/2 -z-10">
                <Image
                    className="max-w-[10rem]"
                    src="/right-cloud.svg"
                    alt="cloud"
                    width={500}
                    height={500}
                />
            </motion.div>

            {/* Main Content */}
            <motion.div
                variants={DEFAULT_FADE_IN_OUT_ANIMATION()}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-h-screen min-w-full flex justify-center items-center">
                <div className="p-8 pb-16 w-full max-w-4xl border-8 border-black flex flex-col items-center mx-auto rounded-[50px] shadow-lg">
                    <h6 className="text-xl font-bold text-center">Capaian Pasinaonan<br/>Elemen Berbicara dan Memirsa</h6>

                    <p className="mt-8 text-xl font-normal">
                        Peserta didik memahami informasi berupa gagasan, pikiran, pandangan, arahan atau pesan dari berbagai jenis teks deskripsi, narasi, puisi, eksplanasi dan eksposisi (cerkak/carpan, cerita wayang/topeng dhalang, geguritan/puisi, pacelathon/dha-kandha, tembang kreasi dan macapat/tembang macapat/laghu kreasi) yang beraksara Latin dan/atau aksara Jawa/carakan Madhura, teks visual untuk menemukan makna yang tersurat dan tersirat.<br/><br/>
                        Peserta didik menginterpretasikan informasi untuk mengungkapkan simpati,kepedulian, empati, atau pendapat pro dan kontra secara santun (unggah-ungguh/tata krama) dari teks visual. Peerta didik mampu mengeksplorasi dan mengevaluasi berbagai topik aktual yang dibaca dan dipirsa.
                    </p>
                </div>
            </motion.div>

            {/* Back Button */}
            <BackButton animate />
        </div>
    </>
  )
}

export default CapaianPasinaonanPage