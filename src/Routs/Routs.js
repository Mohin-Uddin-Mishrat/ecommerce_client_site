import { createBrowserRouter } from "react-router-dom";
import Allcategories from "../Categories/Allcategories/Allcategories";
import Categories from "../Layout/Categories";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

export const Router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]   
    },

    {
        path:'/categories',
        element:<Categories></Categories>,
        children:[
            {
                path:'/categories',
                element:<Allcategories></Allcategories>
            }
        ]
    }
]);
