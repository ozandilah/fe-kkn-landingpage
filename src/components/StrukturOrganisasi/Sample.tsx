import React from "react";
import CardStruktur from "./Organisasi";
import Button from "designsystem/dist/atom/Button";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

function StrukturDesa({}: Props) {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col justify-center items-center "
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <h3 className="text-center text-[#FFDE32] uppercase font-bold text-4xl">
          Struktur Organisasi
        </h3>
      </div>
      <div
        className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Rahmat Handoyo"
            subTitle="Kades Bandung"
            image="/images/rahmat.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined  h-[300px] w-[300px]"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Sarjono"
            subTitle="Kepala Dusun Bandung"
            image="/images/sarjono.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined  h-[300px] w-[300px]"
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="relative px-8 bg-orange rounded-full py-3 text-white"
            onClick={() => router.push("/strukturdesa")}
          >
            Lebih Banyak
          </button>
        </div>
      </div>
    </>
  );
}

export default StrukturDesa;
