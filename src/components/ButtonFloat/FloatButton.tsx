import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
type Props = {};

function FloatButton({}: Props) {
  return (
    <div className="flex fixed bottom-5 right-5 ">
      <Link href="https://wa.me/6285159555343">
        <a>
          <FaWhatsapp className="text-5xl " color="green" />
        </a>
      </Link>
    </div>
  );
}

export default FloatButton;
