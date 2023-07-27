import { ReactNode } from "react";
import React from "react";

type Props = {
  title: string;
  image: string | ReactNode;
  preimage?: string;
  subTitle: string;
};

function CardStruktur({ title, image, preimage, subTitle }: Props) {
  return (
    <div className="">
      <div className="container max-w-7xl mx-auto px-4 cursor-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={preimage}
                  className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                />
              ) : (
                image
              )}

              <div className="pt-6 text-center">
                <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  {title}
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {subTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStruktur;
