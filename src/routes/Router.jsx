import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/LoginSignup/Login";
import Signup from "../components/pages/LoginSignup/Signup";
import AllToys from "../components/pages/AllToys/AllToys";
import MyToys from "../components/pages/MyToys/MyToys";
import AddNewToy from "../components/pages/AddNewToy/AddNewToy";
import Blogs from "../components/pages/Blogs/Blogs";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import ToyDetails from "../components/pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://toy-topia-server-theta.vercel.app/totalToys'),
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>,
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddNewToy /></PrivateRoute>,
            },
            {
                path: 'blogs',
                element: <Blogs />,
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
])
export default router;