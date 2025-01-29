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
    <div className="h-screen overflow-hidden">
      {/* Kelir */}
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
        className="fixed -bottom-8 left-[28.7px]"
      >
        <Image
          src="/kelir.svg"
          alt="kelir_img"
          width={500}
          height={500}
          className="w-[277.14px] h-[263.81px]"
        />
      </motion.div>

      {/* Left Cloud */}
      <motion.div
        variants={{
          hidden: {
            x: "-100%",
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              bounce: 0,
              delay: 1.5,
            },
          },
          exit: {
            x: "-100%",
            opacity: 0,
            transition: {
              bounce: 0,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-[154.64px] -left-44"
      >
        <Image
          src="/left-cloud.svg"
          alt="left-cloud_img"
          width={500}
          height={500}
          className="w-[601.9px] h-[234.13px]"
        />
      </motion.div>

      {/* Right Cloud */}
      <motion.div
        variants={{
          hidden: {
            x: "100%",
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              bounce: 0,
              delay: 1.5,
            },
          },
          exit: {
            x: "100%",
            opacity: 0,
            transition: {
              bounce: 0,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-[331.96px] -right-14"
      >
        <Image
          src="/right-cloud.svg"
          alt="right-cloud_img"
          width={500}
          height={500}
          className="w-[228.87px] h-[111.29px]"
        />
      </motion.div>

      <AnimatePresence>
        {isLoading ? (
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
            />
          </motion.div>
        ) : (
          <motion.div
            key={`${isLoading}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <div className="h-[67.5px] bg-[#452A00]"></div>

            <div className="mt-8">
              <motion.h1
                variants={DEFAULT_FADE_IN_OUT_ANIMATION(0.5)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${dynaPuff.className} text-[80px] font-bold text-center`}
              >
                Sinau Basa Jawi
              </motion.h1>
              <motion.h2
                variants={DEFAULT_FADE_IN_OUT_ANIMATION_WITHOUT_SCALE(0.5, 2)}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${shantellSans.className} text-[56px] font-extrabold text-center`}
              >
                ꦱꦶꦤꦲꦸꦧꦱꦗꦮꦶ
              </motion.h2>
            </div>

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
              className="flex justify-center items-start mt-24 gap-x-8"
            >
              {/* Home */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/")}>
                  <div className="p-6 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/home.svg"
                      alt="home_logo"
                      width={500}
                      height={500}
                      className="h-[63.05px] w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Home
                  </h5>
                </button>
              </motion.li>

              {/* Profile */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/profile")}>
                  <div className="p-6 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/profile.svg"
                      alt="profile_logo"
                      width={500}
                      height={500}
                      className="h-[63.05px] w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Wewangunan
                  </h5>
                </button>
              </motion.li>

              {/* Target */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/capaian-pasinaonan")}>
                  <div className="p-6 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/target.svg"
                      alt="target_logo"
                      width={500}
                      height={500}
                      className="h-[63.05px] w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Panjangka
                    <br />
                    Pasionaonan
                  </h5>
                </button>
              </motion.li>

              {/* Wulangan */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/wulangan")}>
                  <div className="p-6 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/book.svg"
                      alt="book_logo"
                      width={500}
                      height={500}
                      className="h-[63.05px] w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Wulangan
                  </h5>
                </button>
              </motion.li>

              {/* Sri Aji Jayabaya */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/sri-aji-jayabaya")}>
                  <div className="p-1.5 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/puppet.svg"
                      alt="puppet_logo"
                      width={500}
                      height={500}
                      className="h-[99.05px] w-[99.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Sri Aji
                    <br />
                    Jayabaya
                  </h5>
                </button>
              </motion.li>

              {/* Gladhen */}
              <motion.li variants={ITEM_VARIANTS}>
                <button onClick={() => handleRoute("/gladhen")}>
                  <div className="p-6 bg-[#FF8F1B] rounded-full">
                    <Image
                      src="/question.svg"
                      alt="question_logo"
                      width={500}
                      height={500}
                      className="h-[63.05px] w-[63.05px]"
                    />
                  </div>

                  <h5
                    className={`mt-4 ${notoTraditionalNushu.className} font-bold font-xl text-center`}
                  >
                    Gladhen
                  </h5>
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
