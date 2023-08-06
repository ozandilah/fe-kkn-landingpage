import React, { useState } from "react";
import { AccordionItem } from "./AccordionDesa";

interface AccordionData {
  title: string;
  desc: JSX.Element; // Ensure desc is of type JSX.Element
}

const accordionData: AccordionData[] = [
  {
    title: "Visi",
    desc: (
      <>
        <p className="pt-5 text-justify">
          “BALDATUN THOYYIBATUN WA RABBUN GHOFUUR”
        </p>
      </>
    ),
  },
  {
    title: "Misi",
    desc: (
      <>
        <ul className="list-disc text-[13px] mt-5">
          <li>
            Membenahi Birokrasi Aparatur Desa sesuai dengan aturan dan
            Tupoksinya.
          </li>
          <li>
            Menjadikan Pemerintahan Desa yang tanggap Aspiratif dalam menyikapi
            Aspirasi Masyarakat.
          </li>
          <li>Menata Administrasi yang Solid dan Akuntabel.</li>
          <li>
            Pemerataan dalam Membangun Sarana dan Prasarana Infrastruktur
            berdasarkan Prioritas dan Musyawarah.
          </li>
          <li>
            Mengaktifkan dan Mengoptimalkan Pembinaan Generasi Muda Karang
            Taruna.
          </li>
          <li>
            Membina dan Memajukan Kesehatan dan Pendidikan Formal dan Non
            formal.
          </li>
          <li>
            Memperkokoh Persatuan dan Kesatuan Warga, Menciptakan Keamanan dan
            Ketetraman serta Kedamaian.
          </li>
          <li>
            Memberikan Pelayanan dan Pengabdian yang mudah kepada Masyarakat.
          </li>
          <li>
            Merangsang dan Mendukung kegiatan Kemasyarakatan dalam kelembagaan
            perorangan maupun kelompok
          </li>
        </ul>
      </>
    ),
  },
];

export default function AccordionsDesa() {
  const [open, setOpen] = useState<number | null>(null); // Use `number | null` type for better type safety
  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section>
      {accordionData.map((data, index) => (
        <AccordionItem
          key={index}
          open={index === open}
          title={data.title}
          desc={data.desc}
          toggle={() => toggle(index)}
        />
      ))}
    </section>
  );
}
