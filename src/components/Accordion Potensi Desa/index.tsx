import React, { ReactNode, useState } from "react";
import { AccordionItem } from "./Accordions";

interface AccordionData {
  title: string;
  desc: JSX.Element;
  image: string | ReactNode;
}

const accordionData: AccordionData[] = [
  {
    title: "Merti Dusun",
    desc: (
      <>
        <p className="pt-5 text-justify">
          Dalam sebuah perayaan syukuran setelah panen yang penuh makna,
          masyarakat dusun Kebonagung, desa Bandung, menggelar tradisi Merti
          Dusun yang menjadi warisan nenek moyang yang harus dilestarikan.
          Kegiatan ini diselenggarakan secara rutin setiap tahunnya setelah
          panen, sebagai bentuk rasa syukur atas hasil bumi yang melimpah. Tahun
          ini, acara yang seharusnya berlangsung lebih awal namun ditunda karena
          cuaca yang tidak menentu. Merti Dusun adalah acara yang dilaksanakan
          atas dasar rasa syukur atas hasil panen yang melimpah, dan dilakukan
          oleh tiap warga di dusun Kebonagung. Merti Dusun erat kaitannya dengan
          Tumpeng Agung. Tumpeng Agung dimaknai sebagai simbol kesatuan
          masyarakat, menggambarkan bahwa mereka sudah merasa cukup dan makmur
          karena hasil alam yang diberikan. Kemeriahan Merti Dusun semakin
          lengkap dengan bancakan dari setiap rumah warga, serta adanya gunungan
          sedekah bumi seperti pisang, padi, ketela, hingga kelapa. Beragam
          hidangan seperti bihun, nasi, rempeyek, tempe, gembili, dan ubi
          dipersiapkan dan kemudian dinikmati bersama di lokasi acara. Semua
          hidangan ini adalah simbol kerukunan dan persatuan yang terjalin erat
          di antara masyarakat dusun Kebonagung. Tradisi Merti Dusun merupakan
          bagian dari identitas budaya desa Bandung yang harus dilestarikan.
          "Merti Dusun telah menjadi bagian dari kami sejak zaman nenek moyang,
          dan kami memiliki kewajiban untuk menjaga keberlanjutan tradisi ini.
          Selain sebagai ungkapan rasa syukur, Merti Dusun juga mengajarkan
          tentang gotong royong dan solidaritas di antara warga dusun," ujar Bu
          Bayan Kebonagung. Tahun ini, perayaan Merti Dusun berlangsung pada
          tanggal 15 Juli 2023. Warga dusun Kebonagung pun merayakannya dengan
          penuh semangat dan kegembiraan. Acara puncak ditandai dengan
          pemotongan tumpeng agung dan penampilan tari tayub, sebuah tarian
          tradisional Jawa yang menghadirkan nuansa klasik dan meriah. Acara
          Merti Dusun Kebonagung menjadi momen yang mengingatkan masyarakat akan
          pentingnya menjaga kearifan lokal dan melestarikan budaya leluhur.
          Dengan semangat gotong royong dan kesederhanaan, mereka menunjukkan
          bahwa kebersamaan adalah kunci dalam mencapai kesejahteraan bagi
          semua. Semoga tradisi Merti Dusun dapat terus berlanjut dan memberikan
          makna yang mendalam bagi generasi mendatang.
        </p>
      </>
    ),
    image: "/images/mertidusun.png",
  },
  {
    title: "Menyingkap Potensi serta Keunikan Desa Bandung",
    desc: (
      <>
        <p className="pt-5 text-justify">
          Desa Bandung memiliki potensi alam yang melimpah, termasuk sawah-sawah
          yang melimpah dengan hasil panen yang melimpah. Namun, kekeringan
          menjadi tantangan besar bagi petani desa ini. Selain itu, desa Bandung
          juga memiliki potensi dalam tanaman jagung, pisang, dan singkong.
          Namun, potensi ini belum sepenuhnya dimaksimalkan. Produksi gula
          kelapa juga mengalami penurunan akibat bibit yang tidak sesuai,
          kesulitan mencari penerus, dan kurangnya minat generasi muda.
          Diperlukan pendampingan generasi muda dan dukungan pemerintah dalam
          penyediaan bibit dan pembinaan teknik budidaya yang modern untuk
          mengatasi tantangan ini.Di lapangan kami menemukan keunikan yang ada
          di Desa Bandung. Pertama, sistem pertanian sawah tadah hujan yang
          menunjukkan adaptasi petani terhadap perubahan musim. Kedua, jadwal
          adzan Asar yang disesuaikan dengan aktivitas petani, memungkinkan
          mereka berjamaah setelah turun dari sawah. Ketiga, makanan khas lempok
          dengan bentuk pipih, penyajian menggunakan daun jati, dan rasa pedas,
          manis, dan gurih. Keempat, keberagaman masjid dan musholla yang
          mencerminkan toleransi beragama. Kelima, adanya inisiatif Taman Gizi
          oleh ibu-ibu PKK untuk memberikan pengetahuan tentang gizi dan pola
          makan sehat. Dengan keunikan-keunikan ini, Desa Bandung menjadi tujuan
          menarik bagi pengunjung yang mencari pengalaman yang unik dan berarti.
          Dalam berinteraksi dengan masyarakat, para mahasiswa KKN Undip turut
          serta dalam berbagai kegiatan sosial yang dijalankan oleh warga
          setempat. Tim KKN Undip bergabung dengan warga desa dalam yasinan
          rutin yang diadakan di masjid setempat. Tidak hanya itu, setiap Sabtu
          pagi, tim KKN Undip turut serta dalam senam rutin yang diadakan oleh
          masyarakat desa.
        </p>
      </>
    ),
    image: "/images/unik.png",
  },
];

export default function AccordionsPagePotensiDesa() {
  const [open, setOpen] = useState<number | null>(null); // Use `number | null` type for better type safety
  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className="my-20">
      <h2 className="text-yellow font-bold text-[22px] lg:text-[30px] md:text-[30px] xl:text-[30px] mb-10 px-20">
        Potensi Desa
      </h2>
      {accordionData.map((data, index) => (
        <AccordionItem
          key={index}
          open={index === open}
          title={data.title}
          desc={data.desc}
          image={data.image}
          toggle={() => toggle(index)}
        />
      ))}
    </section>
  );
}
