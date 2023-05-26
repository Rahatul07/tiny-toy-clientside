import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div
      className="bg-primary bg-opacity-10"
      // style={{
      //   backgroundImage: `linear-gradient(to right, rgba(116, 44, 254, 0.9), rgba(151, 44, 154, 0.4))`,
      // }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
