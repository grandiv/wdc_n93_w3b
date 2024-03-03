import React from "react";
import Image from "next/image";

function Alam() {
  return (
    <div className="relative flex items-start aspect-[360/1600] flex-col overflow-hidden">
      {/* Text Box */}
      <div className="w-[20vw] h-[40vh] relative flex flex-col">
        <Image
          src={"/img/homepage/budayaalam/text-box.svg"}
          alt="Text Box"
          fill
          className=""
        />
      </div>
      {/* Background Platform */}
      <div className="h-[120vh] w-[260vw] relative flex flex-col">
        <Image
          src="/img/homepage/budayaalam/bg-platform.svg"
          alt="Background Budaya"
          fill
          className="translate-y-[50vh] -translate-x-[140vw] z-10"
        />
        <Image
          src="/img/homepage/budayaalam/bg-platform.svg"
          alt="Background Alam"
          fill
          className="-translate-x-[120vw] -translate-y-[3vh] z-10"
        />
      </div>
      {/* Tulisan 3D */}
      <div className="absolute h-[20vh] w-[100vw]">
        <Image
          src="/img/homepage/budayaalam/budaya.svg"
          alt="Tulisan Budaya"
          fill
          className="translate-y-[57vh] z-20 -translate-x-[17vw]"
        />
        <Image
          src="/img/homepage/budayaalam/alam.svg"
          alt="Tulisan Budaya"
          fill
          className="translate-y-[111vh] z-20 translate-x-[7vw]"
        />
      </div>
      {/* Foto Alam dan Budaya */}
      <div className="absolute h-[40vh] w-[130vw]">
        <Image
          src="/img/homepage/budayaalam/FOTO2 ALAM.svg"
          alt="Foto Alam"
          fill
          className="translate-y-[112vh] z-20 -translate-x-[50vw]"
        />
        <Image
          src="/img/homepage/budayaalam/FOTO2 BUDAYA.svg"
          alt="Foto Budaya"
          fill
          className="translate-y-[60vh] z-20 rotate-2 -translate-x-[5vw]"
        />
      </div>
      {/* Efek Bagian Alam */}
      <div className="absolute h-[25vh] left-[65vw] z-0 top-[66vh] w-[50vw]">
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className=""
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className=""
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] translate-x-[2vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[5vh] -translate-x-[16vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[12vh] -translate-x-[1vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[10vh] -translate-x-[30vw]"
        />
      </div>
      {/* Efek Bagian Budaya */}
      <div className="absolute h-[30vh] z-0 top-[5vh] w-[100vw]">
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[10vh]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[5vh] translate-x-[20vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[10vh] translate-x-[20vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] translate-x-[50vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] translate-x-[50vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] translate-x-[50vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[2vh] translate-x-[35vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[5vh] -translate-x-[20vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] -translate-x-[45vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="translate-y-[1vh] -translate-x-[45vw]"
        />
        <Image
          src="/img/homepage/budayaalam/efekcahaya.svg"
          alt="Efek Cahaya"
          fill
          className="-translate-y-[5vh] -translate-x-[25vw]"
        />
      </div>
      {/* Deskripsi Alam*/}
      <div className="absolute skew-y-[30deg] z-30 h-[30vh] left-[39vw] top-[109vh] w-[60vw]">
        <p className="text-[2.2vw] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
      {/* Deskripsi Budaya */}
      <div className="absolute z-30 h-[15vh] w-[50vw] top-[11vh] skew-y-[30deg] left-[50vw]">
        <p className="text-[2.2vw] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Alam;
