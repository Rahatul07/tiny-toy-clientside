import React from "react";
import Body from "../Body/Body";
import Gallery from "../../Gallery/Gallery";
import ToyCategory from "../../ToyCategory/ToyCategory";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import { useTitle } from "../../../components/hooks/useTitle";
import Reviews from "../../Reviews/Reviews";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Body />
      <Gallery />

      <Banner />
      <ToyCategory />
      <Testimonials />
      <Reviews />
    </div>
  );
};

export default Home;
