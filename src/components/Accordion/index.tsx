import React, { useState } from "react";
import { AccordionItem } from "./Accordions";

interface AccordionData {
  title: string;
  desc: JSX.Element; // Ensure desc is of type JSX.Element
}

const accordionData: AccordionData[] = [
  {
    title: "Pengajuan Akta Kelahiran",
    desc: (
      <>
        <p className="pt-5 text-justify">
          1. Surat Kelahiran dari penolong (Rumah Sakit/Puskesmas/Bidan) <br />
          2. FC.Buku Nikah / Kutipan Akta Perkawinan di legalisir <br />
          3. KTP el Orang Tua \n 4. FC.KTP el Orang Tua berwarna
          <br /> 5. Kartu Keluarga (KK) <br />
          6. FC. Berwarna KTP Saksi 2 (dua) Orang <br />
          7. FC.KTP el Pelapor (ayah bayi / yang mengajukan)
          <br /> 8. FC.Ijasah (Bagi yang sudah memiliki, pemohon usia diatas 7
          Tahun) <br /> 9. Surat pernyataan bagi anak yang jarak kelahirannya
          lebih dari 10 tahun dari anak sebelumnya atau dari usia perkawinan.
          <br />
          (surat disediakan desa cukup membawa materai 10 ribuan)
        </p>
      </>
    ),
  },
  {
    title: "Pengajuan Akta Kematian",
    desc: (
      <>
        <p className="pt-5 text-justify">
          1. Surat Keterangan Kematian Asli dari Dokter / Rumah Sakit, apabila
          tidak dapat menunjukkan maka di lampiri SPTJM Kebenaran Kematian
          Bermaterai (Surat disediakan desa cukup membawa materai 10 ribuan){" "}
          <br />
          2. Surat Keterangan Kematian dari Desa (surat kuning) <br /> 3. KTP
          dan KK Aseli yang meninggal <br /> 4. Fc.KTP orang tua jenasah, jika
          sudah meninggal (salah satu dan atau ke duanya), maka di lampiri SPTJM
          Kebenaran Data Kematian Orang Tua Bermaterai (Surat disediakan desa
          cukup membawa materai 10 ribuan) <br /> 5. KTP Pasangan (jika salah
          satu pasangannya suami / istri yang meninggal) <br /> 6. Fc.KTP
          berwarna 2 orang saksi (minimal berumur 21 tahun / sudah menikah){" "}
          <br />
          7. Fc.KK dan KTP Ahli Waris (pasangan dan anak kandung) & (jika
          pengajuan Akta Kematian yang sudah tidak ada di database) <br />
          8. Fc.Buku Nikah / Akta Perkawinan, apabila tidak memiliki di lampiri
          SPTJM Kebenaran sebagai pasangan suami istri, jika status perkawinan
          di KTP el dan KK adalah kawin
        </p>
      </>
    ),
  },
  {
    title: "Pengajuan Pembuatan E-KTP",
    desc: (
      <>
        <p className="pt-5 text-justify">
          1. Fc.Kartu Keluarga <br />
          2. Fc. Akte Kelahiran <br /> 3. Telah berusia 17 tahun <br />
          4. Surat Kehilangan dari POLSEK (Apabila E-KTP Hilang) <br />
          5. E-KTP Lama ( Apabila E-KTP Rusak)
        </p>
      </>
    ),
  },
  {
    title: "Pengajuan Penerbitan Kartu Keluarga (KK)",
    desc: (
      <>
        <p className="pt-5 text-justify">
          1. Penerbitan KK Baru bagi Penduduk WNI karena membentuk keluarga baru
          : <br /> &nbsp;&nbsp;a. Fc.KK Lama <br /> &nbsp;&nbsp;b. Surat
          Keterangan Pindah (SKPWNI) <br /> &nbsp;&nbsp;c. Fc.Buku Nikah /
          Kutipan Akta Perkawinan / Kutipan Akta Perceraian.
          <br />
          &nbsp;&nbsp;d. SPTJM Kebenaran Perkawinan / Cerai Hidup Belum
          Tercatat, apabila status di KK sebelumnya Kawin / Cerai Hidup tetapi
          &nbsp;&nbsp;&nbsp;tidak dapat menunjukkan dokumen akta perkawinan atau
          kutipan akta perceraian (Surat disediakan desa cukup
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;membawa materai 10 ribuan)
          <br />
          &nbsp;&nbsp;e. E-KTP suami dan istri <br />
          &nbsp;&nbsp;f. Fotocopy Akte Lahir Anak <br />
          <br />
          2. Penerbitan KK Baru Bagi Penduduk WNI Karena penggantian Kepala
          Keluarga dikarenakan meninggal dunia : <br />
          &nbsp;&nbsp;a. Akta Kematian <br /> &nbsp;&nbsp;b. Fc.KK Lama <br />
          &nbsp;&nbsp;c. Fc.Buku nikah / kutipan akta perkawinan atau kutipan
          akta perceraian <br /> &nbsp;&nbsp;d. SPTJM Kebenaran Perkawinan /
          Cerai Hidup Belum Tercatat, apabila status di KK sebelumnya Kawin /
          Cerai Hidup tetapi &nbsp;&nbsp;&nbsp;tidak dapat menunjukkan dokumen
          akta perkawinan atau kutipan akta perceraian (Surat disediakan desa
          cukup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;membawa materai 10 ribuan)
          <br /> &nbsp;&nbsp;e. E-KTP suami dan istri <br /> &nbsp;&nbsp;f. Akte
          Lahir Anak/ Ijazah Anak <br /> <br /> 3. Penerbitan KK Baru Bagi
          Penduduk WNI Karena Pisah KK :<br /> &nbsp;&nbsp;a. Fc.KK Lama <br />
          &nbsp;&nbsp;b. Berumur 17 (tujuh belas) tahun atau sudah kawin atau
          pernah kawin yang dibuktikan dengan kepemilikan KTP-el <br />
          &nbsp;&nbsp;c. Fc.Buku nikah / kutipan akta perkawinan atau kutipan
          akta perceraian <br /> &nbsp;&nbsp;d. SPTJM Kebenaran Perkawinan /
          Cerai Hidup Belum Tercatat, apabila status di KK sebelumnya Kawin /
          Cerai Hidup tetapi &nbsp;&nbsp;&nbsp;tidak dapat menunjukkan dokumen
          akta perkawinan atau kutipan akta perceraian (Surat disediakan desa
          cukup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;membawa materai 10 ribuan)
          <br /> &nbsp;&nbsp;e. E-KTP suami dan istri <br /> <br /> 4.
          Penerbitan KK Baru Bagi Penduduk WNI Karena Pindah Datang Penduduk
          yang tidak diikuti dengan Kepala Keluarga : <br /> &nbsp;&nbsp;a.
          Fc.KK Lama <br /> &nbsp;&nbsp;b. SKPWNI <br /> &nbsp;&nbsp;c. Berumur
          17 (tujuh belas) tahun atau sudah kawin atau pernah kawin yang
          dibuktikan dengan kepemilikan KTP-el <br /> &nbsp;&nbsp;d. Fc.Buku
          nikah / kutipan akta perkawinan atau kutipan akta perceraian <br />
          &nbsp;&nbsp;e. SPTJM Kebenaran Perkawinan / Cerai Hidup Belum
          Tercatat, apabila status di KK sebelumnya Kawin / Cerai Hidup tetapi
          &nbsp;&nbsp;&nbsp;tidak dapat menunjukkan dokumen akta perkawinan atau
          kutipan akta perceraian; (Surat disediakan desa cukup
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;membawa materai 10 ribuan) <br />
          <br /> 5. Penerbitan KK Baru bagi Penduduk WNI yang datang dari luar
          wilayah negara Republik Indonesia karena pindah : <br />
          &nbsp;&nbsp;a. SKPWNI dari Kantor Perwakilan Republik Indonesia yang
          datang dari luar wilayah NKRI karena pindah <br /> &nbsp;&nbsp;b.
          Fc.Buku Nikah / Kutipan Akta Perkawinan / Kutipan Akta Perceraian
          <br /> &nbsp;&nbsp;c. SPTJM Kebenaran Perkawinan / Cerai Hidup Belum
          Tercatat, apabila status di KK sebelumnya Kawin / Cerai Hidup tetapi
          &nbsp;&nbsp;&nbsp;tidak dapat menunjukkan dokumen akta perkawinan atau
          kutipan akta perceraian (Surat disediakan desa cukup
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;membawa materai 10 ribuan) <br />{" "}
          &nbsp;&nbsp;d. E-ktp <br /> <br />
          6. Penerbitan KK Baru bagi Orang Asing yang memperoleh kewarganegaraan
          Indonesia dan bagi WNI yang semula berkewarganegaraan asing : <br />{" "}
          &nbsp;&nbsp;a. Petikan Keputusan Presiden tentang pewarganegaraan dan
          berita acara pengucapan sumpah atau pernyataan janji &nbsp;&nbsp;setia
          bagi Penduduk WNI yang semula berkewarganegaraan asing atau petikan
          Keputusan Menteri yang
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menyelenggarakan urusan
          pemerintahan di bidang hukum tentang perubahan status kewarganegaraan
          <br /> &nbsp;&nbsp;b. Fc.Buku Nikah / Kutipan Akta Perkawinan /
          Kutipan Akta Perceraian <br /> &nbsp;&nbsp;c. Bukti pendukung lainnya
          yang dibutuhkan <br /> <br /> 7. Penerbitan KK Baru bagi Orang Asing
          yang memiliki Izin Tinggal Tetap : <br /> &nbsp;&nbsp;a. Kartu izin
          tinggal tetap <br /> &nbsp;&nbsp;b. Buku Nikah / Kutipan Akta
          Perkawinan atau Kutipan Akta Perceraian atau yang disebut dengan nama
          lain <br /> &nbsp;&nbsp;c. Surat Keterangan Pindah bagi Penduduk yang
          pindah dalam wilayah Negara Kesatuan Republik Indonesia <br />{" "}
          &nbsp;&nbsp;d. Bukti pendukung lainnya yang dibutuhkan <br /> <br />{" "}
          8. Penerbitan KK Baru bagi Orang Asing karena Hilang / Rusak : <br />{" "}
          &nbsp;&nbsp;a. Fc.KTP el <br />
          &nbsp;&nbsp;b. Kartu Izin Tinggal Tetap <br /> &nbsp;&nbsp;c. FC.KK
          yang hilang / rusak (apabila memiliki) <br /> &nbsp;&nbsp;d. Surat
          Keterangan Hilang dari kepolisian <br /> <br /> 9. Penerbitan KK bagi
          Penduduk WNI karena Hilang / Rusak : <br /> &nbsp;&nbsp; a. Fc.KTP el{" "}
          <br /> &nbsp;&nbsp;b. FC.KK yang hilang / rusak (apabila memiliki){" "}
          <br /> &nbsp;&nbsp;c. Surat Keterangan Hilang dari kepolisian <br />
          <br /> 10. Penerbitan KK Baru bagi Penduduk WNI karena Pindah Dalam 1
          (satu) Kabupaten : <br /> &nbsp;&nbsp;1. Pindah dalam 1 (satu) Desa /
          Kelurahan <br /> &nbsp;&nbsp;2. Pindah antar Desa / Kelurahan dalam 1
          (satu) Kecamatan <br /> &nbsp;&nbsp;3. Pindah antar Desa / Kelurahan
          antar Kecamatan dalam 1 (satu) Kabupaten <br /> <br /> <br /> Bukti
          pendukung yang dilampirkan : <br /> &nbsp;&nbsp;1. KTP dan KK Asli{" "}
          <br /> &nbsp;&nbsp;2. Kartu Identitas Anak (jika anak memiliki KIA){" "}
          <br /> &nbsp;&nbsp;3. Fc.Buku Nikah / Kutipan Akta Perkawinan /
          Kutipan Akta Perceraian <br /> &nbsp;&nbsp;4. Bukti pendukung lainnya
          yang dibutuhkan
        </p>
      </>
    ),
  },
  {
    title: "Pengajuan Perubahan Data KK",
    desc: (
      <>
        <p className="pt-5 text-justify">
          1. KK Asli <br />
          2. Dokumen atau bukti peristiwa kependudukan <br />
          3. SPTJM (jika tidak bisa menunjukkan bukti peristiwa kependudukan &
          peristiwa penting)
        </p>
      </>
    ),
  },
];

export default function AccordionsPage() {
  const [open, setOpen] = useState<number | null>(null); // Use `number | null` type for better type safety
  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className="container  my-10 xl:mx-auto xl:px-4" id="publik">
      <h2 className="text-yellow font-bold text-[22px] lg:text-[30px] md:text-[30px] xl:text-[30px] mb-10 px-20">
        Informasi dan Layanan Publik
      </h2>
      <div className=" px-[40px] max-w-full xl:px-[80px] lg:px-[60px]">
        {accordionData.map((data, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
