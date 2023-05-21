import React from "react";
import coverImage from "../../../assets/banner-image/01.png";
const Banner = () => {
  return (
    <div>
      <div
        className="h-96 w-auto bg-cover  pb-10 mt-20 mb-28 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
        }}
      >
        <h1 className="text-white uppercase  text-center font-bold pt-5 lg:pt-10 text-xl">
          SUPER SALE
        </h1>
        <h1 className="uppercase text-warning text-center font-bold  pt-2 text-7xl">
          Up to 50%
        </h1>
        <p className="text-gray-300 bg-black bg-opacity-50 text-center w-8/12 mx-auto mt-3 text-lg">
          Lorem Khaled Ipsum is a major key to success. Always remember in the
          jungle theres a lot of they in there, after you overcome they, you
          will make it to paradise. Bless up.
        </p>
        <button className="text-gray-600 px-3 uppercase bg-warning text-xl mt-3">
          Discover now
        </button>
      </div>
    </div>
  );
};

export default Banner;
