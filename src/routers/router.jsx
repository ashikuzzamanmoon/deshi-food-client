import {
  createBrowserRouter,
 
} from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Recipes from "../components/Recipes/Recipes";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/chef')
        },
        {
          path: '/recipes/:id',
          element: <Recipes></Recipes>,
          loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    }
  ]); 
export default router;