import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizontalListMovie from "../components/HorizontalListMovie";
import { RootState } from "../store/store";
import useFetch from "../Hooks/useFetch";

const HomePage = () => {
  const trendingData = useSelector(
    (state: RootState) => state.movie.bannerData
  );
  const { data: nowPlayingData  } = useFetch("movie/now_playing");
  const { data: nowTopRateData } = useFetch("movie/top_rated");
  const { data: nowPopularData } = useFetch("tv/popular");
  const { data: nowTheNextWeekData } = useFetch("tv/on_the_air");
  return (
    <div className="mt-16">
      {/* Show Banner Image , Next Image , Back Image, Show Name, Detal Firm, Rate, View */}
      <BannerHome />

      {/* Show Horizontal List Movie  */}
      <HorizontalListMovie
        data={trendingData}
        heading="Top Trending"
        trending={true}
      />

      <HorizontalListMovie
        data={nowPlayingData}
        heading="Now Playing"
        media_type="movie"
      />

      <HorizontalListMovie
        data={nowTopRateData}
        heading="Top Rated"
        media_type="movie"
      />

      <HorizontalListMovie
        data={nowPopularData}
        heading="Popular"
        media_type="tv"
      />

      <HorizontalListMovie
        data={nowTheNextWeekData}
        heading="The next week"
        media_type="tv"
      />
    </div>
  );
};

export default HomePage;
