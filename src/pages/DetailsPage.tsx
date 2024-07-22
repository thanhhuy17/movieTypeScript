import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import useFetchDetailsPage from "../Hooks/useFetchDetailsPage";
import { useState } from "react";
import Divider from "../components/Divider";
import moment from "moment";
import HorizontalListMovie from "../components/HorizontalListMovie";
import useFetch from "../Hooks/useFetch";
import PlayVideo from "../components/PlayVideo";

const DetailsPage = () => {
  //Get (explore: movie/tv) and (id : 78123456)
  const param = useParams();
  // Get imgUrl Initial => 'https://image.tmdb.org/t/p/original'
  const imgUrl = useSelector((state: RootState) => state.movie.imageUrl);

  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState("");
  console.log(videoId);

  const handlePlayVideo = (data: any) => {
    setVideoId(data.id);
    setPlayVideo(true);
  };
  // Get Data DetailPage
  const { data } = useFetchDetailsPage(`/${param.explore}/${param.id}`);
  // console.log(data);

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  // console.log(duration);

  const { data: castDetail } = useFetchDetailsPage(
    `/${param.explore}/${param.id}/credits`
  );
  // console.log("castDetail", castDetail?.crew?.[0]?.name);

  const { data: similarData } = useFetch(
    `/${param.explore}/${param.id}/similar`
  );

  // console.log("similar: ",typeof similarData);

  const { data: recommendationData } = useFetch(
    `/${param.explore}/${param.id}/recommendations`
  );

  const writer = castDetail?.crew
    ?.filter((el: any) => el?.job === "Writer")
    ?.map((el: any) => el?.name)
    .join(", ");
  // console.log("writer", writer);

  return (
    <div>
      <div className="w-full h-[300px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={imgUrl + data?.backdrop_path}
            alt=""
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>
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
              Duration: {duration[0]}h {duration[1]}m
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
            <p>Release: {moment(data?.release_date).format("MMMM Do YYYY")}</p>
            <span> | </span>
            <p>Revenue: {Number(data?.revenue)}</p>
          </div>
          <Divider />
          <div>
            <p className="pt-2 mb-2">
              <span className="text-white">Director: </span>
              {castDetail?.crew?.[0]?.name}
            </p>
            <Divider />
            <p className="pt-2 mb-2">
              <span>Writer: {writer}</span>
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="text-2xl font-bold mt-2 mb-2 mx-7">CAST</h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-4 mx-7">
              {castDetail?.cast?.map((startCast: any, index: number) => {
                return (
                  <div key={index + "startCart"}>
                    <div className="flex flex-col gap-2">
                      <img
                        className="w-24 h-24 object-cover rounded-full hover:scale-105 transition-all"
                        src={imgUrl + startCast?.profile_path}
                        alt=""
                      />
                    </div>
                    <p className="font-semibold text-center text-sx">
                      {startCast?.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <Divider />
          <div>
            <HorizontalListMovie
              data={similarData}
              heading={"Similar " + param?.explore}
              media_type={param?.explore}
            />

            <HorizontalListMovie
              data={recommendationData}
              heading={"Recommend " + param?.explore}
              media_type={param?.explore}
            />
          </div>
        </div>
      </div>
      <div>
        {playVideo && (
          <PlayVideo
            data={data?.id}
            close={() => setPlayVideo(false)}
            media_type={param?.explore}
          /> //index={data?.index}
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
