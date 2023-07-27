import React, { Dispatch, SetStateAction } from "react";
import Layanan from "./Layanan";

type LayoutProps = {
  question: string;
  answer: string;
  idx: number;
};
type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isSomeActive: any;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  data: LayoutProps[];
};

function Item({ handleClick, isSomeActive, turn, setTurn, data }: Props) {
  return (
    <>
      <div className="flex flex-col  lg:mt-7 w-full my-5 px-4">
        <h2 className="text-yellow font-bold text-[22px] lg:text-[32px] md:text-[32px] xl:text-[32px] mb-10 px-5">
          Informasi dan Layanan Publik
        </h2>

        {data.map((el, i) => {
          return (
            <div className="w-full" key={"questions" + i}>
              <Layanan
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Item;
