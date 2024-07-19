import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from '../pages/HomePage'
import ExplorePage from "../pages/ExplorePage";
import DetalsPage from "../pages/DetalsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '',
            element: <HomePage/>
        },
        {
            path: ':explore',
            element: <ExplorePage/>
        },
        {
            path: ':explore/:id',
            element: <DetalsPage/>
        },
        {
            path: 'search',
            element: <SearchPage/>
        },

    ]

}])

export default router