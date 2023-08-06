import AccordionsPagePotensiDesa from "@/components/Accordion Potensi Desa";
import NavPage from "@/components/NavPage/NavPage";
import Button from "designsystem/dist/atom/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function potensidesa({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Potensi Desa</title>
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
      <main className="flex flex-col">
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
        <section>
          <AccordionsPagePotensiDesa />
        </section>
      </main>
    </>
  );
}

export default potensidesa;
