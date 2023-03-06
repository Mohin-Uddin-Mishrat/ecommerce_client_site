import { createBrowserRouter } from "react-router-dom";
import Allcategories from "../Categories/Allcategories/Allcategories";
import Category from "../Categories/Category";
import Categories from "../Layout/Categories";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
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
            },
            {
                path:'/categories/category/:id',
                loader: async ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
                element:<Category></Category>
            },
        ]
    }
]);
