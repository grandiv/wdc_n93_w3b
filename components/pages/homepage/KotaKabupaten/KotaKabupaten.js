export const DataKota = [
  {
    id: 1,
    kota: "YOGYAKARTA",
    gambar: "/img/homepage/kotakabupaten/jogjaswiper.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/yogyakarta/",
  },
  {
    id: 2,
    kota: "BANTUL",
    gambar: "/img/homepage/kotakabupaten/bantulswiper.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/bantul/",
  },
  {
    id: 3,
    kota: "SLEMAN",
    gambar: "/img/homepage/kotakabupaten/slemanswiper.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/sleman/",
  },
  {
    id: 4,
    kota: "PROGO",
    gambar: "/img/homepage/kotakabupaten/kpswiper.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/kulonprogo/",
  },
  {
    id: 5,
    kota: "KIDUL",
    gambar: "/img/homepage/kotakabupaten/gkswiper.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/gunungkidul/",
  },
];

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/app/globals.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/effect-coverflow";

function KotaKabupaten() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const router = useRouter();

  const handleViewMore = (e) => {
    e.preventDefault();
    const activeSlide = DataKota.find(
      (kotakab) => kotakab.id === activeSlideId
    );
    if (activeSlide) {
      router.push(activeSlide.link);
    }
  };

  return (
<<<<<<< HEAD
    <div className='h-[50vw]'>KotaKabupaten</div>
  )
=======
    <div className="relative flex items-center aspect-[360/700] flex-col lg:aspect-[1280/720] lg:items-start overflow-hidden">
      <div className="vignette-desktop">
        <Image
          src="/img/homepage/kotakabupaten/bg-desktop.png"
          alt="Kota Kabupaten Background Desktop"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-50 vignette-overlay"></div>
      </div>
      <div className="vignette lg:hidden">
        <Image
          src="/img/homepage/kotakabupaten/bg-mobile.png"
          alt="Kota Kabupaten Background Mobile"
          fill
        />
      </div>
      <div className="relative aspect-[360/328] lg:mt-[12vw] lg:ml-[4vw] lg:mb-[0vw] mt-[31vw] mb-[2vw]">
        {/* Header */}
        <div className="w-[75vw] h-[30vh] mr-[11vw] items-left lg:w-[30vw] lg:h-[15vh]">
          <h2 className="ml-[3vw] text-left font-thunderbold text-[#EDD761] text-[20.5vw] lg:text-[10vw]">
            {activeSlideId == 1
              ? "KOTA"
              : activeSlideId == 2 || activeSlideId == 3
                ? "KABUPATEN"
                : activeSlideId == 4
                  ? "KULON"
                  : activeSlideId == 5
                    ? "GUNUNG"
                    : ""}
          </h2>
          <h2 className="ml-[3vw] -translate-y-[6vh] md:-translate-y-[14vh] text-left font-thunderbold text-[#EDD761] text-[20.5vw] sm:-translate-y-[12vh] 2xl:-translate-y-[13vh] lg:-translate-y-[9vh] lg:text-[10vw]">
            {DataKota.find((kotakab) => kotakab.id === activeSlideId)?.kota}
          </h2>
          <div className="bottom-[7vh] md:bottom-[14vh] sm:bottom-[14vh] rounded-md bg-[#EDD761] lg:w-[10vw] 2xl:bottom-[19vh] lg:bottom-[12.5vh] flex relative left-[3vw] w-[30vw] h-[0.5vh]"></div>
          <div className="flex relative bottom-[5vh] sm:bottom-[10vh] md:bottom-[10vh] h-[9.5vh] w-[72vw] ml-[3vw] lg:w-[27vw] 2xl:bottom-[15.5vh] xl:h-[12vh]">
            <p className="font-thunder text-[5.4vw] lg:text-[1.6vw]">
              {DataKota.find((kotakab) => kotakab.id === activeSlideId)?.desc}
            </p>
          </div>
        </div>
      </div>
      <Swiper
        className="mySwiper w-[100%] lg:w-[50%] lg:h-[100%] lg:bottom-[13vh] 2xl:bottom-[21vh] lg:left-[28vw] absolute left-[11vw] mb-[4vh]"
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={false}
        slidesPerView={3}
        spaceBetween={15}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        initialSlide={0}
        onSlideChange={(swiper) => {
          setActiveSlideId(DataKota[swiper.realIndex].id);
        }}
      >
        {DataKota.map((kotakab) => {
          return (
            <SwiperSlide key={kotakab}>
              {/* Mobile */}
              <div className="aspect-[3/4]">
                <Image
                  src={kotakab.gambar}
                  alt={kotakab.kota}
                  fill
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative bg-[white] w-[37vw] md:h-[6vh] md:w-[30vw] md:right-[24vw] sm:h-[6vh] sm:w-[30vw] sm:right-[24vw] h-[5vh] lg:right-[0vw] lg:bottom-[13vh] lg:w-[11vw] lg:left-[7vw] lg:h-[4vh] right-[19vw] rounded-md items-center 2xl:h-[15vh]">
        <button
          onClick={handleViewMore}
          className="w-[37vw] 2xl:top-[0.8vh] 2xl:h-[5vh] lg:w-[11vw] lg:h-[4vh] sm:h-[6vh] sm:w-[30vw] md:h-[6vh] md:w-[30vw] h-[5vh] relative flex font-thundermedium lg:text-[1.5vw] text-[4.5vw] md:text-[3.5vw] text-[black] items-center"
        >
          <div className="2xl:top-[0vh] relative flex sm:left-[5vw] sm:top-[0.5vh] left-[25%] space-x-[5vw] lg:space-x-[2vw] lg:justify-center md:left-[25%] top-[0.1vh] lg:w-[11vw] lg:h-[4vh] lg:left-[0%] lg:top-[0vh] xl:h-[4.2vh] xl:mb-[0.5vh] 2xl:mb-[1.5vh]">
            <div className="2xl:h-[3vh] relative md:items-center lg:left-[10%] lg:top-[1vh] lg:h-[2.3vh]">
              VIEW MORE
            </div>
            <div className="2xl:top-[1vh] relative lg:h-[2.1vh] lg:top-[0.9vh] ml-[6vw] md:bottom-[0vh] mt-[0.3vh]">
              <GoArrowRight />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
>>>>>>> 22a76f8ed31904d9b1b0b2cafecbf0eb27a09c98
}

export default KotaKabupaten;
