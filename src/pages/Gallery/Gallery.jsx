import React from "react";
import img from "../../assets/single-toy-images/star wars/Marvel Marvel Avengers Titan Hero Series Thor Toy, 12-Inch-Scale Thor.png";
import img2 from "../../assets/single-toy-images/avengers/Thor toy in limited edition.png";
import img3 from "../../assets/single-toy-images/star wars/Hasbro Star Wars - Toys, Action Figures, Characters & Adventure Figure Collection.png";
import img4 from "../../assets/single-toy-images/transformers/Buy Transformers Studio Series 105 Mirage Deluxe ROTB Movie Toy – Collecticon Toys.png";
import img5 from "../../assets/single-toy-images/avengers/Hot Toys Limited Edition 6 scale Iron Man Mark XLVII Collectible Figure.png";
import img6 from "../../assets/single-toy-images/transformers/Transformers Toys Studio Series 50 Deluxe The Last Knight Movie.png";
import img7 from "../../assets/single-toy-images/star wars/Star Wars Action Figures.png";
import img8 from "../../assets/single-toy-images/transformers/Transformers Toys Studio Series 74 Deluxe Class Transformers.png";
import LazyLoad from "react-lazy-load";
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

const Gallery = () => {
  return (
    <LazyLoad>
      <div
        className="my-24"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="text-center">
          <h1 className="text-5xl mb-5 font-bold text-white">Core features</h1>
          <p className="mb-10 w-8/12 mx-auto text-white">
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
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img8}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img2}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img3}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img4}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img5}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img6}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img7}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-8 border-primary">
            <div className="h-full   w-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={img}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"></div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Gallery;
