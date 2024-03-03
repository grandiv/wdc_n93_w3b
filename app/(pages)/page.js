"use client";

import BudayaAlam from "@/components/pages/homepage/BudayaAlam/BudayaAlam";
import Hero from "@/components/pages/homepage/Hero/Hero";
import KotaKabupaten from "@/components/pages/homepage/KotaKabupaten/KotaKabupaten";

export default function Home() {
  return (
    <>
      <Hero />
      <BudayaAlam />
      <KotaKabupaten />
    </>
  );
}
