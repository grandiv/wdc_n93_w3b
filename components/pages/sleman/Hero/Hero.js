<<<<<<< HEAD
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full items-center justify-center aspect-[360/790] flex flex-col md:aspect-[768/1024] xl:aspect-[1920/1080] bg-[url('/img/yogyakarta/hero/background_kota.svg')] lg:bg-[url('/img/yogyakarta/hero/background_kotalg.svg')] bg-cover lg:bg-cover xl:bg-[url('/img/yogyakarta/hero/background_kota2xl.svg')] xl:bg-bottom xl:h-screen">
      <div className="absolute bottom-0 z-[2000] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[6vw]"></div>
      <h1 className="font-thunderbold text-[24.444vw] md:text-[21.875vw] xl:text-[15.104vw] text-[#7D7A64] z-[1000] leading-none">
        KOTA
=======
import { React, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full items-center justify-center aspect-[360/790] flex flex-col md:aspect-[768/1024] lg:aspect-[1920/1080] bg-[url('/img/sleman/hero/background_sleman.svg')] md:bg-[url('/img/sleman/hero/background_slemanmd.svg')] bg-cover lg:bg-cover lg:bg-[url('/img/sleman/hero/background_slemanlg.svg')] bg-bottom max-2xl:h-screen"
      data-aos="fade-up"
      data-aos-duration={aosDuration}
      data-aos-delay={getDelay({ turn: 0 })}
    >
      <div className="absolute bottom-0 z-[2000] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[6vw]"></div>
      <h1
        className="font-thunderbold text-[24.444vw] md:text-[21.875vw] lg:text-[15.104vw] text-[#7D7A64] z-[1000] leading-none"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}
      >
        SLEMAN
>>>>>>> d909f9831b0d7a46fc832ffb5b1c24fe292d1d88
      </h1>
      <div className="max-xl:mt-[20vw] xl:mt-[2vw] z-[3000] flex flex-col items-center justify-center">
        <div className="relative">
          <h1
            className=" 
<<<<<<< HEAD
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
=======
          font-thunder text-[5.706vw] md:text-[3.125vw] lg:text-[1.563vw] text-[#F5F5F5] z-[3000]"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
            data-aos-delay={getDelay({ turn: 1 })}
          >
            GULIR KE BAWAH
          </h1>
          <button onClick={() => handleClick()}>
            <Image
              src="/img/sleman/hero/polygon.svg"
              width={1}
              height={1}
              alt="Picture of the author"
              className="w-[6.5vw] left-[10.5vw] md:w-[3.5vw] md:left-[6vw] lg:w-[2vw] lg:left-[2.9vw] absolute"
              data-aos="fade-up"
              data-aos-duration={aosDuration}
              data-aos-delay={getDelay({ turn: 0 })}
            ></Image>
          </button>
>>>>>>> d909f9831b0d7a46fc832ffb5b1c24fe292d1d88
        </div>
      </div>
    </div>
  );
}
