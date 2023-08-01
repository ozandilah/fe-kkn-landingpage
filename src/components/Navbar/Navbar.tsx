import Link from "next/link";

import Button from "designsystem/dist/atom/Button";
import Navbar from "designsystem/dist/organism/Navbar";
import { useRouter } from "next/router";

type Props = {};

function Navbars({}: Props) {
  const { pathname } = useRouter();
  return (
    <Navbar
      className={{
        active: "text-yellow",
        idle: "text-black",
      }}
      cta={
        <>
          <Button className="relative px-8" state="primary">
            <Link href="https://app.desabandung-boyolali.web.id">
              <a>Masuk</a>
            </Link>
          </Button>
        </>
      }
      pathname={pathname}
      image="/images/mainBanner.png"
      title="main Banner"
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/desa">
        <a>Desa</a>
      </Link>
      <Link href="/potensidesa">
        <a>Potensi Desa</a>
      </Link>
      <Link href="/strukturdesa">
        <a>Struktur Desa</a>
      </Link>
    </Navbar>
  );
}

export default Navbars;
