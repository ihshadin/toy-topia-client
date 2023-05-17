import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/LoginSignup/Login";
import Signup from "../components/pages/LoginSignup/Signup";

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
            }
        ]
    }
])
export default router;