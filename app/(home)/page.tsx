"use client";
import { useEffect, useState } from "react";
import {
  DynaPuff,
  Shantell_Sans,
  Noto_Traditional_Nushu,
} from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  DEFAULT_FADE_IN_OUT_ANIMATION,
  DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE,
  ITEM_VARIANTS,
  LEFT_CLOUD_ANIMATION,
  RIGHT_CLOUD_ANIMATION,
} from "../(menus)/lib/animations";

const dynaPuff = DynaPuff({ subsets: ["latin"] });
const shantellSans = Shantell_Sans({ subsets: ["latin"] });
const notoTraditionalNushu = Noto_Traditional_Nushu({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoute = (url: string) => {
    router.push(url);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {!isLoading ? 
      <>
        {/* Kelir / Wayang for desktop */}
        <motion.div
          variants={{
            hidden: {
              y: "100%",
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                bounce: 0,
                delay: 1.5,
              },
            },
            exit: {
              y: "100%",
              opacity: 0,
              transition: {
                bounce: 0,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="hidden md:block fixed -bottom-8 left-[28.7px]"
        >
          <Image
            src="/kelir.svg"
            alt="kelir_img"
            width={500}
            height={500}
            className="w-[277.14px] h-[263.81px]"
          />
        </motion.div>

        {/* Kelir / Wayang for mobile */}
        <motion.div
          variants={{
            hidden: {
              y: "100%",
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                bounce: 0,
                delay: 1.5,
              },
            },
            exit: {
              y: "100%",
              opacity: 0,
              transition: {
                bounce: 0,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="block fixed md:hidden bottom-[20%] -left-[20%]"
        >
          <Image
            src="/kelir-2.svg"
            alt="kelir_img"
            width={500}
            height={500}
            className="w-[138.57px]"
          />
        </motion.div>

        {/* Left Cloud */}
        <motion.div
            variants={LEFT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit" 
            className="absolute -left-28 md:left-0 top-[25%] md:top-[20%] -translate-y-1/2 -z-10">
            <Image
                className="max-w-72 md:max-w-[25rem]"
                src="/left-cloud.svg"
                alt="cloud"
                width={500}
                height={500}
            />
        </motion.div>

        {/* Right Cloud */}
        <motion.div
            variants={RIGHT_CLOUD_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="exit" 
            className="absolute right-0 top-[40%] -translate-y-1/2 -z-10">
            <Image
                className="max-w-20 md:max-w-[10rem]"
                src="/right-cloud.svg"
                alt="cloud"
                width={500}
                height={500}
            />
        </motion.div>

        {/* Man Figure for mobile */}
        <motion.div
          variants={{
            hidden: {
              y: "100%",
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                bounce: 0,
                delay: 1.5,
              },
            },
            exit: {
              y: "100%",
              opacity: 0,
              transition: {
                bounce: 0,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="block fixed md:hidden bottom-0 -right-5"
        >
          <Image
            src="/default-man.svg"
            alt="man_figure_img"
            width={500}
            height={500}
            className="w-[83px]"
          />
        </motion.div>
      </> : null}
      
      <AnimatePresence>
        {isLoading ? (
          // Loading screen
          <motion.div
            key={`${isLoading}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex justify-center items-center"
          >
            <Image
              src="/images/loading.png"
              alt="loading_image"
              priority
              width={500}
              height={500}
              className="w-[286.57px] md:w-[500px] h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>
        ) : (
          <motion.div
            key={`${isLoading}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            className="relative z-50 h-full"
          >
            <div className="h-[33.75] md:h-[67.5px] bg-[#452A00]"></div>

            {/* Panuntun Migunakake for tablet and desktop */}
            <motion.div variants={ITEM_VARIANTS} className="hidden md:block absolute top-0 bottom-0 md:top-auto md:bottom-8 lg:top-20 lg:bottom-auto right-16 z-10">
                <button onClick={() => handleRoute("/panuntun-migunakake")} className="flex flex-col items-center">
                  <div className="p-3 md:p-3.5 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/bell.svg"
                      alt="bell_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[40px] w-[42.03px] md:w-[40px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-2 ${notoTraditionalNushu.className} font-bold text-xs md:text-sm text-center`}
                  >
                    Panuntun<br/>Migunakake
                  </h5>
                </button>
              </motion.div>


            {/* Header */}
            <div className="relative mt-6 md:mt-8">
              <motion.h1
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.5)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${dynaPuff.className} text-[40px] md:text-[80px] leading-relaxed font-bold text-center`}
              >
                Sinau Basa Jawi
              </motion.h1>
              <motion.h2
                variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.5, 2)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${shantellSans.className} text-3xl md:text-[56px] leading-relaxed font-extrabold text-center`}
              >
                ꦱꦶꦤꦲꦸꦧꦱꦗꦮꦶ
              </motion.h2>
            </div>

            {/* Menu */}
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.6,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="w-fit md:w-full grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:items-start mx-auto mt-12 md:mt-24 gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-8"
            >
              {/* Home */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/")} className="flex flex-col items-center">
                  <div className="p-3 md:p-6 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/home.svg"
                      alt="home_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[63.05px] w-[42.03px] md:w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Home
                  </h5>
                </button>
              </motion.li>

              {/* Profile */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/profile")} className="flex flex-col items-center">
                  <div className="p-3 md:p-6 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/profile.svg"
                      alt="profile_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[63.05px] w-[42.03px] md:w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Wewangunan
                  </h5>
                </button>
              </motion.li>

              {/* Target */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/capaian-pasinaonan")} className="flex flex-col items-center">
                  <div className="p-3 md:p-6 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/target.svg"
                      alt="target_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[63.05px] w-[42.03px] md:w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Panjangka
                    <br />
                    Pasionaonan
                  </h5>
                </button>
              </motion.li>

              {/* Wulangan */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/wulangan")} className="flex flex-col items-center">
                  <div className="p-3 md:p-6 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/book.svg"
                      alt="book_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[63.05px] w-[42.03px] md:w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Wulangan
                  </h5>
                </button>
              </motion.li>

              {/* Sri Aji Jayabaya */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/sri-aji-jayabaya")} className="flex flex-col items-center">
                  <div className="p-1.5 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/puppet.svg"
                      alt="puppet_logo"
                      width={500}
                      height={500}
                      className="h-[54.02px] md:h-[99.05px] w-[54.02px] md:w-[99.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Sri Aji
                    <br />
                    Jayabaya
                  </h5>
                </button>
              </motion.li>

              {/* Gladhen */}
              <motion.li variants={ITEM_VARIANTS} className="flex justify-center">
                <button onClick={() => handleRoute("/gladhen")} className="flex flex-col items-center">
                  <div className="p-3 md:p-6 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/question.svg"
                      alt="question_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[63.05px] w-[42.03px] md:w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-4 ${notoTraditionalNushu.className} font-bold text-xs md:text-xl text-center`}
                  >
                    Gladhen
                  </h5>
                </button>
              </motion.li>

              {/* Panuntun Migunakake for mobile */}
              <motion.div variants={ITEM_VARIANTS} className="col-span-2 block md:hidden flex justify-center">
                <button onClick={() => handleRoute("/panuntun-migunakake")} className="flex flex-col items-center">
                  <div className="p-3 md:p-3.5 bg-[#FF8F1B] rounded-full shadow-md">
                    <Image
                      src="/bell.svg"
                      alt="bell_logo"
                      width={500}
                      height={500}
                      className="h-[42.03px] md:h-[40px] w-[42.03px] md:w-[40px]"
                    />
                  </div>

                  <h5
                    className={`mt-2 md:mt-2 ${notoTraditionalNushu.className} font-bold text-xs md:text-sm text-center`}
                  >
                    Panuntun<br/>Migunakake
                  </h5>
                </button>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
