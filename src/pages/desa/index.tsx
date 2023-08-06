import NavPage from "@/components/NavPage/NavPage";
import SejarahDesa from "@/components/sejarahDesa/SejarahDesa";
import Button from "designsystem/dist/atom/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AccordionsDesa from "./Accordion";

export default function Desa() {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Tentang Desa</title>
        <meta name="description" content="desa bandung boyolali" />
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
      <main className="flex flex-col ">
        <NavPage
          className={{
            active: "text-yellow",
            idle: "text-black",
          }}
          cta={
            <>
              <Button className="relative px-8" state="primary">
                <Link href="https://app.desabandung-boyolali.web.id">
                  <a>Masuk</a>
                </Link>
              </Button>
            </>
          }
          pathname={pathname}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/desa">
            <a>Desa</a>
          </Link>
          <Link href="/potensidesa">
            <a>Potensi Desa</a>
          </Link>
          <Link href="/strukturdesa">
            <a>Struktur Desa</a>
          </Link>
        </NavPage>
        <section
          className="container mx-auto my-10"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-20 xl:gap-x-28">
            <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 my-1">
              <h1 className="text-yellow font-bold text-[32px] p-10">
                Desa Bandung Wonosegoro Boyolali
              </h1>
              <br />
              <AccordionsDesa />
            </div>

            <div className="relative max-w-[90%]">
              <div className="relative max-w-full w-[390px] h-[240px] xl:w-[490px] xl:h-[340px] rounded-[59px] overflow-hidden">
                <Image
                  src="/images/pohon.png"
                  priority
                  layout="fill"
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <SejarahDesa />
      </main>
    </>
  );
}
