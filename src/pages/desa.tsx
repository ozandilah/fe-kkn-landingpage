import NavPage from "@/components/NavPage/NavPage";
import SejarahDesa from "@/components/sejarahDesa/SejarahDesa";
import Button from "designsystem/dist/atom/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Desa({}: Props) {
  return (
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
      <section className="container mx-auto px-16 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-20 xl:gap-x-28">
          <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 my-1">
            <h1 className="text-yellow font-bold text-[32px] ">
              Desa Bandung Banyuwangi
            </h1>
            <br />
            <h1 className="text-navy font-semibold text-[15px] mb-3">Visi</h1>

            <h2 className="text-navy font-semibold text-[14px] mb-3">
              “BALDATUN THOYYIBATUN WA RABBUUN GHOFUR” <br />
              <span className="">
                (Terwujudnya Desa Bandung yang Makmur, Adil dan Sejahtera di
                segala Aspek Kehidupan)
              </span>
            </h2>
            <h1 className="text-navy font-semibold text-[15px] mb-3">Misi</h1>
            <ul className="list-disc text-[13px]">
              <li>
                Membenahi Birokrasi Aparatur Desa sesuai dengan aturan dan
                Tupoksinya.
              </li>
              <li>
                Menjadikan Pemerintahan Desa yang tanggap Aspiratif dalam
                menyikapi Aspirasi Masyarakat.
              </li>
              <li>Menata Administrasi yang Solid dan Akuntabel.</li>
              <li>
                Pemerataan dalam Membangun Sarana dan Prasarana Infrastruktur
                berdasarkan Prioritas dan Musyawarah.
              </li>
              <li>
                Mengaktifkan dan Mengoptimalkan Pembinaan Generasi Muda Karang
                Taruna.
              </li>
              <li>
                Membina dan Memajukan Kesehatan dan Pendidikan Formal dan Non
                formal.
              </li>
              <li>
                Memperkokoh Persatuan dan Kesatuan Warga, Menciptakan Keamanan
                dan Ketetraman serta Kedamaian.
              </li>
              <li>
                Memberikan Pelayanan dan Pengabdian yang mudah kepada
                Masyarakat.
              </li>
              <li>
                Merangsang dan Mendukung kegiatan Kemasyarakatan dalam
                kelembagaan perorangan maupun kelompok
              </li>
            </ul>
          </div>

          <div className="relative max-w-[90%]">
            <div className="relative max-w-full w-[390px] h-[240px] xl:w-[490px] xl:h-[340px] rounded-[59px] overflow-hidden">
              <Image
                src="/images/image-hero.jpg"
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
  );
}

export default Desa;