import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import { Home } from "@mui/icons-material";
import Products from "../../Products/Products";
import Services from "../../Services/Services";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import About from "../../About/About";
import Register from "../../Register/Register";
import Login from "../../Login/Login";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            }, 
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/services',
                element: <Services></Services>
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
            }
           
        ]
    }
])