import { ReactNode } from "react";
import React from "react";

type Props = {
  title: string;
  image: string | ReactNode;
  preimage?: string;
  subTitle: string;
  className: string;
};

function CardStruktur({ title, image, preimage, subTitle, className }: Props) {
  return (
    <div className="">
      <div className="container max-w-7xl mx-auto px-4 cursor-auto">
        <div className="flex flex-wrap">
          <div className="px-6">
            {typeof image === "string" ? (
              <img src={image} alt={preimage} className={className} />
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
  );
}

export default CardStruktur;
