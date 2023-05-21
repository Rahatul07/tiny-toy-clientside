import React from "react";
import coverImage from "../../../assets/banner-image/02.png";
import TestimonialDetails from "./TestimonialDetails";
import LazyLoad from "react-lazy-load";
const Testimonials = () => {
  return (
    <LazyLoad>
      <div className="relative">
        <div
          className="h-96 w-auto bg-cover  pb-24 mt-36 mb-28 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
          }}
        >
          <div>
            <div className="pt-5">
              <h1 className="uppercase text-warning bg-black bg-opacity-50 text-center  font-bold  w-2/5 py-2 mx-auto text-3xl md:text-5xl">
                Testimonials
              </h1>
              <p className="text-gray-300 bg-black bg-opacity-50 text-center w-8/12 mx-auto mt-3  text-lg">
                We are all aware of the unstoppable growth of eCommerce and the
                rising competitiveness that comes along with it. However, rising
                competition is not the only thing that eCommerce businesses have
                to face in todays world.
              </p>
              <p className="text-gray-300 bg-black bg-opacity-50 text-center w-auto mx-auto mt-3 text-lg">
                Devid Warner <br />
                <span>CEO</span>
              </p>
            </div>
            <div className="absolute  md:-bottom-14 mx-auto w-full">
              <TestimonialDetails />
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Testimonials;
