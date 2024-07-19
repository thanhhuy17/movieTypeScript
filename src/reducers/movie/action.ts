import axios from "axios";

export const fetchTrendingData = async () => {
    try {
    const response = await axios.get("/trending/all/week");
    //   console.log("Response: ", response?.data?.results);

    return response
      
    } catch (error) {
      console.log("Get Trending Error!", error);
    }
  };