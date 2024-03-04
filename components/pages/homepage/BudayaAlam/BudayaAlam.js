import React from "react";
import Image from "next/image";

function BudayaAlam() {
  return (
    <div className="relative w-full aspect-[360/1600]">
      <div className="relative h-full flex items-start flex-col overflow-hidden">
        {/* Budaya */}
        <div className="absolute">
          {/* Bg Platform */}
          <Image
            src="/img/homepage/budayaalam/bg-platform.svg"
            alt="Background Budaya"
            fill
            className="z-10"
          />
          {/* Tulisan Budaya */}
          <div className="absolute">
            <Image
              src="/img/homepage/budayaalam/budaya.svg"
              alt="Tulisan Budaya"
              fill
              className="z-20"
            />
          </div>
        </div>
        {/* Alam */}
        <div className="absolute">
          {/* Bg Platform */}
          <Image
            src="/img/homepage/budayaalam/bg-platform.svg"
            alt="Background Alam"
            fill
            className="z-10"
          />
          {/* Tulisan Alam */}
          <div className="absolute">
            <Image
              src="/img/homepage/budayaalam/alam.svg"
              alt="Tulisan Budaya"
              fill
              className="z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudayaAlam;
