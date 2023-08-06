import Image from "next/image";
import React from "react";
import GeografiDesa from "./GeografiDesa";

type Props = {};

function SejarahDesa({}: Props) {
  return (
    <>
      <div
        className="container mx-auto px-5 mt-10 text-justify"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="underline decoration-pink-500 font-bold text-xl xl:text-4xl md:text-3xl lg:text-3xl">
          SEJARAH DESA BANDUNG
        </h1>

        <p className="mb-3 text-black font-medium mt-5">
          Awal mulanya Desa Bandung, jika dilihat dari sejarah birokrasi mataram
          desa bandung bermula dari sebuah kademangan yang dipimpin oleh demang.
          Kademangan Bandung berdiri sekitar tahun 1970an. Sebelum Perjanjian
          Giyanti, Kademangan Bandung termasuk dalam kewilayahan Yogyakarta.
          Setelah Perjanjian Giyanti diikutkan ke wilayah Kasultanan Solo.
          Setelah kemerdekaan, nama kademangan diganti oleh kelurahan yang
          dipimpin oleh seorang lurah. Setelah adanya peraturan baru nama
          kelurahan diganti menjadi desa dan dipimpin oleh kepala desa.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="mb-3 text-black font-medium">
            Jika dilihat dari topografinya, daerah bandung termasuk wilayah
            perbatasan yaitu wilayah Grobogan (utara) dan Salatiga (barat).
            Dulunya desa Bandung termasuk wilayah gerilya pada masa perang
            diponegoro hingga kemerdekaan. Jika dilihat dari silisah Mataram,
            Desa Bandung termasuk desa tua. Hal ini dibuktikan dengan adanya
            pemakaman tua. Daerah bandung termasuk dalam daerah perbukitan dan
            perswahan. Desa bandung memiliki sawah sebesar 120 ha dan termasuk
            dalam sawah tadah hujan. Di samping itu, memiki daerah hutan di
            daerah Dusun Kebonagung yang dikelola orang perhutani. Budaya yang
            berkembang di masyarakat adalah budaya santri sehingga 100 persen
            masyarakat di Desa Bandung beragama Islam. Nama Bandung memiliki
            kaitannya dengan Bandung Bondowoso. Penamaan Desa Bandung di
            Kecamatan Wonosegoro Kabupaten Boyolali berangkat dari cerita
            leluhur turun temurun yang bersumber dari nenek moyang penduduk
            setempat.
          </p>
          <Image
            src="/images/desaSejarah.png"
            width={550}
            height={500}
            className="object-cover rounded-xl"
            alt="foto desa"
          />
        </div>
        <p className="mb-3 text-black font-medium">
          Nama Bandung rupanya diambil dari nama Bandung Bondowoso, seorang
          legenda yang bersedia membangunkan 1000 candi dalam waktu satu malam
          karena tergila-gila menikahi Roro Jonggrang. Menurut cerita penduduk
          setempat, jauh sebelum Bandung atau Joko Bandung bertemu dan jatuh
          cinta dengan Roro Jonggrang, ia terlebih dahulu punya misi mengalahkan
          kerajaan milik ayah Roro Jonggrang. Agar bisa mengalahkan ayah Roro
          Jonggrang, Bandung bertapa di bawah sebuah pohon beringin putih untuk
          menambah kesaktiannya. Tempat pertapaan tersebut hingga saat ini masih
          bisa dijumpai di Desa Bandung, kemudian dikenal dengan tempat
          Pertapaan Ringin Putih. Meski tidak diketahui seberapa lama pertapaan
          yang dilakukan Bandung, namun pada saat bertapa Bandung mendapat
          kesaktiannya setelah mengalahkan jin Bondowoso. Pada saat itulah,
          Bandung dan Bondowoso menyatu. Rahmat Handoyo, Kepala Desa Bandung,
          memperkirakan sejak saat ini Bandung kemudian dikenal dengan julukan
          Bandung Bondowoso.
        </p>
      </div>
      <GeografiDesa />
    </>
  );
}

export default SejarahDesa;
