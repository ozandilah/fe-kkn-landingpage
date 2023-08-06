import React, { FC } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: JSX.Element; // Ensure desc is of type JSX.Element
}

export const AccordionItem: FC<AccordionItemProps> = ({
  open,
  toggle,
  title,
  desc,
}) => {
  return (
    <div className="pt-[10px] rounded-xl overflow-hidden ">
      <div
        className={`bg-white  border py-[25px] px-[50px] flex justify-between items-center cursor-pointer   ${
          open ? "rounded-t-xl" : "rounded-xl"
        }`}
        onClick={toggle}
      >
        <p className="font-medium xl:text-[16px] lg:font-semibold lg:text-[12px]">
          {title}
        </p>
        <div className="text-[30px]">
          {open ? (
            <AiOutlineMinus color="black" size={20} />
          ) : (
            <AiOutlinePlus color="red" size={20} />
          )}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white  border px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
};
