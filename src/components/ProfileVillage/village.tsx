import SectionDua from "designsystem/dist/moleculs/Section-2";
import Button from "designsystem/dist/atom/Button";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function Villages() {
  const router = useRouter();
  return (
    <div
      className="my-20 gap-y-28 flex flex-col "
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <SectionDua
        content={{
          preheading: "Profil Desa",
          paragraph:
            "Desa Bandung, Wonosegoro, Boyolali terletak di Kecamatan Wonosegoro, Kabupaten Boyolali, Provinsi Jawa Tengah, Indonesia. Desa ini terletak di bagian utara Kecamatan Wonosegoro, sekitar 10 kilometer dari pusat kota Boyolali. ",
        }}
        image="/images/sectionDua.png"
        title="image"
        button={
          <button
            className="relative px-8 bg-orange rounded-full py-3 text-white"
            onClick={() => router.push("/desa")}
          >
            Tentang Desa
          </button>
        }
      />
    </div>
  );
}
