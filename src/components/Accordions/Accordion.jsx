import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "classnames";
export const CustomizedAccordions = ({
  data,
  height,
  width,
  keyAttr,
  valAttr,
}) => {
  const [current, setCurrent] = useState(null);
  const select = useCallback((i) => {
    if (current === 1) return setCurrent(null);
    setCurrent(i);
  });

  return (
    <div
      className="flex flex-col items-center justify-center divide-y-2"
      style={{ width }}
    >
      {data.map((item, index) => (
        <div className="flex flex-col shadow group" key={index}>
          <div
            className="text-black bg-white text-xl flex items-center justify-between cursor-pointer group-hover:text-neutral-600 p-2"
            onClick={() => select(index)}
          >
            <span>{item[keyAttr]}</span>
            <span>{current === index ? "-" : "+"}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out mx-2 ${
              current === index ? "p-2" : "p-0"
            }`}
            style={{ maxHeight: current === index ? height : 0 }}
          >
            {item[valAttr]}
          </div>
        </div>
      ))}
    </div>
  );
};

CustomizedAccordions.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  widht: PropTypes.number,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
};
CustomizedAccordions.defaultProps = {
  width: 400,
  height: 200,
  keyAttr: "title",
  valAttr: "content",
};
