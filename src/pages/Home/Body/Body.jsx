import React from "react";
import carouselImage1 from "../../../assets/homeCarousel/01.png";
import carouselImage2 from "../../../assets/homeCarousel/02.png";
import carouselImage3 from "../../../assets/homeCarousel/03.png";
import carouselImage4 from "../../../assets/homeCarousel/04.png";

import { Carousel } from "flowbite-react";
import LazyLoad from "react-lazy-load";

const Body = () => {
  return (
    <LazyLoad>
      {" "}
      <div className=" ">
        <div className="h-screen mb-10  top-0 -mt-0 2xl:-mt-2">
          <Carousel>
            <img src={carouselImage1} alt="..." />
            <img src={carouselImage2} alt="..." />
            <img src={carouselImage3} alt="..." />
            <img src={carouselImage4} alt="..." />
          </Carousel>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Body;
