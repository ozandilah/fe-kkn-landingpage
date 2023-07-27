import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import minus from "../../../public/minus.svg";
import plus from "../../../public/plus.svg";
type Props = {
  question: string;
  answer: string;
  idx: number;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
};

function Layanan({ question, answer, turn, setTurn, idx }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn![idx]
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, turn, idx]);

  const toggleAccordion = () => {
    let newTurn = [...turn!];
    newTurn[idx] = !newTurn[idx];
    setTurn!(newTurn);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base">
      <button
        onClick={toggleAccordion}
        className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${
          turn![idx]
        }`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between h-14 text-left">
            <span className="ml-2 font-medium xl:text-[16px] lg:font-semibold lg:text-[12px] text-sm text-navy">
              {question}
            </span>
            <div>
              {turn![idx] ? (
                <Image src={minus} alt="" width={20} height={20} />
              ) : (
                <Image src={plus} alt="" width={20} height={20} />
              )}
            </div>
          </div>
          <div
            ref={contentRef}
            className="mx-4 overflow-hidden text-left transition-all duration-500 h-full"
          >
            <p className="py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-[15px]">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Layanan;
