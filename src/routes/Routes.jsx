import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
    ]
    }
])

export default router;