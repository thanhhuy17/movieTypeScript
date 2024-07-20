import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizontalListMovie from "../components/HorizontalListMovie";
import { RootState } from "../store/store";

const HomePage = () => {
  const trendingData = useSelector(
    (state: RootState) => state.movie.bannerData
  );
  return (
    <div className="mt-16">
      {/* Show Banner Image , Next Image , Back Image, Show Name, Detal Firm, Rate, View */}
      <BannerHome />

      {/* Show Horizontal List Movie  */}
      <HorizontalListMovie
        data={trendingData}
        heading="Top Trending"
        trending={true}
        // media_type = {"movie"}
      />
    </div>
  );
};

export default HomePage;
