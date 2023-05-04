import {
  createBrowserRouter,

} from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Recipes from "../components/Recipes/Recipes";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://assignment-10-server-site-ashikuzzamanmoon.vercel.app/chef')
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute> <Recipes></Recipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-site-ashikuzzamanmoon.vercel.app/chef/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
]);
export default router;