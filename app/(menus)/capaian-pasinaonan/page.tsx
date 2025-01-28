import Image from "next/image";
import React from 'react'
import BackButton from "../components/back-button"

const CapaianPasinaonanPage = () => {
  return (
    <>
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

        {/* Main Content */}
        <div className="min-h-screen min-w-full flex justify-center items-center">
            <div className="p-8 pb-16 w-full max-w-4xl border-8 border-black flex flex-col items-center mx-auto rounded-[50px] shadow-lg">
                <h6 className="text-xl font-bold text-center">Capaian Pasinaonan<br/>Elemen Berbicara dan Memirsa</h6>

                <p className="mt-8 text-xl font-normal">
                    Peserta didik memahami informasi berupa gagasan, pikiran, pandangan, arahan atau pesan dari berbagai jenis teks deskripsi, narasi, puisi, eksplanasi dan eksposisi (cerkak/carpan, cerita wayang/topeng dhalang, geguritan/puisi, pacelathon/dha-kandha, tembang kreasi dan macapat/tembang macapat/laghu kreasi) yang beraksara Latin dan/atau aksara Jawa/carakan Madhura, teks visual untuk menemukan makna yang tersurat dan tersirat.<br/><br/>
                    Peserta didik menginterpretasikan informasi untuk mengungkapkan simpati,kepedulian, empati, atau pendapat pro dan kontra secara santun (unggah-ungguh/tata krama) dari teks visual. Peerta didik mampu mengeksplorasi dan mengevaluasi berbagai topik aktual yang dibaca dan dipirsa.
                </p>
            </div>
        </div>

        {/* Back Button */}
        <BackButton />
    </>
  )
}

export default CapaianPasinaonanPage