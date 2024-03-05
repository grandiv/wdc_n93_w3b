"use client";

import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navbarItems = [
  {
    title: "Kota Yogyakarta",
    link: "/yogyakarta",
  },
  {
    title: "Bantul",
    link: "/bantul",
  },
  {
    title: "Gunung Kidul",
    link: "/gunungkidul",
  },
  {
    title: "Kulon Progo",
    link: "/kulonprogo",
  },
  {
    title: "Sleman",
    link: "/sleman",
  },
];

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="z-9999999 relatie flex flex-row justify-between lg:mt-[2vw] mt-[5vw]">
      <Link href="/" className="z-9999999 link mt-[0.5vw] mb-[2vw] ml-[2vw]">
        <Image
          src="/img/navbar/wonderfulkuning.svg"
          alt="logo"
          width={100}
          height={100}
          className="z-9999999 logo w-[40vw] md:w-[20vw] lg:w-[10vw]"
        />
      </Link>
      <section className="z-9999999 flex">
        <div
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="text-[#EDD761] mr-[4vw] z-9999999"
        >
          <FaBars className="z-9999999 text-[6vw] md:text-[4vw] lg:text-[2vw]" />
          <div
            className={
              isNavOpen
                ? "absolute w-full h-screen top-0 left-0 bg-[black] flex flex-col justify-evenly items-center"
                : "hidden pointer-events-none"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col text-[white] space-y-[2vw] z-99999999">
              <div className="text-[10vw] border-gray-400 uppercase">
                <Link href="/">Beranda</Link>
              </div>
              <div className="text-[10vw] border-gray-400 my-8 uppercase">
                Kabupaten
              </div>
              <div className="border-gray-400 space-y-[2vw] uppercase">
                {navbarItems.map((item, index) => (
                  <Link className="flex flex-col" href={item.link} key={index}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
