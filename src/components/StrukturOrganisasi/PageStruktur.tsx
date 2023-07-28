import CardStruktur from "./Organisasi";

type Props = {};

function PageStruktur({}: Props) {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Ketua"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Wakil Ketua"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Sekretaris"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Bendahara"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Ketua Pemuda"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Wakil Ketua Pemuda"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Sie Keamanan"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <CardStruktur
            title="Halo Dok"
            subTitle="Sie Rohani"
            image="/images/Sugiyanto(Ketua).JPG"
          />
        </div>
      </div>
    </>
  );
}

export default PageStruktur;
