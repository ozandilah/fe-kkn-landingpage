import NavPage from "@/components/NavPage/NavPage";
import { BlogItemTypes } from "@/services/data-types";
import { getBlogs, getDetailBlogs } from "@/services/user";
import Button from "designsystem/dist/atom/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface DetailProps {
  dataItem: BlogItemTypes;
}
export default function DetailBlog({ dataItem }: DetailProps) {
  const { pathname } = useRouter();
  return (
    <>
      <NavPage
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
      </NavPage>
      <div className="relative">
        <section className="container mx-auto px-16 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-20 xl:gap-x-28">
            <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 my-1 text-justify">
              <h1 className="text-yellow font-bold text-[32px] ">
                {dataItem.title}
              </h1>
              <br />
              <hr className="h-px my-3 bg-gray-200 border-2 dark:bg-gray-700" />
              <h1 className="text-navy font-semibold text-[15px] mb-3">
                {dataItem.date}
              </h1>
              <hr className="h-px my-3 bg-gray-200 border-2 dark:bg-gray-700" />
              <p className="text-base text-gray-500 font-semibold">
                {dataItem.Keterangan}
              </p>
            </div>

            <div className="relative max-w-[90%]">
              <div className="relative max-w-full rounded-[59px] overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/${dataItem.image["name"]}`}
                  alt="image1"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const data = (await getBlogs()).data;

  const paths = data.map((item: BlogItemTypes) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailBlogs(id);
  return {
    props: {
      dataItem: data.responseData,
    },
  };
}
