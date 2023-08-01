import Image from "next/image";
import React, { ReactNode } from "react";
interface Galeries {
  image: string | ReactNode;
}
export default function GaleriPage(props: Galeries) {
  const { image } = props;
  return (
    <section className="container mx-auto py-8">
      <div className="w-[250px] h-[250px] ">
        <Image
          className="thumbnail w-full h-full object-cover rounded-2xl"
          src={`${image}`}
          alt="Image"
          width={205}
          height={250}
        />
      </div>
    </section>
  );
}
