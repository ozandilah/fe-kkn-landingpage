import SectionDua from "designsystem/dist/moleculs/Section-2";
import Button from "designsystem/dist/atom/Button";
import Link from "next/link";
type Props = {};

function Villages({}: Props) {
  return (
    <div className="my-20 gap-y-28 flex flex-col">
      <SectionDua
        content={{
          preheading: "Profil Desa",
          paragraph:
            "Desa Bandung, Wonosegoro, Boyolali terletak di Kecamatan Wonosegoro, Kabupaten Boyolali, Provinsi Jawa Tengah, Indonesia. Desa ini terletak di bagian utara Kecamatan Wonosegoro, sekitar 10 kilometer dari pusat kota Boyolali. ",
        }}
        image="/images/sectionDua.png"
        title="image"
        button={
          <Button className="relative px-8" state="primary">
            <Link href="/desa">
              <a>Tentang Desa</a>
            </Link>
          </Button>
        }
      />
    </div>
  );
}

export default Villages;
