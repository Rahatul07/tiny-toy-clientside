import React from "react";

import img1 from "../../assets/single-toy-images/star wars/01.png";
import img2 from "../../assets/single-toy-images/avengers/01.png";
import img3 from "../../assets/single-toy-images/transformers/01.png";
import img4 from "../../assets/single-toy-images/star wars/02.png";
import img5 from "../../assets/single-toy-images/avengers/02.png";
import img6 from "../../assets/single-toy-images/transformers/02.png";
import img7 from "../../assets/single-toy-images/star wars/03.png";
import img8 from "../../assets/single-toy-images/avengers/03.png";

import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

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

const Gallery = () => {
  return (
    <LazyLoad>
      <div
        className="mt-0 mb-24 md:my-24"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <div className="text-center">
          <h1
            style={{ fontFamily: "'Montserrat', cursive" }}
            className="text-5xl md:text-7xl mb-5 font-bold text-primary"
          >
            Core features
          </h1>
          <p
            className="mb-10 w-8/12 text-xl mx-auto text-gray-500"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            voluptatum magni consectetur molestias sapiente hic illo quis ea eum
            alias iure sit saepe error distinctio tenetur non nostrum, maxime
            culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Mollitia voluptatum magni consectetur molestias sapiente hic illo
            quis ea eum alias iure sit saepe error distinctio tenetur non
            nostrum, maxime culpa.
          </p>
        </div>
        <div className=" mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img1}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img2}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img3}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img4}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img5}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img6}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img7}
                alt=""
              />
            </div>
          </Tilt>
          <Tilt>
            <div className="h-full border-4 border-primary  w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img8}
                alt=""
              />
            </div>
          </Tilt>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Gallery;
