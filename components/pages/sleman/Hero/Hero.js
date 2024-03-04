import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full items-center justify-center aspect-[360/790] flex flex-col md:aspect-[768/1024] xl:aspect-[1920/1080] bg-[url('/img/yogyakarta/hero/background_kota.svg')] lg:bg-[url('/img/yogyakarta/hero/background_kotalg.svg')] bg-cover lg:bg-cover xl:bg-[url('/img/yogyakarta/hero/background_kota2xl.svg')] xl:bg-bottom xl:h-screen">
      <div className="absolute bottom-0 z-[2000] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[6vw]"></div>
      <h1 className="font-thunderbold text-[24.444vw] md:text-[21.875vw] xl:text-[15.104vw] text-[#7D7A64] z-[1000] leading-none">
        KOTA
      </h1>
      <div className="max-xl:mt-[20vw] xl:mt-[2vw] z-[3000] flex flex-col items-center justify-center">
        <div className="relative">
          <h1
            className=" 
          font-thunder text-[5.706vw] lg:text-[3.125vw] xl:text-[1.563vw] text-[#F5F5F5] z-[3000]"
          >
            GULIR KE BAWAH
          </h1>
          <Image
            src="/img/yogyakarta/hero/polygon.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[6.5vw] left-[10.5vw] lg:w-[3.5vw] lg:left-[6vw] xl:w-[2vw] xl:left-[2.9vw] absolute"
          ></Image>
        </div>
      </div>
    </div>
  );
}
