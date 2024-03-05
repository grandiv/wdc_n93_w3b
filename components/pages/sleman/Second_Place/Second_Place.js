<<<<<<< HEAD
import React from "react";

export default function Second_Place() {
  return (
    <div className="relative w-full items-center justify-center flex md:aspect-[1252/557]"></div>
=======
import { React, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Second_Place() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full bg-[#1d1d21] md:aspect-[1252/557] aspect-[360/1000] lg:aspect-[1920/1044]">
      <div
        className="relative h-[120vw] md:h-[50vw] lg:h-[47.948vw] w-full bg-[url('https://utfs.io/f/82249a91-5d97-4802-862b-d646b29d4550-6ec0je.svg')] md:bg-[url('https://utfs.io/f/95f7b5e5-5d94-416b-8ad4-4a6a17eee617-6ec0ij.svg')] lg:bg-[url('https://utfs.io/f/5f2d952f-8cf9-41b2-9a9a-36135b1008e8-6ec0ho.svg')] rounded-t-[8.889vw] md:rounded-t-[4.167vw] lg:rounded-t-[3.75vw] bg-cover flex justify-center md:justify-start lg:bg-bottom"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}
      >
        <div className="absolute bottom-0 z-[0] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
        <h1 className=" font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#7D7A64] leading-none mt-[10vw] md:mt-[5vw] md:ml-[5vw] lg:mt-[3vw] lg:ml-[3vw]">
          KALIURANG
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className=" -translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg: z-[10000] lg:-translate-y-[24vw] md:hidden">
          <Image
            src={
              "https://utfs.io/f/49a0e19f-d995-4ae2-a1d7-c272faa57632-eqzpb6.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
          <Image
            src={
              "https://utfs.io/f/23a7baf1-30a0-4068-81c5-3a84cc45bd15-eqzq1v.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/381978b6-7ed1-477e-9ef4-7ea7f207af41-eqzqsk.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:mr-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw]">
            Terletak di utara Yogyakarta, terkenal dengan udara dinginnya dan
            menawarkan beragam lokasi wisata yang sempurna untuk bersantai dan
            menikmati keindahan alam.
          </p>
          <button className="bg-[#F5F5F5] flex justify-center items-center rounded-[2.514vw] md:rounded-[1.178vw] px-[5.556vw] md:px-[2.604vw] lg:px-[1vw] lg:py-[1vw] pt-[4.167vw] md:pt-[1.7vw] pb-[4vw] md:pb-[1.5vw] lg:mt-0 mt-[4vw] md:mt-[2vw] lg:w-[25vw] lg:rounded-[0.729vw]">
            <div className="flex items-start">
              <h2 className="text-black font-thundermedium md:font-thunder text-[4.919vw] md:text-[2.306vw] leading-none mr-[4vw] md:mr-[2vw] lg:mr-[1vw] lg:text-[1.427vw]">
                LIHAT LEBIH
              </h2>
              <Image
                src={
                  "https://utfs.io/f/8e4771a1-e181-4a5a-b6a2-c48cfb49e475-1jf9c9.svg"
                }
                width={1}
                height={1}
                alt="Picture of the author"
                className="w-[4vw] md:w-[2vw] lg:w-[1.427vw]"
              />
            </div>
          </button>
        </div>
        <div className=" -translate-y-[16vw] md:flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] z-[10000] lg:-translate-y-[23vw] hidden">
          <Image
            src={
              "https://utfs.io/f/49a0e19f-d995-4ae2-a1d7-c272faa57632-eqzpb6.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
          <Image
            src={
              "https://utfs.io/f/23a7baf1-30a0-4068-81c5-3a84cc45bd15-eqzq1v.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/381978b6-7ed1-477e-9ef4-7ea7f207af41-eqzqsk.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
        </div>
      </div>
    </div>
>>>>>>> d909f9831b0d7a46fc832ffb5b1c24fe292d1d88
  );
}
