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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
      {galeriList.map((item: GaleriItemTypes) => (
        <GaleriPage
          key={item._id}
          image={
            Array.isArray(item.image)
              ? item.image.map((img) => `${process.env.NEXT_PUBLIC_API}/${img}`)
              : `${process.env.NEXT_PUBLIC_API}/${item.image.name}`
          }
        />
      ))}
    </div>
  );
}
