import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div
      className=" "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(116, 44, 254, 0.9), rgba(151, 44, 154, 0.4))`,
      }}
    >
      <div className="z-10">
        <Header />
      </div>
      <div className="md:min-h-[calc(100vh-341px)] z-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
