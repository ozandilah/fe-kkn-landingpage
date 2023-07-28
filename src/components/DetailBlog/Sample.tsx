import React from "react";
import DetailBlogs from "./DetailBlogs";

type Props = {};

function SampleDetailBlog({}: Props) {
  return (
    <div>
      <DetailBlogs
        title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
      facilis!"
        date="21 January 2010"
        keterangan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        mollitia porro, quae debitis quos praesentium dolorum dignissimos atque
        sapiente sunt vitae ipsam cum provident incidunt unde nostrum iste. Quae
        recusandae et repudiandae dolorem, maiores qui eum quaerat debitis odio
        deleniti cumque vitae nostrum. Corporis expedita quam vero numquam
        pariatur voluptas!"
        image="/images/desa.jpg"
      />
    </div>
  );
}

export default SampleDetailBlog;
