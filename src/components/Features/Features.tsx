import Link from "next/link";
import React from "react";
import FeaturedMenuDua from "designsystem/dist/moleculs/FeaturedMenudua";
import { useRouter } from "next/router";
type Props = {};

function Features({}: Props) {
  const router = useRouter();
  return (
    <div className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6 ">
      <div className="my-2" data-aos="fade-right" data-aos-duration="1000">
        <FeaturedMenuDua
          image="/images/publik.jpg"
          button={
            <button
              className="text-black"
              onClick={() => router.push("#publik")}
            >
              Layanan Publik
            </button>
          }
        />
      </div>
      <div className="my-2" data-aos="fade-right" data-aos-duration="1000">
        <FeaturedMenuDua
          image="/images/desa.jpg"
          button={
            <button
              className="text-black"
              onClick={() => router.push("/potensidesa")}
            >
              Potensi Desa
            </button>
          }
        />
      </div>
      <div className="my-2" data-aos="fade-left" data-aos-duration="1000">
        <FeaturedMenuDua
          image="/images/goverment.jpg"
          button={
            <button
              className="text-black"
              onClick={() => router.push("/strukturdesa")}
            >
              Pemerintahan
            </button>
          }
        />
      </div>
      <div className="my-2" data-aos="fade-left" data-aos-duration="1000">
        <FeaturedMenuDua
          image="/images/galeri.jpg"
          button={
            <button
              className="text-black"
              onClick={() => router.push("#galeri")}
            >
              Galeri
            </button>
          }
        />
      </div>
    </div>
  );
}

export default Features;
