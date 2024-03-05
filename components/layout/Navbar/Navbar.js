"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

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
    <div className="flex items-center justify-between border-b border-gray-400 py-8 mr-[2vw] ml-[2vw]">
      <Link href="/">
        <Image
          src="/img/navbar/wonderfulkuning.svg"
          alt="logo"
          width={100}
          height={100}
          className="z-9999999 logo w-[40vw] md:w-[20vw] lg:w-[10vw]"
        />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <FaBars className="z-9999999 text-[#EDD761] text-[6vw] md:text-[4vw] lg:text-[2vw]" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
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
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:hidden">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}