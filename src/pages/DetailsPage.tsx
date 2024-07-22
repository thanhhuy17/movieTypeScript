import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import useFetchDetailsPage from "../Hooks/useFetchDetailsPage";
import { useState } from "react";
import Divider from "../components/Divider";
import moment from "moment";

const DetailsPage = () => {
  //Get (explore: movie/tv) and (id : 78123456)
  const param = useParams();
  // Get imgUrl Initial => 'https://image.tmdb.org/t/p/original'
  const imgUrl = useSelector((state: RootState) => state.movie.imageUrl);

  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState("");
  const handlePlayVideo = (data: any) => {
    setVideoId(data.id);
    setPlayVideo(true);
  };
  // Get Data DetailPage
  const { data } = useFetchDetailsPage(`/${param.explore}/${param.id}`);
  console.log(data);

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  // console.log(duration);

  // const { data: castDetail } = useFetchDetailsPage(
  //   `/${param.explore}/${param.id}/credits`
  // );
  // console.log("castDetail", castDetail);

  // const writer = castDetail?.crew
  //   ?.filter((el: any) => el?.job === "Writer")
  //   ?.map((el: any) => el?.name)
  //   .join(", ");
  // console.log("writer", writer);

  return (
    <div className="mt-16">
      <div className="w-full h-[300px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={imgUrl + data?.backdrop_path}
            alt=""
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>

        <div className="container mx-auto pt-16 lg:py-1 lg:flex gap-5">
          <div className=" mx-auto relative lg:-mt-28 lg:mx-0 w-fit min-w-60 text-center">
            <img
              className="w-60 h-80 rounded object-cover"
              src={imgUrl + data?.poster_path}
              alt=""
            />

            <button
              onClick={() => handlePlayVideo(data)}
              className="bg-white w-full px-4 py-2 text-black font-bold rounded-lg mt-4 transition-colors 
            hover:bg-gradient-to-r from-orange-700 to-orange-300 hover:scale-110 "
            >
              Play Now
            </button>
          </div>

          <div className="mx-7 lg:text-left">
            <h2 className="text-4xl font-bold text-white">
              {data?.title || data?.name}
            </h2>
            <p className="text-neutral-400">{data?.tagline}</p>
            <Divider />
            <div className="flex items-center gap-3 my-2">
              <div>Rating: {Number(data?.vote_average).toFixed(1)}</div>
              <span>|</span>
              <div>View: {Number(data?.vote_count)}</div>
              <span>|</span>
              <div>
                {/* {duration &&
                  duration.length > 0 &&
                  `Duration: ${duration[0]}h ${duration[1]}m`} */}
                Duration: ${duration[0]}h ${duration[1]}m
              </div>
            </div>
            <Divider />
            <div className=" mt-2 mb-2">
              <h3 className="text-white text-4xs lg:text-3xl">Overview</h3>
              <p className="text-neutral-500 text-2xs lg:text-xl">
                {data?.overview}
              </p>
            </div>
            <Divider />
            <div className="pt-2 mb-2 flex gap-2 text-center">
              <p>Status: {data?.status}</p>
              <span> | </span>
              <p>
                Release: {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span> | </span>
              <p>Revenue: {Number(data?.revenue)}</p>
            </div>
            {/* <Divider />
            <div>
              <p className="pt-2 mb-2">
                <span className="text-white">Director</span>:
                {castDetail?.crew[0]?.name}
              </p>
              <Divider />
              <p className="pt-2 mb-2">
                <span>Writer: {writer}</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
