import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Components/LoginRegistration/Login/Login";
import Registration from "../../Components/LoginRegistration/Registration/Registration";
import TnC from "../../Components/Others/TnC/TnC";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-spree-server.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learning-spree-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-spree-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/T&C',
                element: <TnC></TnC>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])