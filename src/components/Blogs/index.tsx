import { BlogItemTypes } from "@/services/data-types";
import { getBlogs } from "@/services/user";
import React, { useCallback, useEffect, useState } from "react";
import Blogs from "./Blogs";
import { formatDate } from "@/utils/formatDate";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Blog() {
  const [blogList, setBlogList] = useState([]);

  const getBlogList = useCallback(async () => {
    const data = (await getBlogs()).data;
    setBlogList(data);
  }, []);

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  return (
    <section
      className="md:px-10 md:mx-32  flex flex-col my-10"
      data-aos="zoom-out-right"
      data-aos-duration="2000"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-yellow font-bold text-[30px]">KEGIATAN</h2>
      </div>
      <Carousel responsive={responsive}>
        {blogList.map((item: BlogItemTypes) => {
          return (
            <Blogs
              key={item._id}
              title={item.title}
              subTitle={item.subTitle}
              Keterangan={item.Keterangan}
              date={formatDate(item.date)}
              image={
                Array.isArray(item.image)
                  ? item.image.map(
                      (img) => `${process.env.NEXT_PUBLIC_API}/${img}`
                    )
                  : `${process.env.NEXT_PUBLIC_API}/${item.image["name"]}`
              }
              id={item._id}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
