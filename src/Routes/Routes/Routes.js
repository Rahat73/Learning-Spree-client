import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Checkout from "../../Components/Checkout/Checkout";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/LoginRegistration/Login/Login";
import Registration from "../../Components/LoginRegistration/Registration/Registration";
import Main from "../../Layout/Main";


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
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://learning-spree-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])