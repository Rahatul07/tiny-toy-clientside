import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import AllToys from "../../pages/AllToys/AllToys";
import AddToy from "../../pages/AddToy/AddToy";
import MyToys from "../../pages/MyToys/MyToys";
import Blogs from "../../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/addToy",
        element: <AddToy />,
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
