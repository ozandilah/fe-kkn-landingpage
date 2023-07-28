import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type TFeature = {
  key: string;
  title: string;
  paragraph: string;
  tag: string;
  image: string | ReactNode;
};
type Props = {
  features: TFeature[];
};

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

function Blogs({ features }: Props) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-yellow font-bold text-[30px] mb-10">KEGIATAN</h2>
      </div>

      <Carousel responsive={responsive}>
        {features.map((feature) => {
          return (
            <>
              <Link href="/detailblog">
                <a>
                  <div
                    className="bg-soft-yellow p-5 rounded-2xl sm:w-[300px] w-full pl-5 h-full "
                    key={feature.key}
                  >
                    <div className="relative w-full h-[230px] ">
                      {typeof feature.image === "string" ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        feature.image
                      )}
                    </div>

                    <div className="mt-5">
                      <h3 className="text-black font-bold text-[24px]">
                        {feature.title}
                      </h3>
                      <div className="mt-2 text-secondary text-[14px]">
                        {feature.paragraph}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
                      {feature.tag}
                    </div>
                  </div>
                </a>
              </Link>
            </>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Blogs;
