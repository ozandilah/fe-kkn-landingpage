import React from "react";
import CardStruktur from "./Organisasi";
import Button from "designsystem/dist/atom/Button";
import Link from "next/link";

type Props = {};

function StrukturDesa({}: Props) {
  return (
    <>
      <div className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Ketua"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Wakil Ketua"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full flex justify-center">
          <Button className="relative px-8" state="primary">
            <Link href="/strukturpage">
              <a>Lebih Banyak</a>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default StrukturDesa;
