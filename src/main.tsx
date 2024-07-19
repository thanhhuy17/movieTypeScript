import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import axios from "axios";
// Setup Axios
axios.defaults.baseURL = "https://api.themoviedb.org/3"; // Đường dẫn tương đối của API

axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_ACCESS_TOKEN
}`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>,
);
