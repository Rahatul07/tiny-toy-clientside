import React from "react";
import image from "../../../assets/homeCarousel/01.png";

const Body = () => {
  return (
    <div className="md:flex items-center justify-between mt-10 mx-auto">
      <div className="w-96 ">
        <h1 className="text-5xl font-bold ">
          Get your <br />
          <span className="text-primary">Dream Toy</span>
        </h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          voluptatum magni consectetur molestias sapiente hic illo quis ea eum
          alias iure sit saepe error distinctio tenetur non nostrum, maxime
          culpa.
        </p>
      </div>
      <div className=" w-3/4">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Body;
