import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" lg:max-w-7xl 2xl:max-w-full 2xl:mx-20  mx-auto ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
