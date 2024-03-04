import React from "react";
import Image from "next/image";

export default function First_Place() {
  return (
    <div className="relative w-full bg-[#1d1d21] md:aspect-[1252/557] aspect-[360/1000] lg:aspect-[1920/1044]">
      <div className="relative h-[120vw] md:h-[50vw] lg:h-[47.948vw] w-full bg-[url('/img/yogyakarta/first_place/tugu-bgsm.svg')] md:bg-[url('/img/yogyakarta/first_place/tugu-bgmd.svg')] lg:bg-[url('/img/yogyakarta/first_place/tugu-bglg.svg')] rounded-t-[8.889vw] md:rounded-t-[4.167vw] lg:rounded-t-[3.75vw] bg-cover flex justify-center md:justify-end lg:bg-bottom">
        <div className="absolute bottom-0 z-[0] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
        <h1 className=" font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#7D7A64] leading-none mt-[10vw] md:mt-[5vw] md:mr-[5vw] lg:mt-[3vw] lg:mr-[3vw]">
          TUGU JOGJA
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className=" -translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg: z-[10000] lg:-translate-y-[24vw]">
          <Image
            src="/img/yogyakarta/first_place/tugu-1.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
          <Image
            src="/img/yogyakarta/first_place/tugu-2.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src="/img/yogyakarta/first_place/tugu-3.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:ml-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw]">
            Tugu Yogyakarta atau disebut juga Tugu Golong Gilig atau Tugu Pal
            Putih merupakan ikon Yogyakarta yang sudah mengalami perubahan
            karena gempa yang terjadi pada tahun 1867.
          </p>
          <button className="bg-[#F5F5F5] flex justify-center items-center rounded-[2.514vw] md:rounded-[1.178vw] px-[5.556vw] md:px-[2.604vw] lg:px-[1vw] lg:py-[1vw] pt-[4.167vw] md:pt-[1.7vw] pb-[4vw] md:pb-[1.5vw] lg:mt-0 mt-[4vw] md:mt-[2vw] lg:w-[25vw] lg:rounded-[0.729vw]">
            <div className="flex items-start">
              <h2 className="text-black font-thundermedium md:font-thunder text-[4.919vw] md:text-[2.306vw] leading-none mr-[4vw] md:mr-[2vw] lg:mr-[1vw] lg:text-[1.427vw]">
                LIHAT LEBIH
              </h2>
              <Image
                src="/img/yogyakarta/first_place/arrow.svg"
                width={1}
                height={1}
                alt="Picture of the author"
                className="w-[4vw] md:w-[2vw] lg:w-[1.427vw]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
