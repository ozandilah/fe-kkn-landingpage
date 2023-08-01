import Link from "next/link";
import React from "react";
import FeaturedMenuDua from "designsystem/dist/moleculs/FeaturedMenudua";
type Props = {};

function Features({}: Props) {
  return (
    <div className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6">
      <div className="my-2">
        <FeaturedMenuDua
          title="Layanan Publik"
          image="/images/publik.jpg"
          preimage="image-1"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuDua
          title="Potensi Desa"
          image="/images/desa.jpg"
          preimage="image-2"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuDua
          title="Pemerintahan"
          image="/images/goverment.jpg"
          preimage="image-3"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuDua
          title="Galeri"
          image="/images/galeri.jpg"
          preimage="image-4"
        />
      </div>
    </div>
  );
}

export default Features;
