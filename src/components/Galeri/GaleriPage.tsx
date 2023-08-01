import Image from "next/image";
import React, { ReactNode } from "react";
interface Galeries {
  image: string | ReactNode;
}
export default function GaleriPage(props: Galeries) {
  const { image } = props;
  return (
    <div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={`${image}`}
            alt="Image"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
