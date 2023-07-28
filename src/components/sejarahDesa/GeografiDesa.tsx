import React from "react";

type Props = {};

function GeografiDesa({}: Props) {
  return (
    <div className="container mx-auto px-16  text-justify">
      <h1 className="underline decoration-pink-500 font-bold text-xl">
        Kondisi Geografi
      </h1>

      <div className="">
        <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
          Desa Bandung merupakan salah satu desa di wilayah Kecamatan Wonosegoro
          dengan batas wilayah sebagai berikut:
        </p>
        <ul className="list-disc ml-10 mb-5">
          <li>Sebelah Utara : Desa Garangan Kecamatan Wonosegoro</li>
          <li>
            Sebelah Timur : Desa Wonosegoro, Ds. Gosono Kecamatan Wonosegoro
          </li>
          <li>Sebelah Selatan : Desa Ketoyan Kecamatan Wonosegoro</li>
          <li>Sebelah Barat : Desa Kedungpilang Kecamatan Wonosegoro</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400 mb-5">
          Luas Wilayah Desa Bandung 333,35 Ha dengan rincian terlihat pada tabel
          berikut :
        </p>
        <p className="text-gray-500 text-center mb-3">PENGGUNAAN TANAH</p>
        <div className="flex flex-col justify-center items-center mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Penggunaan
                </th>
                <th scope="col" className="px-6 py-3">
                  LUAS ( Ha )
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Luas tanah pekarangan/ Bangunan 93.45
                </th>
                <td className="px-6 py-4">93.45</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Luas tanah sawah
                </th>
                <td className="px-6 py-4">133,85</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Luas tanah kering/tegalan
                </th>
                <td className="px-6 py-4">104,55</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Luas Kuburan
                </th>
                <td className="px-6 py-4">1,5</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Total luas
                </th>
                <td className="px-6 py-4">333,35</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="">
          Desa Bandung berada pada ketinggian 750 meter dari permukaan laut.
          Secara administrasi Desa Bandung terbagi menjadi 3 (tiga) Dusun yang
          terbagi menjadi 7 (tujuh) Rukun Warga(RW) dan 21(dua puluh satu) Rukun
          Tangga (RT) sebagaimana tabel berikut:
        </p>
        <p className="text-gray-500 text-center mb-3 mt-3">
          PEMBAGIAN WILAYAH ADMINISTRATIF
        </p>
        <div className="flex flex-col justify-center items-center mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  NAMA DUSUN
                </th>
                <th scope="col" className="px-6 py-3">
                  NAMA RW
                </th>
                <th scope="col" className="px-6 py-3">
                  JUMLAH RT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">4</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dusun Bandung Kulon
                </th>
                <td className="px-6 py-4">RW 01, 02, 03</td>
                <td className="px-6 py-4">9</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dusun Bandung Wetan
                </th>
                <td className="px-6 py-4">RW 04, 05</td>
                <td className="px-6 py-4">6</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dusun Kebonagung
                </th>
                <td className="px-6 py-4">RW 06, 07</td>
                <td className="px-6 py-4">6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="underline decoration-pink-500 font-bold text-xl">
        Kondisi Demografi
      </h1>

      <div className="">
        <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
          Jumlah penduduk DESA BANDUNG pada bulan September tahun 2023 sebanyak
          3.167 jiwa , yang terdiri dari:
        </p>
        <ul className="list-disc ml-10 mb-5">
          <li>Penduduk laki – laki sebanyak 1.596 jiwa</li>
          <li>Penduduk perempuan sebanyak 1.571 jiwa</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400 mb-5">
          Sedangkan Kepala Keluarga sebanyak 981 KK. Adapun jumlah penduduk
          menurut usia dapat dilihat pada tabel berikut:
        </p>
        <p className="text-gray-500 text-center mb-3">
          JUMLAH PENDUDUK MENURUT USIA
        </p>
        <div className="flex flex-col justify-center items-center mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  UMUR ( TAHUN )
                </th>
                <th scope="col" className="px-6 py-3">
                  JUMLAH ( JIWA )
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">3</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  0 – 4 Tahun
                </th>
                <td className="px-6 py-4">180</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  5 – 9 Tahun
                </th>
                <td className="px-6 py-4">195</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  10 – 14 Tahun
                </th>
                <td className="px-6 py-4">219</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  15 – 19 Tahun
                </th>
                <td className="px-6 py-4">226</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  20 – 24 Tahun
                </th>
                <td className="px-6 py-4">304</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  25 – 29 Tahun
                </th>
                <td className="px-6 py-4">263</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  30 – 34 Tahun
                </th>
                <td className="px-6 py-4">304</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  35 – 39 Tahun
                </th>
                <td className="px-6 py-4">294</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  40 – 44 Tahun
                </th>
                <td className="px-6 py-4">234</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  45 – 49 Tahun
                </th>
                <td className="px-6 py-4">225</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  50 – 54 Tahun
                </th>
                <td className="px-6 py-4">219</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  55 – 59 Tahun
                </th>
                <td className="px-6 py-4">162</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  60 – 64 Tahun
                </th>
                <td className="px-6 py-4">131</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  65 – 69 Tahun
                </th>
                <td className="px-6 py-4">102</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  70 – 74 Tahun
                </th>
                <td className="px-6 py-4">78</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  &gt; 75 Tahun
                </th>
                <td className="px-6 py-4">78</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jumlah
                </th>
                <td className="px-6 py-4">3.167</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="underline decoration-pink-500 font-bold text-xl">
        Keadaan Sosial
      </h1>

      <div className="">
        <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
          Kondisi sosial masyarakat Desa Bandung ditunjukkan masih rendahnya
          kualitas dari sebagian besar SDM masyarakat serta cenderung masih
          kuatnya budaya paternalistik. Meskipun demikian pola budaya seperti
          ini dapat dikembangkan sebagai kekuatan dalam pembangunan yang
          bersifat mobilitas masa .Disamping itu masyarakat Desa Bandung yang
          cenderung memiliki sifat ekspresif, agamis dan terbuka dapat
          dimanfaatkan sebagai pendorong budaya transparansi dalam setiap
          penyelenggaraan pemerintahan dan pembangunan. Munculnya masalah
          kemiskinan, ketenagakerjaan dan perburuhan menyangkut pendapatan,
          status pemanfaatan lahan pada fasilitas umum menunjukkan masih adanya
          kelemahan pemahaman masyarakat terhadap hukum yang ada saat ini. Hal
          tersebut sebagai akibat dari tidak meratanya tingkat pendidikan yang
          diperoleh masyarakat.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-5">
          Adapun tingkat pendidikan masyarakat Desa Bandung dapat dilihat pada
          tabel berikut:
        </p>
        <p className="text-gray-500 text-center mb-3">
          JUMLAH PENDUDUK MENURUT TINGKAT PENDIDIKAN
        </p>
        <div className="flex flex-col justify-center items-center mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tingkat Pendidikan
                </th>
                <th scope="col" className="px-6 py-3">
                  Jumlah jiwa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">5</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tidak / Belum Sekolah
                </th>
                <td className="px-6 py-4">300</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Belum Tamat SD/Sederajat 393
                </th>
                <td className="px-6 py-4">393</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tamat SD/ sederajat
                </th>
                <td className="px-6 py-4">980</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tamat SLTP / sederajat
                </th>
                <td className="px-6 py-4">800</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tamat SLTA/ sederajat
                </th>
                <td className="px-6 py-4">662</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Diploma I/II
                </th>
                <td className="px-6 py-4">9</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Akademi/Diploma III/S.Muda
                </th>
                <td className="px-6 py-4">20</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Diploma IV/Strata I
                </th>
                <td className="px-6 py-4">60</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Strata II
                </th>
                <td className="px-6 py-4">2</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Starta III
                </th>
                <td className="px-6 py-4">1</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jumlah
                </th>
                <td className="px-6 py-4">3.167</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
            Sedangkan Sarana pendidikan formal cukup memadai dalam rangka
            meningkatkan kualitas peserta didik, Pemerintah Desa beserta warga
            masyarakat sedang melakukan peningkatan sarana pendidikan berupa
            rehabilitasi sarana pendidikan seperti terlihat dalam tabel berikut:
          </p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SARANA PENDIDIKAN
                </th>
                <th scope="col" className="px-6 py-3">
                  JUMLAH ( BUAH )
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">3</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Gedung SD dan MI
                </th>
                <td className="px-6 py-4">2</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Gedung TK dan RA
                </th>
                <td className="px-6 py-4">3</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  TPA
                </th>
                <td className="px-6 py-4">5</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  JUMLAH
                </th>
                <td className="px-6 py-4">10</td>
              </tr>
            </tbody>
          </table>

          <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
            Dilihat dari tingkat ketaqwaan terhadap Tuhan Yang Maha Esa Penduduk
            DESA BANDUNG 100%,walaupun kadang sesekali sesama pemeluk agama
            Islam muncul permasalahan kecil tentang keyakinan dan tata cara
            beribadah, namun hal tersebut tidak menimbulkan konflik antar warga.
            Adapun jumlah Penduduk Desa Bandung berdasar agama/kepercayaan dan
            sarana ibadah adalah sebagai berikut :
          </p>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  AGAMA
                </th>
                <th scope="col" className="px-6 py-3">
                  JUMLAH ( JIWA )
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">3</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Islam
                </th>
                <td className="px-6 py-4">3.167</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kristen
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Katholik
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Budha
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kepercayaan
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Hindu
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  colSpan={2}
                >
                  SARANA TEMPAT IBADAH
                </th>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Masjid
                </th>
                <td className="px-6 py-4">4</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Musholla
                </th>
                <td className="px-6 py-4">29</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Vihara
                </th>
                <td className="px-6 py-4">Vihara</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Gereja / Rumah Ibadah
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pura
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
          Disamping itu Pemerintah DESA BANDUNG berupaya menyediakan sarana
          kesehatan agar kesejahteraan masyarakat terjamin.
        </p>
      </div>

      <h1 className="underline decoration-pink-500 font-bold text-xl">
        Kondisi Ekonomi
      </h1>
      <div className="">
        <p className="mb-3 text-gray-500 dark:text-gray-400 mt-5">
          Perekonomian Desa Bandung secara umum didominasi pada sektor pertanian
          yang sistem pengelolaannya masih semi tradisional (pengolahan lahan,
          pola tanam maupun pemilihan komoditas produk pertaniannya). Lahan
          pertanian yang ada di Desa Bandung sebagian besar lahan dengan
          pengairan Irigasi Semi permanen dan hanya sebagian kecil lahan yang
          pengairanya dengan irigasi permanen.Cara bertanam sudah cukup
          Fariasi.Hortikultura menjadi alternatif terbaru untuk peningkatan
          perekonomian warga. Disamping itu warga masyarakat ada yang menekuni
          sektor perdagangan, peternakan dll. Untuk lebih jelasnya dapat dilihat
          pada tabel 10 di bawah ini:
        </p>

        <p className="text-gray-500 text-center mb-3">
          JUMLAH PENDUDUK MENURUT PEKERJAAN
        </p>
        <div className="flex flex-col justify-center items-center mb-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Jenis Pekerjaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Laki-laki
                </th>
                <th scope="col" className="px-6 py-3">
                  Perempuan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">3</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Petani
                </th>
                <td className="px-6 py-4">400</td>
                <td className="px-6 py-4">400</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pensiunan
                </th>
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pedagang
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">7</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pegawai Negeri Sipil
                </th>
                <td className="px-6 py-4">9</td>
                <td className="px-6 py-4">10</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Bidan swasta
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  POLRI
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">1</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Guru swasta
                </th>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">21</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Kayu
                </th>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Batu
                </th>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pembantu rumah tangga
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">15</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Wiraswasta
                </th>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">125</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Belum Bekerja
                </th>
                <td className="px-6 py-4">298</td>
                <td className="px-6 py-4">323</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pelajar
                </th>
                <td className="px-6 py-4">310</td>
                <td className="px-6 py-4">330</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Ibu Rumah Tangga
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">330</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Ibu Rumah Tangga
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">244</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Perangkat Desa
                </th>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">2</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Buruh Harian Lepas
                </th>
                <td className="px-6 py-4">22</td>
                <td className="px-6 py-4">10</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kontraktor
                </th>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jasa penyewaan peralatan pesta
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">1</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Jahit
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">10</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Rias
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">1</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Juru Masak
                </th>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Karyawan Honorer
                </th>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">6</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Cukur
                </th>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Las
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tukang Listrik
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GeografiDesa;
