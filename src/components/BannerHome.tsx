import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movie.bannerData);
  const imgUrl = useSelector((state) => state.movie.imageUrl);
  const [currentImg, setCurrenImg] = useState(0);

  const handleNext = () => {
    if (currentImg < bannerData.length - 1) {
      setCurrenImg((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImg > 0) {
      setCurrenImg((prev) => prev - 1);
    }
  };
  //   console.log("Banner: ", bannerData);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "BannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group"
              style={{ transform: `translateX(-${currentImg * 100}%)` }} // skill next page
            >
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
