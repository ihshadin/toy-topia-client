import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/LoginSignup/Login";
import Signup from "../components/pages/LoginSignup/Signup";
import AllToys from "../components/pages/AllToys/AllToys";
import MyToys from "../components/pages/MyToys/MyToys";
import AddNewToy from "../components/pages/AddNewToy/AddNewToy";
import Blogs from "../components/pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Signup />,
            },
            {
                path: 'all-toys',
                element: <AllToys />,
            },
            {
                path: 'my-toys',
                element: <MyToys />,
            },
            {
                path: 'add-toy',
                element: <AddNewToy />,
            },
            {
                path: 'blogs',
                element: <Blogs />,
            }
        ]
    }
])
export default router;