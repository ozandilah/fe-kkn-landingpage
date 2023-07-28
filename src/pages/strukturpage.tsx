import NavPage from "@/components/NavPage/NavPage";
import PageStruktur from "@/components/StrukturOrganisasi/PageStruktur";
import StrukturDesa from "@/components/StrukturOrganisasi/Sample";
import Button from "designsystem/dist/atom/Button";
import Head from "next/head";
import Link from "next/link";

type Props = {};

function StrukturPage({}: Props) {
  return (
    <>
      <Head>
        <title>Struktur Desa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col ">
        <NavPage
          cta={
            <>
              <Button state="primary" className="relative px-8">
                <a>Sign In</a>
              </Button>
            </>
          }
          pathname="/home"
          className={{ active: "text-yellow", idle: "text-black" }}
        >
          <Link href="/home">
            <a>Home</a>
          </Link>

          <Link href="/desa">
            <a>Desa</a>
          </Link>

          <Link href="/potensidesa">
            <a>Potensi Desa</a>
          </Link>

          <Link href="/pemerintahan">
            <a>Pemerintahan</a>
          </Link>
          <Link href="/kegiatan">
            <a>Kegiatan</a>
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

export default StrukturPage;