type Props = {
  url: string;
};

function YoutubeThumb({ url }: Props) {
  // Parse the video ID from the YouTube URL
  const videoId = url.split("v=")[1];

  if (videoId) {
    return (
      <section className="">
        <div className="w-full h-full  xl:w-[1100px] p-2">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className=" text-[#FFDE32] uppercase font-bold mb-3 text-4xl">
              Video Profile
            </h3>
          </div>
          <div className="aspect-w-6 aspect-h-3 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Embedded video"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Invalid YouTube URL</div>;
  }
}

export default YoutubeThumb;
