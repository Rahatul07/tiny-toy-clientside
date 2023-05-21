import React from "react";
import Body from "../Body/Body";
import Gallery from "../../Gallery/Gallery";
import ToyCategory from "../../ToyCategory/ToyCategory";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Body />
      <Gallery />
      <ToyCategory />
      <Banner />
      <Testimonials />
    </div>
  );
};

export default Home;
