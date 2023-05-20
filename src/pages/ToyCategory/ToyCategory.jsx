import React from "react";
import category1 from "../../../src/assets/single-toy-images/avengers/HOT TOYS Hulk Sixth Scale Figure - The Avengers.png";
import category2 from "../../../src/assets/single-toy-images/transformers/Buy Transformers Studio Series 105 Mirage Deluxe ROTB Movie Toy – Collecticon Toys.png";
import category3 from "../../../src/assets/single-toy-images/star wars/Hasbro Star Wars - Toys, Action Figures, Characters & Adventure Figure Collection.png";
const ToyCategory = () => {
  return (
    <div>
      <div className=" p-5">
        <h1 className="text-center p-5 text-white text-5xl font-bold pb-5">
          Category
        </h1>
        <div className=" w-10/12  mx-auto my-10  md:flex justify-between">
          <div className="card h-56 flex-col items-center relative mb-5 w-40 rounded-xl bg-white border-4 border-primary hover:border-warning">
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category1}
              alt=""
            />

            <h1 className="btn  w-40  hover:bg-warning border-none hover:text-black absolute bottom-0 rounded-none btn-primary m-2 ">
              Avengers
            </h1>
          </div>
          <div className="card h-56 flex-col items-center relative mb-5 w-40 rounded-xl bg-white border-4 border-primary hover:border-warning">
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category2}
              alt=""
            />

            <h1 className="btn  w-40 hover:bg-warning border-none hover:text-black  absolute bottom-0 rounded-none btn-primary m-2 ">
              Transformers
            </h1>
          </div>
          <div className="card h-56 flex-col items-center relative mb-5 w-40 rounded-xl bg-white border-4 border-primary hover:border-warning">
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category3}
              alt=""
            />

            <h1 className="btn  w-40  hover:bg-warning border-none hover:text-black absolute bottom-0 rounded-none btn-primary m-2 ">
              Star Wars
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
