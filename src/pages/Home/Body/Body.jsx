import React from "react";
import carouselImage1 from "../../../assets/homeCarousel/01.png";
import carouselImage2 from "../../../assets/homeCarousel/02.png";
import carouselImage3 from "../../../assets/homeCarousel/03.png";
import carouselImage4 from "../../../assets/homeCarousel/04.png";
import carouselImage5 from "../../../assets/homeCarousel/05.png";

import { Carousel } from "flowbite-react";

const Body = () => {
  return (
    <div className=" ">
      <div className="h-screen mb-10  top-0 -mt-0 2xl:-mt-2">
        <Carousel>
          <img src={carouselImage1} alt="..." />
          <img src={carouselImage2} alt="..." />
          <img src={carouselImage3} alt="..." />
          <img src={carouselImage4} alt="..." />
          <img src={carouselImage5} alt="..." />
        </Carousel>
      </div>
    </div>
    // <div
    //   className="h-screen w-auto bg-cover  pb-24  mb-28 "
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
    //   }}
    // >
    //   <div className="w-3/5 text-center mx-auto pt-10 ">
    //     <h1 className="text-7xl font-bold text-white ">
    //       Get your <br />
    //       <span className="text-warning ">Dream Toy</span> <br /> in a cheap
    //       rate
    //     </h1>
    //     <p className="mt-10 text-white ">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
    //       voluptatum magni consectetur molestias sapiente hic illo quis ea eum
    //       alias iure sit saepe error distinctio tenetur non nostrum, maxime
    //       culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //       Mollitia voluptatum magni consectetur molestias sapiente hic illo quis
    //       ea eum alias iure sit saepe error distinctio tenetur non nostrum,
    //       maxime culpa.
    //     </p>
    //   </div>
    // </div>
    // <div
    //   className="md:flex  justify-between pt-10 mx-auto pl-10 pb-10 "
    //   // style={{
    //   //   backgroundImage: `linear-gradient(to right, rgba(116, 44, 254, 0.9), rgba(151, 44, 154, 0.4))`,
    //   // }}
    //   // style={{
    //   //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
    //   // }}
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
    //   }}
    // >
    //   <div className="w-3/5 h-auto ">
    //     <h1 className="text-7xl font-bold text-white">
    //       Get your <br />
    //       <span className="text-warning ">Dream Toy</span> <br /> in a cheap
    //       rate
    //     </h1>
    //     <p className="mt-10 text-white ">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
    //       voluptatum magni consectetur molestias sapiente hic illo quis ea eum
    //       alias iure sit saepe error distinctio tenetur non nostrum, maxime
    //       culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //       Mollitia voluptatum magni consectetur molestias sapiente hic illo quis
    //       ea eum alias iure sit saepe error distinctio tenetur non nostrum,
    //       maxime culpa.
    //     </p>
    //   </div>
    //   {/* <div className="h-auto w-4/5 ">
    //     <img src={image} alt="" />
    //   </div> */}
    // </div>
  );
};

export default Body;
