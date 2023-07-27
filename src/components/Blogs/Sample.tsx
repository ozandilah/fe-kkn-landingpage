import React from "react";
import Blogs from "./Blogs";
import Image from "next/image";
type Props = {};

function Blog({}: Props) {
  return (
    <div className="md:px-10 md:mx-32  flex flex-col">
      <Blogs
        features={[
          {
            image: "/images/desa.jpg",
            key: "website",
            title: "Silpa",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Faucibus lorem nisi quis id amet pharetra tellus.",
            tag: "#php #javascript #html #css",
          },

          {
            image: "/images/desa.jpg",
            key: "desa",
            title: "Desa Kertayuga",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Faucibus lorem nisi quis id amet pharetra tellus.",
            tag: "#bootstrap #css #html #javascript",
          },
          {
            image: "/images/desa.jpg",
            key: "surat",
            title: "E-Surat",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Faucibus lorem nisi quis id amet pharetra tellus.",
            tag: "#php #html #css #javascript",
          },
          {
            image: "/images/desa.jpg",
            key: "dicoding",
            title: "Submission Dicoding",
            paragraph:
              "Lorem ipsum dolor sit amet consectetur. Faucibus lorem nisi quis id amet pharetra tellus.",
            tag: "#javascript #html #css #react #tailwind",
          },
        ]}
      />
    </div>
  );
}

export default Blog;
