import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [dataSearch, setDataSearch] = useState<any>([]);
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();
  const query = location?.search?.slice(3);
  // console.log(query);
  // Function Add Page ++
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      setPageNo((pre) => pre + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  //Get Data Search Page
  const fetchData = async () => {
    try {
      const response = await axios.get("search/multi", {
        params: {
          query: query,
          page: pageNo,
        },
      });
      setDataSearch((prev: any) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("Get Data Search Page Error!", error);
    }
  };
  // when change Input Search => Set Page = 1, Set data = Empty, Get Data = fetchData()
  useEffect(() => {
    setPageNo(1);
    setDataSearch([]);
    fetchData();
  }, [location?.search]);

  const getNavigateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    return navigate("/search?q=" + e.target.value);
  };
  // console.log(getNavigateSearch);
  return (
    <div className="mt-16">
      <div className="lg:hidden sticky bg-transparent top-16 z-40">
        <input
          className="bg-neutral-200 border-none py-2 px-3 rounded-full w-full text-black"
          type="text"
          placeholder="Search here ..."
          // onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          onChange={getNavigateSearch}
          value={query.split("%20").join(" ")}
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl py-3 font-semibold">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {dataSearch?.map((dataSearch: any, index: number) => {
            return (
              <Card
                data={dataSearch}
                index={index}
                key={dataSearch.id + "searchPage" + index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
