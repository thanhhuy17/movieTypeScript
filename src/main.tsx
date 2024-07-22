import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
// Setup Axios
axios.defaults.baseURL = "https://api.themoviedb.org/3"; // Đường dẫn tương đối của API

axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_ACCESS_TOKEN
}`;
// console.log("Key : ", key);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);
