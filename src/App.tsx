import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { fetchTrendingData } from "./reducers/movie/action";
import { setBannerData } from "./reducers/movie";
// import { setBannerData  } from "./reducers/movie/index

function App() {
  const dispatch = useDispatch();

  

  useEffect(() => {
    fetchTrendingData().then((res) =>
      
      dispatch(setBannerData(res?.data?.results))
      
    );
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
