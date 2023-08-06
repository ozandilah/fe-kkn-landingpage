import { GaleriItemTypes } from "@/services/data-types";
import React, { useCallback, useEffect, useState } from "react";
import GaleriPage from "./GaleriPage";
import { getGaleries } from "@/services/user";

export default function Galeries() {
  const [galeriList, setGaleriList] = useState([]);

  const getGaleriList = useCallback(async () => {
    const data = (await getGaleries()).data;
    setGaleriList(data);
  }, [getGaleries]);

  useEffect(() => {
    getGaleriList();
  }, []);
  return (
    <>
      <div
        className="flex flex-col justify-center items-start px-36 my-10"
        id="galeri"
      >
        <h2 className="text-yellow font-bold text-[30px]">Galeri</h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        {galeriList.map((item: GaleriItemTypes) => (
          <GaleriPage
            key={item._id}
            image={
              Array.isArray(item.image)
                ? item.image.map(
                    (img) => `${process.env.NEXT_PUBLIC_API}/${img}`
                  )
                : `${process.env.NEXT_PUBLIC_API}/${item.image["name"]}`
            }
          />
        ))}
      </div>
    </>
  );
}
