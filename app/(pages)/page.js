'use client';

import Alam from "@/components/pages/homepage/Alam/Alam";
import Budaya from "@/components/pages/homepage/Budaya/Budaya";
import Hero from "@/components/pages/homepage/Hero/Hero";
import KotaKabupaten from "@/components/pages/homepage/KotaKabupaten/KotaKabupaten";

export default function Home() {
  return (
    <>
      <Hero />
      <Budaya />
      <Alam />
      <KotaKabupaten />
    </>
  );
}
