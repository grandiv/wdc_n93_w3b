import React from "react";
import Image from "next/image";

export default function Deskripsi() {
  return (
    <div className="relative w-full items-center justify-center flex flex-col bg-[#1d1d21] md:aspect-[768/643] aspect-[360/590] py-[36.944vw] md:py-0 lg:px-[11.979vw] lg:aspect-[1920/600]">
      <div>
        <Image
          src="/img/yogyakarta/description/ornamentlg.svg"
          width={1}
          height={1}
          alt="Picture of the author"
          className="lg:w-[44.105vw] mb-[2vw]"
        ></Image>
      </div>
      <div className="relative items-center justify-center flex flex-col lg:flex-row">
        <div>
          <Image
            src="/img/yogyakarta/description/flower.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw] md:w-[11.328vw] lg:w-[30vw] rotate-90 lg:rotate-0"
          ></Image>
        </div>
        <div className="m-[6.944vw] md:my-[3.125vw] md:mx-[10.547vw]  rounded-[6.667vw] lg:m-0 lg:rounded-[1.354vw] md:rounded-[3.646vw] border-white border-opacity-20 border-[0.278vw] lg:border-[0.052vw] bg-white bg-opacity-[0.01] flex justify-center items-center text-center ">
          <p className="font-thunder text-[5vw] m-[6.3vw] md:m-[3.385vw] my-[12vw] lg:mx-[4.427vw] lg:my-[1.979vw] md:text-[2.344vw] lg:text-[1.458vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Image
            src="/img/yogyakarta/description/flower.svg"
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw]  md:w-[11.328vw] lg:w-[30vw] -rotate-90 lg:-rotate-180"
          ></Image>
        </div>
      </div>
    </div>
  );
}
