import NavPage from "@/components/NavPage/NavPage";
import PageStruktur from "@/components/StrukturOrganisasi/PageStruktur";
import Button from "designsystem/dist/atom/Button";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

function StrukturDesa({}: Props) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Struktur Desa</title>
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
        <div className="relative">
          <h1 className="flex flex-col justify-center items-center text-[32px] text-yellow font-bold ">
            Struktur Organisasi
          </h1>
          <PageStruktur />
        </div>
      </main>
    </>
  );
}

export default StrukturDesa;
