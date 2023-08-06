import React, { FC, ReactNode } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: JSX.Element; // Ensure desc is of type JSX.Element
  image: string | ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  open,
  toggle,
  title,
  desc,
  image,
}) => {
  return (
    <section className="flex flex-col md:flex-row md:px-16">
      {open && (
        <div className="py-2 px-4 hidden md:block md:w-1/2">
          <div className="px-4 py-4">
            {typeof image === "string" ? (
              <img src={image} alt="image" className="rounded-xl" />
            ) : (
              image
            )}
          </div>
        </div>
      )}

      <div className="py-2 px-4 w-full md:w-1/2">
        <div className="rounded-xl overflow-hidden">
          <div
            className={`bg-white border py-4 px-6 flex justify-between items-center cursor-pointer ${
              open ? "rounded-t-xl" : "rounded-xl"
            }`}
            onClick={toggle}
          >
            <p className="font-medium text-lg md:text-xl lg:text-base">
              {title}
            </p>
          </div>
          <Collapse isOpened={open}>
            <div className="bg-white border px-6 pb-4">{desc}</div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};
