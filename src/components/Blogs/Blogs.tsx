import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Blogs {
  id: string;
  title: string;
  subTitle: string;
  Keterangan: string;
  date: string;
  image: string | ReactNode;
}

export default function Blogs(props: Blogs) {
  const { title, subTitle, image, id, Keterangan, date } = props;
  // Function to truncate text and add ellipsis
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const truncatedTitle = truncateText(title, 10);
  const truncatedSubTitle = truncateText(subTitle, 15);
  const truncatedKeterangan = truncateText(Keterangan, 20);
  return (
    <section className="container mx-auto px-4 py-8 ">
      <Link href={`/detail-blog/${id}`}>
        <a>
          <div className="bg-soft-yellow p-5 rounded-2xl sm:w-[300px] w-full pl-5 h-full">
            <div className="relative w-full h-[230px] ">
              <Image
                className="thumbnail w-full h-full object-cover rounded-2xl"
                src={`${image}`}
                width={205}
                height={270}
                alt="thumbnail-1"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-black font-bold text-[18px]">
                {truncatedTitle}
              </h3>
              <div className="mt-2 text-secondary text-[16px]">
                {truncatedSubTitle}
              </div>
              <div className="mt-2 text-secondary text-[13px]">
                {truncatedKeterangan}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
              {date}
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
}
