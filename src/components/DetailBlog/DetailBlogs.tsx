import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  date: string;
  image: string | ReactNode;
  keterangan: string;
};

function DetailBlogs({ title, date, image, keterangan }: Props) {
  return (
    <div className="relative">
      <section className="container mx-auto px-16 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-20 xl:gap-x-28">
          <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 my-1 text-justify">
            <h1 className="text-yellow font-bold text-[32px] ">{title}</h1>
            <br />
            <hr className="h-px my-3 bg-gray-200 border-2 dark:bg-gray-700" />
            <h1 className="text-navy font-semibold text-[15px] mb-3">{date}</h1>
            <hr className="h-px my-3 bg-gray-200 border-2 dark:bg-gray-700" />
            <p className="text-base text-gray-500 font-semibold">
              {keterangan}
            </p>
          </div>

          <div className="relative max-w-[90%]">
            <div className="relative max-w-full w-[390px] h-[240px] xl:w-[490px] xl:h-[340px] rounded-[59px] overflow-hidden">
              {typeof image === "string" ? (
                <img src={image} alt={title} className="object-cover" />
              ) : (
                image
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailBlogs;
