import React from "react";
import image from "../../../assets/homeCarousel/01.png";

const Body = () => {
  return (
    <div
      className="md:flex  justify-between pt-10 mx-auto pl-10 pb-10 "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(116, 44, 254, 0.9), rgba(151, 44, 154, 0.4))`,
      }}
    >
      <div className="w-3/5 h-auto ">
        <h1 className="text-7xl font-bold text-white">
          Get your <br />
          <span className="text-warning ">Dream Toy</span> <br /> in a cheap
          rate
        </h1>
        <p className="mt-10 text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          voluptatum magni consectetur molestias sapiente hic illo quis ea eum
          alias iure sit saepe error distinctio tenetur non nostrum, maxime
          culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Mollitia voluptatum magni consectetur molestias sapiente hic illo quis
          ea eum alias iure sit saepe error distinctio tenetur non nostrum,
          maxime culpa.
        </p>
      </div>
      <div className="h-auto w-4/5 ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Body;
