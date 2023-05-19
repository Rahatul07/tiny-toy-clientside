import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div
      className=" lg:max-w-7xl 2xl:max-w-full 2xl:mx-20  mx-auto "
      // style={{
      //   backgroundImage: `linear-gradient(to right,  rgba(116, 1, 254, 0.4), rgba(4, 10, 220, 0.2))`,
      // }}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(116, 44, 254, 0.9), rgba(151, 44, 154, 0.4))`,
      }}
    >
      <Header />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
