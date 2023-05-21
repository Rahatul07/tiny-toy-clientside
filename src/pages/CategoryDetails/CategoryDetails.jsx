import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
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
const CategoryDetails = ({ toy }) => {
  return (
    <div
      className="card w-10/12  mx-auto  shadow-lg mb-10 relative"
      style={{
        backgroundImage: `linear-gradient(to right,   rgba(120, 0, 260, 0.8),rgba(100, 1, 254, 0.2))`,
      }}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        <div className="h-full   w-auto">
          <img
            className="h-fit w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 px-4 pt-4 "
            src={toy.image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="card-body pl-10 text-white">
            <h2 className="font-bold text-warning text-lg">
              Title:
              <span className="font-normal ml-3 text-white">{toy.title}</span>
            </h2>

            <h2 className="font-bold text-lg text-warning pb-5">
              Toy price:
              <span className="font-normal ml-3 text-white">${toy.price}</span>
            </h2>

            <div className="flex justify-between items-center ">
              <div className=" flex gap-2 items-center  absolute bottom-5 left-10">
                <Rating
                  style={{ maxWidth: 130 }}
                  value={toy.ratings}
                  readOnly
                />
                {toy.ratings}
              </div>
              <div className="absolute bottom-3 right-5">
                <Link to={`/singleToyDetails/${toy._id}`} title="View details">
                  <button>
                    <BsFillArrowRightCircleFill className="text-warning h-8 w-8" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
