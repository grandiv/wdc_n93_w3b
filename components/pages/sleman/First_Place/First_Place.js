import { React, useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function First_Place() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative w-full bg-[#1d1d21] md:aspect-[1252/557] aspect-[360/1000] lg:aspect-[1920/1044]">
      <div
        className="relative h-[120vw] md:h-[50vw] lg:h-[47.948vw] w-full bg-[url('https://utfs.io/f/2fa9aee5-d006-4ddd-a2c1-dc4b249a6f79-wlc2f2.svg')] md:bg-[url('https://utfs.io/f/705992a0-36f5-49b2-be9f-846496858a75-wlc29n.svg')] lg:bg-[url('https://utfs.io/f/e3fb8e32-934f-4914-887a-3e0dc45da60c-wlc28v.svg')] rounded-t-[8.889vw] md:rounded-t-[4.167vw] lg:rounded-t-[3.75vw] bg-cover flex justify-center md:justify-end lg:bg-bottom"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}
      >
        <div className="absolute bottom-0 z-[0] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
        <h1 className=" font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#246F99] leading-none mt-[10vw] md:mt-[5vw] md:mr-[5vw] lg:mt-[3vw] lg:mr-[3vw]">
          PRAMBANAN
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className=" -translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg: z-[10000] lg:-translate-y-[24vw]">
          <Image
            src={
              "https://utfs.io/f/f39e5158-8d67-4b27-8c9d-43c9816cedfc-1tx1ia.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
          <Image
            src={
              "https://utfs.io/f/d6955311-b337-4141-b2ac-2fa6b367c4b0-wnx084.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/980188fd-ff49-4356-b21b-a1fd72da4c68-wnx085.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:ml-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw]">
            Sebuah keajaiban arsitektur yang menjadi ikon Yogyakarta,
            memancarkan kekayaan budaya yang mendalam, menawarkan pengunjung
            pengalaman yang tak terlupakan
          </p>
          <button
            className="bg-[#F5F5F5] flex justify-center items-center rounded-[2.514vw] md:rounded-[1.178vw] px-[5.556vw] md:px-[2.604vw] lg:px-[1vw] lg:py-[1vw] pt-[4.167vw] md:pt-[1.7vw] pb-[4vw] md:pb-[1.5vw] lg:mt-0 mt-[4vw] md:mt-[2vw] lg:w-[25vw] lg:rounded-[0.729vw]"
            onClick={() => setShowModal(true)}
          >
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
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999999999999999] outline-none focus:outline-none backdrop-blur-sm">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparant outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <button
                      type="button"
                      class="text-grey-400 bg-transparent bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/*body*/}
                  <Image
                    src={
                      "https://utfs.io/f/c07ce161-9e30-4066-ba41-2f3ff9f9f0e9-9226ys.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="w-[60vw] md:hidden"
                  />
                  <Image
                    src={
                      "https://utfs.io/f/caf95453-09a1-4943-a9f8-b930b7e562be-9226yt.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="w-[80vw] hidden md:block"
                  />
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}
