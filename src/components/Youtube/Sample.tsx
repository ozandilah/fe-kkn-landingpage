import React from "react";
import YoutubeThumb from "@/components/Youtube/Youtube";
type Props = {};

function Youtube({}: Props) {
  return (
    <div
      className="my-10 flex flex-wrap justify-center gap-x-6 gap-y-6"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <YoutubeThumb url="https://www.youtube.com/watch?v=FNTEr_tGMes" />
    </div>
  );
}

export default Youtube;
