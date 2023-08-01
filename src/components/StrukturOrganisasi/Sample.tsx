import React from "react";
import CardStruktur from "./Organisasi";
import Button from "designsystem/dist/atom/Button";
import Link from "next/link";

type Props = {};

function StrukturDesa({}: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-[#FFDE32] uppercase font-bold text-4xl">
          Struktur Organisasi
        </h3>
      </div>
      <div className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6">
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
          <Button className="relative px-8" state="primary">
            <Link href="/strukturdesa">
              <a>Lebih Banyak</a>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default StrukturDesa;
