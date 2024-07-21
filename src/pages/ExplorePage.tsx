import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const useParam = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState<any>([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  // Fetch Data Explore page
  const fetchData = async () => {
    try {
      const response = await axios.get(`discover/${useParam.explore}`, {
        params: {
          page: pageNo,
        },
      });
      // console.log("Response: ", response.data.results);
      // Set Data
      setData((prev: any) => {
        return [...prev, ...response.data.results];
      });
      // Set Page Number
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("Get Data Explore Page Error!", error);
    }
  };
  // When Page changed => Get data
  useEffect(() => {
    fetchData();
  }, [pageNo]);

  // Function Add Page ++
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  // When Click Page Explore Set Page == 1, Get Data
  useEffect(() => {
    setPageNo(1); // Set về trang đầu
    fetchData(); // Lấy dữ liệu lại
    setData([]); // Truyền dữ liệu lại cho trang(nếu không thì khi đang ở movie chuyển qua tv thì data không thay đổi)
  }, [useParam.explore]);

  // console.log("pageNo: ", pageNo);
  console.log(totalPageNo);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl py-3 font-semibold">
          Popular {useParam.explore} show
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data?.map((data: any, index: number) => {
            return (
              <Card
                data={data}
                index={index}
                trending={false}
                key={data + "explorePage" + index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
