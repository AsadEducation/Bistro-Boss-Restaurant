import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/our-menu/OurMenu";
import FoodOrder from "../Pages/our-shop/FoodOrder/FoodOrder";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'our-menu',
        element:<OurMenu/>
      },
      {
        path:'our-shop/:category',
        element:<FoodOrder/>
      }
    ]
  },
]);