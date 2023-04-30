import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Products from "../../Products/Products";
import Services from "../../Services/Services";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Box } from "@mui/material";
import Home from "../../Home/Home";
import About from "../../About/About";
import CheckOutPage from "../../CheckoutPage/CheckOutPage";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/checkoutPage/:id',
                element: <CheckOutPage></CheckOutPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <Box>Page Not Found</Box>
            }
           
        ]
    }
])