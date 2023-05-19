import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import AllToys from "../../pages/AllToys/AllToys";
import AddToy from "../../pages/AddToy/AddToy";
import MyToys from "../../pages/MyToys/MyToys";
import Blogs from "../../pages/Blogs/Blogs";
import ErrorMessage from "../../pages/ErrorMessage/ErrorMessage";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SingleToyDetails from "../../pages/SingleToyDetails/SingleToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorMessage />,
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
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/singleToyDetails/:id",
        element: <SingleToyDetails />,
      },
    ],
  },
]);
