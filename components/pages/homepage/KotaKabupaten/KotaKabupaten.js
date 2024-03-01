export const DataKota = [
  {
    id: 1,
    kota: "YOGYAKARTA",
    gambar: "/img/homepage/kotakabupaten/jogjaswiper.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/yogyakarta/",
  },
  {
    id: 2,
    kota: "BANTUL",
    gambar: "/img/homepage/kotakabupaten/bantulswiper.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/bantul/",
  },
  {
    id: 3,
    kota: "SLEMAN",
    gambar: "/img/homepage/kotakabupaten/slemanswiper.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/sleman/",
  },
  {
    id: 4,
    kota: "PROGO",
    gambar: "/img/homepage/kotakabupaten/kpswiper.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/kulonprogo/",
  },
  {
    id: 5,
    kota: "KIDUL",
    gambar: "/img/homepage/kotakabupaten/gkswiper.png",
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
    <div className="relative flex items-center max-md:aspect-[360/700] max-md:flex-col md:aspect-[1280/720] md:w-full md:justify-center max-md:overflow-hidden">
      <div className="">
        <Image
          src="/img/homepage/kotakabupaten/bg-desktop.png"
          alt="Kota Kabupaten Background Desktop"
          fill
          className="max-md:hidden"
        />
        <Image
          src="/img/homepage/kotakabupaten/bg-mobile.png"
          alt="Kota Kabupaten Background Mobile"
          fill
          className="md:hidden"
        />
      </div>
      <div className="relative max-md:aspect-[360/328] max-md:mt-[31vw] max-md:mb-[2vw] md:mb-[15.5vw] md:h-[40vh] md:max-h-[1vh] md:w-[64vw]">
        {/* Header */}
        <div className="-space-y-12 max-md:w-[75vw] max-md:h-[30vh] max-md:mr-[11vw] items-left md:justify-between">
          <h2 className="max-md:ml-[3vw] text-left font-thunderbold text-[#EDD761] max-md:text-[20.5vw]">
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
          <h2 className="max-md:ml-[3vw] text-left font-thunderbold text-[#EDD761] max-md:text-[20.5vw]">
            {DataKota.find((kotakab) => kotakab.id === activeSlideId)?.kota}
          </h2>
          <div className="max-md:top-[5vh] flex relative max-md:left-[3vw] w-[34vw] h-[0.7vh]">
            <Image
              src="/img/homepage/kotakabupaten/gariskuning.svg"
              alt="Garis Kuning"
              fill
              className="md:hidden"
            />
          </div>
          <div className="flex relative max-md:top-[13.5vh] max-md:h-[9.5vh] max-md:w-[72vw] max-md:ml-[3vw]">
            <p className="font-thunder text-[5.4vw]">
              {DataKota.find((kotakab) => kotakab.id === activeSlideId)?.desc}
            </p>
          </div>
        </div>
      </div>
      <Swiper
        className="mySwiper w-[100%] absolute left-[11vw] max-md:mb-[4vh]"
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
              <div className="md:hidden aspect-[3/4]">
                <Image
                  src={kotakab.gambar}
                  alt={kotakab.kota}
                  fill
                  className="w-full h-full"
                />
              </div>
              {/* Desktop */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="max-md:relative max-md:bg-[white] max-md:w-[37vw] max-md:h-[5vh] max-md:right-[19vw] max-md:rounded-md max-md:items-center">
        <button
          onClick={handleViewMore}
          className="max-md:w-[37vw] max-md:h-[5vh] max-md:relative max-md:flex font-thundermedium text-[black] max-md:items-center"
        >
          <span className="max-md:mr-5 max-md:relative max-md:left-[25%]">
            VIEW MORE
          </span>
          <div className="max-md:relative max-md:left-[6vw] max-md:bottom-[0.2vh]">
            <GoArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}

export default KotaKabupaten;
