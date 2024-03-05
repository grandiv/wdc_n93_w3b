import { React, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Description() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative w-full items-center justify-center flex flex-col bg-[#1d1d21] md:aspect-[768/643] aspect-[360/400] pt-[16vw] lg:pt-[8vw] lg:px-[11.979vw] lg:aspect-[1920/600]">
      <div>
        <Image
          src={
            "https://utfs.io/f/73863254-4564-4b5b-9114-923a5f664820-qnmyzz.svg"
          }
          width={1}
          height={1}
          alt="Picture of the author"
          className="lg:w-[44.105vw] mb-[2vw]"
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 0 })}
        ></Image>
      </div>
      <div className="relative items-center justify-center flex flex-col lg:flex-row mb-[16vw]">
        <div
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 1 })}
        >
          <Image
            src={
              "https://utfs.io/f/255699a0-4ec1-4c95-80bf-3cfbf823d27d-l13fdx.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw] md:w-[11.328vw] lg:w-[30vw] rotate-90 lg:rotate-0"
          ></Image>
        </div>
        <div
          className="m-[6.944vw] md:my-[3.125vw] md:mx-[10.547vw]  rounded-[6.667vw] lg:m-0 lg:rounded-[1.354vw] md:rounded-[3.646vw] border-white border-opacity-20 border-[0.278vw] lg:border-[0.052vw] bg-white bg-opacity-[0.01] flex justify-center items-center text-center"
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 2 })}
        >
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
        <div
          data-aos="fade-up"
          data-aos-duration={aosDuration}
          data-aos-delay={getDelay({ turn: 3 })}
        >
          <Image
            src={
              "https://utfs.io/f/255699a0-4ec1-4c95-80bf-3cfbf823d27d-l13fdx.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[17.944vw]  md:w-[11.328vw] lg:w-[30vw] -rotate-90 lg:-rotate-180"
          ></Image>
        </div>
      </div>
      <div
        className=" font-thunderbold text-[19.817vw] md:text-[9.289vw] lg:text-[17.587vw] my-[16vw] md:my-[5vw] lg:my-[7vw] leading-none tracking-widest bg-gradient-to-b from-white to-[#1D1D21] inline-block text-transparent bg-clip-text text-center"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 4 })}
      >
        SOROTAN
      </div>
    </div>
  );
}
