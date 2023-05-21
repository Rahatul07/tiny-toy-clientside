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
const Gallery = () => {
  return (
    <LazyLoad>
      <div className="my-24">
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
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img2}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img3}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img4}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img5}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img6}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img7}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
          <div className="card w-auto bg-warning shadow-xl mx-2">
            <figure className=" p-2 ">
              <img
                src={img8}
                alt="toy"
                className="rounded-xl object-contain w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Gallery;
