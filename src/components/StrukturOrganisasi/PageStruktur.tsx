import CardStruktur from "./Organisasi";

type Props = {};

function PageStruktur({}: Props) {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Rahmat Handoyo"
            subTitle="Kades Bandung"
            image="/images/rahmat.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined  h-[300px] w-[300px]"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Sarjono"
            subTitle="Kepala Dusun Bandung"
            image="/images/sarjono.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined  h-[300px] w-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Aria Yunia Vidiana "
            subTitle="Sekretaris Desa"
            image="/images/yuni.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Intan Pratiwi"
            subTitle="Kepala Seksi Pemerintahan"
            image="/images/intan.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Mashudi"
            subTitle="Kepala Urusan Keuangan"
            image="/images/mashudi.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Muhammad Ali Akbar"
            subTitle="Kaur Desa"
            image="/images/ali.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Sugiyanto"
            subTitle="Kepala Urusan Pembangunan"
            image="/images/sugiyanto.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Mundakir"
            subTitle="Kepala Dusun 3"
            image="/images/mundakir.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined  max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Yahya Kasturiyan"
            subTitle="Kepala Dusun 2"
            image="/images/yahya.jpg"
            className="rounded-xl shadow-lg align-middle border-none undefined max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default PageStruktur;
