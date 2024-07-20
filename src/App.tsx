import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { fetchConfiguration, fetchTrendingData } from "./reducers/movie/action";
import { setBannerData, setImageUrl } from "./reducers/movie";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrendingData().then((res) =>
      // console.log("Response Data: ", res?.data?.results)
      dispatch(setBannerData(res?.data?.results))
    );
    fetchConfiguration().then((res) => {
      // console.log("Response Configuration: ",res?.data?.images?.secure_base_url + "original")
      dispatch(setImageUrl(res?.data?.images?.secure_base_url + "original"));
    });
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
