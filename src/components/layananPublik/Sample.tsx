import Items from "./Item";
import data from "../../../public/data.json";
import { useState } from "react";
type Props = {};
function Publik({}: Props) {
  const [active, setActive] = useState([false, false, false, false]);
  const isSomeActive = active.some((element) => element);

  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false])
      : setActive([true, true, true, true, true]);
  };
  return (
    <section className="container mx-auto px-4 my-10">
      <div className="grid place-items-center w-full ">
        <Items
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={data}
          turn={active}
          setTurn={setActive}
        />
      </div>
    </section>
  );
}

export default Publik;
