// có các hành động từ UI hay API thì để vào actions
import axios from "axios";
// Lấy Link hình ảnh
export const fetchTrendingData = async () => {
  try {
    const response = await axios.get("/trending/all/week");

    return response

  } catch (error) {
    console.log("Get Trending Error!", error);
  }
};

//Get Configuration
export const fetchConfiguration = async () => {
  try {
    const response = await axios.get("/configuration");

    return response

  } catch (error) {
    console.log("Fetch Configuration Error", error)
  }
}
