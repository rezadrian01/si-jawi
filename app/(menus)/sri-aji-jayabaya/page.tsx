import React from 'react';
import { DynaPuff } from 'next/font/google';
import Image from 'next/image';

const dynaPuff = DynaPuff({ subsets: ["latin"] })

const SriAjiJayabayaPage = () => {
  return (
    <>
        <div className='pb-16'>
            {/* Content 1 */}
            <div className="relative flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className={`${dynaPuff.className} text-8xl font-bold`}>Sri Aji Jayabaya</h1>

                    <div className="flex flex-col items-center mt-16">
                        <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                        <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Raja Kediri 1135-1159 M</h3>

                        <div className="mt-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15809.748029015997!2d112.0122286!3d-7.8492473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78570dfd6e0647%3A0x25037b968333d9b2!2sKediri%2C%20Kabupaten%20Kediri%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1738044339900!5m2!1sid!2sid" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                        </div>
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
            </div>
            
            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center my-6">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
            </div>

            {/* Content 2 */}
            <div className="relative flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Putra saka Raja Sri Jayawarsa lan Dyah Lembu Tal</h3>

                <Image src="/footprint.svg" alt="footprint_image" width={668} height={97} className="mt-4" />

                {/* Wayang */}
                <div className="absolute left-0 top-[185%] -translate-y-1/2 -z-10">
                    <Image
                        className="max-w-[25rem]"
                        src="/kelir-2.svg"
                        alt="kelir-2"
                        width={227}
                        height={264}
                    />
                </div>

                {/* Woman */}
                <div className="absolute right-0 top-[150%] -translate-y-1/2 -z-10">
                    <Image
                        src="/woman-figure-1.svg"
                        alt="woman_figure"
                        width={259}
                        height={376}
                    />
                </div>
            </div>

            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center mb-6 mt-20">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
            </div>

            {/* Content 3 */}
            <div className="relative flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Tani lan dagang masyarakat maju</h3>

                <div className="rounded-3xl overflow-hidden border-8 border-[#663D24] mt-8">
                    <Image src="/images/tani.png" alt="footprint_image" width={416} height={277} />
                </div>

                {/* Man figure */}
                <div className="absolute left-0 top-[73%] -translate-y-1/2 -z-10">
                    <Image
                        src="/man-figure-1.svg"
                        alt="man_figure"
                        width={233}
                        height={365}
                    />
                </div>

                {/* Cloud */}
                <div className="absolute right-0 top-[140%] -translate-y-1/2 -z-10">
                    <Image
                        src="/right-cloud.svg"
                        alt="cloud"
                        width={500}
                        height={500}
                        className="max-w-[10rem]"
                    />
                </div>
            </div>

            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center my-6">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>  
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>  
            </div>

            {/* Content 4 */}
            <div className="flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Hubungan diplomatik kang apik<br/>klawan kerajaan-kerajaan Jawa</h3>

                <Image src="/handshake.svg" alt="handshake_icon" width={240} height={240} />
            </div>

            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center mb-6">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
            </div>

            {/* Content 5 */}
            <div className="flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Jayabaya raja sing adil lan wicaksana,<br/>ngatur pranatan kang ngutamakaké uripe<br/>kawula cilik lan kemakmurane praja.</h3>

                <Image src="/scale.svg" alt="scale_icon" width={200} height={227} className='mt-8' />
            </div>

            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center my-6">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>  
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>  
            </div>

            {/* Content 6 */}
            <div className="flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Kondhang amarga ramalan-ramalane kang uga<br/>kasebut Jangka Jayabaya.</h3>

                <div className="rounded-3xl overflow-hidden border-8 border-[#663D24] mt-8">
                    <Image src="/images/jayabaya.jpg" alt="jayabaya_image" width={545} height={363} />
                </div>
            </div>

            {/* Line */}
            <div className="flex flex-col gap-y-1 justify-center items-center my-6">
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
                <span className="w-2.5 h-[37px] bg-black rounded-full"></span>
            </div>

            {/* Content 7 */}
            <div className="flex flex-col justify-center items-center">
                <Image src="/location.svg" alt="location_icon" width={500} height={500} className="w-[60px] h-[60px]" />

                <h3 className={`mt-4 ${dynaPuff.className} text-4xl font-bold text-center`}>Pamoksan</h3>

                <div className="mt-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0998295119143!2d112.08008199999999!3d-7.779239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785b71f0855a57%3A0xef92876fd4c4fb31!2sPamuksan%20Prabu%20Sri%20Aji%20Joyoboyo%2C%20Menang%2C%20Pagu%2C%20Kediri!5e0!3m2!1sid!2sid!4v1738044215313!5m2!1sid!2sid" width="600" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default SriAjiJayabayaPage