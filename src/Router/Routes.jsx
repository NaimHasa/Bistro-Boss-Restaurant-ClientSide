import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Secrte from "../Pages/Shared/Secrte/Secrte";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Deshboard/MyCart/MyCart";
import AllUsers from "../Pages/Deshboard/AllUsers/AllUsers";
import AddItem from "../Pages/Deshboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Deshboard/ManageItems/ManageItems";
import Payment from "../Pages/Deshboard/PayMent/PayMent";
// import PayMent from "../Pages/Deshboard/PayMent/PayMent";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secrte></Secrte></PrivateRoute>
            }

        ],

    },
    {
        path: 'deshboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            //User Route 
            {
                path: 'mycart',
                element: <MyCart></MyCart>

            },
            {
                path: 'payment',
                element: <Payment></Payment>

            },



            //Admin Routes 
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }

        ]

    }

]);

