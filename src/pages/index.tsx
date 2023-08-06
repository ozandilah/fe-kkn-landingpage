import FloatButton from "@/components/ButtonFloat/FloatButton";
import Features from "@/components/Features/Features";
import FooterPage from "@/components/Footer/FooterPage";
import Navbars from "@/components/Navbar/Navbar";
import Villages from "@/components/ProfileVillage/village";
import StrukturDesa from "@/components/StrukturOrganisasi/Sample";
import Youtube from "@/components/Youtube/Sample";
import Head from "next/head";

import Blog from "@/components/Blogs";
import Galeries from "@/components/Galeri";
import { useEffect } from "react";

import AccordionsPage from "@/components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import AccordionsPotensiDesa from "@/components/Accordion Potensi Desa";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Desa Bandung Boyolali </title>
        <meta name="description" content="desa bandung" />
        <meta property="og:title" content="Desa Bandung Boyolali" />
        <meta
          property="og:description"
          content="Website Desa Bandung Boyolali"
        />
        <meta
          property="og:image"
          content="https://images.app.goo.gl/LxgCnM9zBrZkCXKUA"
        />
        <meta property="og:url" content="https://icodie.com" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex flex-col">
        <Navbars />

        <Villages />
        <Features />
        <StrukturDesa />
        <Youtube />
        <Blog />
        <Galeries />
        <AccordionsPage />
        <FloatButton />
        <FooterPage />
      </main>
    </>
  );
}
