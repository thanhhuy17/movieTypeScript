import { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const BannerHome = () => {
  const bannerData = useSelector((state: RootState) => state.movie.bannerData);
  const imgUrl = useSelector((state: RootState) => state.movie.imageUrl);
  const [currentImg, setCurrenImg] = useState(0);
  // console.log("Banner: ", bannerData);

  // Next Banner Image
  const handleNext = () => {
    if (currentImg < bannerData.length - 1) {
      setCurrenImg((prev) => prev + 1);
    }
  };

  // Previous Banner Image
  const handlePrevious = () => {
    if (currentImg > 0) {
      setCurrenImg((prev) => prev - 1);
    }
  };

  // Next Page Every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImg < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrenImg(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerData, imgUrl, currentImg]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData?.map((data, index) => {
          return (
            <div
              key={data.id + "BannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group"
              style={{ transform: `translateX(-${currentImg * 100}%)` }} // skill next page
            >
              <div className="w-full h-full">
                <img
                  className="w-full h-full z`object-cover"
                  src={imgUrl + data?.backdrop_path}
                  alt=""
                />
              </div>
              {/* Button next and previous image */}
              <div className="hidden absolute top-0 w-full h-full text-4xl items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 rounded-full z-10 text-black transition-colors duration-300"
                >
                  <RiArrowLeftSLine />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white p-1 rounded-full z-10 text-black transition-colors duration-300"
                >
                  <RiArrowRightSLine />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className="w-full absolute bottom-0 max-w-md px-4">
                  <h2 className="font-bold text-2xl mb-3">
                    {data?.name || data?.title}
                  </h2>
                  <p className="mb-3 line-clamp-3 text-ellipsis">
                    {data?.overview}
                  </p>

                  <div className="flex gap-4">
                    <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
                    <span>|</span>
                    <p>View: {Number(data?.popularity).toFixed(0)}</p>
                  </div>

                  <button className="bg-white text-neutral-900 font-semibold px-3 py-2 my-4 rounded-3xl hover:bg-orange-400 hover:text-white hover:scale-105 transition-colors duration-200">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
