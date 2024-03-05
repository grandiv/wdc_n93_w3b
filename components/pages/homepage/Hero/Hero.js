import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "65%"]);
  const background3Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="w-full relative h-screen overflow-hidden grid place-items-center">
      <motion.h1
        style={{ y: textY }}
        className=" 
      font-thunderbold text-[15.104vw] text-[#EDD761] z-[8] absolute top-[5vw] scroll-smooth"
      >
        YOGYAKARTA
      </motion.h1>

      <div className="absolute bottom-[10vw] z-[3000] flex flex-col items-center justify-center scroll-smooth">
        <div className="relative">
          <h1
            className=" 
          font-thunder text-[1.563vw] text-[#EDD761] z-[3000]"
          >
            GULIR KE BAWAH
          </h1>
          <Image
            src={
              "https://utfs.io/f/daa63991-735f-4a24-98d5-b5586a57518b-acys0n.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[2vw] left-[2.8vw] absolute"
          ></Image>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "100vw",
          backgroundImage:
            "url(https://utfs.io/f/6a4008ed-ce6c-4c62-aa2f-99f616cac23b-1h.svg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute z-[30] inset-0"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/9db6ef63-7b41-485b-846b-c2389ba8ef82-1g.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background1Y,
        }}
      />
      <motion.div
        className="absolute z-[40] inset-0 bottom-0"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/804d987d-b28a-4be4-9764-aeaa1069cd7b-1f.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background2Y,
        }}
      />
      <motion.div
        className="absolute z-[100] inset-0 bottom-0"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/f5d67b22-600c-4d18-bc86-dbf9999c7c56-1e.svg)",
          backgroundSize: "100vw",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          y: background3Y,
        }}
      />
      <div
        className="absolute z-[1000] inset-0 bottom-0 bg-gradient-to-b from-transparent to-[#1d1d21] w-[99vw]"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/56012633-070e-430a-be9a-161b6995bd53-1d.svg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
        }}
      >
        <div className="absolute bottom-0 z-[2000] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
      </div>
    </div>
  );
}

export default Hero;
