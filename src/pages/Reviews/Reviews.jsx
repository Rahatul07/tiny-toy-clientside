import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import img1 from "../../assets/single-toy-images/avengers/01.png";
import img2 from "../../assets/single-toy-images/star wars/01.png";
import img3 from "../../assets/single-toy-images/transformers/01.png";
import img4 from "../../assets/single-toy-images/avengers/02.png";
import img5 from "../../assets/single-toy-images/star wars/02.png";
import img6 from "../../assets/single-toy-images/transformers/02.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
AOS.refresh();
const Reviews = () => {
  return (
    <div
      className="my-24"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1
        className=" font-bold  text-white text-center text-5xl mb-5 mt-48"
        style={{ fontFamily: "'Montserrat', cursive" }}
      >
        FOOD REVIEWS
      </h1>
      <p className="text-white text-xl text-center mb-14 w-8/12 mx-auto">
        Some customer reviews on products have been shown in the section. You
        can easily reach any solution to see the best reviews. The best products
        are available that are reviewed.
      </p>
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 mb-20">
        <div className="card card-side border border-primary bg-primary bg-opacity-50  shadow-xl hover:bg-primary mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img1}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-13255
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Alexa Rodriguez
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">4.5</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <BsStarHalf className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side hover:bg-primary shadow-xl border border-primary bg-primary bg-opacity-50 mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img2}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-452555
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Mario Russo
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side hover:bg-primary border border-primary bg-primary bg-opacity-50 shadow-xl  mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img3}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-453255
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Mario Russo
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side hover:bg-primary border border-primary bg-primary bg-opacity-50 shadow-xl  mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img4}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-84255
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Hiroshi Tanahashi
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">4.7</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <BsStarHalf className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side hover:bg-primary border border-primary bg-primary bg-opacity-50 shadow-xl  mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img5}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-72255
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Hiroshi Tanahashi
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side hover:bg-primary border border-primary bg-primary bg-opacity-50 shadow-xl  mb-5 pl-5 md:pl-1">
          <figure>
            <img
              className=" h-36 w-36 m-5 rounded-2xl"
              src={img6}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Toy code-74255
            </div>

            <div className=" text-white text-base">
              Shop owner :{" "}
              <span
                className="text-warning text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                John Smith
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
                <AiFillStar className="text-warning text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
