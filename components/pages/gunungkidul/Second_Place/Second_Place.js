import { React, useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { aosDuration, getDelay } from "../../../allPage/configs/aosConfig";

export default function Second_Place() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full bg-[#1d1d21] md:aspect-[1252/557] aspect-[360/1000] lg:aspect-[1920/1044]">
      <div
        className="relative h-[120vw] md:h-[50vw] lg:h-[47.948vw] w-full bg-[url('https://utfs.io/f/a5693ff6-aba9-4ce2-ab83-8fe938bdc8f5-1yha0.svg')] md:bg-[url('https://utfs.io/f/abf52bc2-2b4e-4f58-b245-7c92f68991ae-1yha1.svg')] lg:bg-[url('https://utfs.io/f/3c826b83-c21a-44c5-b5e0-7f18ce26eb84-1yha2.svg')] rounded-t-[8.889vw] md:rounded-t-[4.167vw] lg:rounded-t-[3.75vw] bg-cover flex justify-center md:justify-start lg:bg-bottom"
        data-aos="fade-up"
        data-aos-duration={aosDuration}
        data-aos-delay={getDelay({ turn: 0 })}
      >
        <div className="absolute bottom-0 z-[0] bg-gradient-to-b from-transparent to-[#1d1d21] w-full h-[5vw]"></div>
        <h1 className=" font-thunderboldLC text-[13.889vw] md:text-[6.51vw] text-[#3B5E69] leading-none mt-[10vw] md:mt-[5vw] md:ml-[5vw] lg:mt-[3vw] lg:ml-[3vw]">
          KESIRAT
        </h1>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:justify-center">
        <div className=" -translate-y-[16vw] flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] lg: z-[10000] lg:-translate-y-[24vw] md:hidden">
          <Image
            src={
              "https://utfs.io/f/5a11b208-8383-4a40-8a76-17f9838bbad1-1oovn9.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
          <Image
            src={
              "https://utfs.io/f/56c31389-d8bd-4f63-be57-8f0904cf2f8a-1oovo4.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/c97c8012-d265-4ccb-8309-a92eeca0ab44-1oovoz.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
        </div>
        <div className="border-white border-[0.278vw] border-opacity-20 rounded-[6.667vw] flex flex-col justify-center items-center py-[9.722vw] md:p-[3.646vw] px-[6.667vw] m-[6.667vw] md:m-0 -mt-[13vw] md:-mt-[17 vw] bg-white bg-opacity-[1px] md:py-0 md:h-[23vw] md:w-[45vw] md:rounded-[2.083vw] md:mr-[1.9vw] md:backdrop-blur-lg md:-translate-y-[15vw] md:border-[0.13vw] lg:w-[40vw] lg:h-[12.396vw] lg:flex-row">
          <p className=" font-thunder text-[5vw] text-center md:text-[2.344vw] lg:text-[1.458vw] lg:mr-[3vw]">
            Pemandangan laut selatan yang memukau dari ketinggian, membiaskan
            pengunjung menikmati keindahan alam dari sudut pandang yang unik.
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
        <div className=" -translate-y-[16vw] md:flex flex-row justify-center items-center h-[50vw] md:h-[22.5vw] z-[10000] lg:-translate-y-[23vw] hidden">
          <Image
            src={
              "https://utfs.io/f/5a11b208-8383-4a40-8a76-17f9838bbad1-1oovn9.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-end"
          />
          <Image
            src={
              "https://utfs.io/f/56c31389-d8bd-4f63-be57-8f0904cf2f8a-1oovo4.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-center"
          />
          <Image
            src={
              "https://utfs.io/f/c97c8012-d265-4ccb-8309-a92eeca0ab44-1oovoz.svg"
            }
            width={1}
            height={1}
            alt="Picture of the author"
            className="w-[32vw] md:w-[14vw] self-start"
          />
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
                      "https://utfs.io/f/8faf2a07-2ed9-4ccf-a562-a8e143c3ef03-2ubpq6.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="w-[80vw] md:hidden"
                  />
                  <Image
                    src={
                      "https://utfs.io/f/9dc09c96-85f4-4ddb-a235-fe931ad3c2ca-2ubpq7.svg"
                    }
                    width={1}
                    height={1}
                    alt="Picture of the author"
                    className="md:w-[90vw] w-[80vw] hidden md:block"
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
