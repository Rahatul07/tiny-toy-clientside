import React, { useEffect, useState } from "react";
import category1 from "../../../src/assets/single-toy-images/avengers/category-avenger.png";
import category2 from "../../../src/assets/single-toy-images/transformers/03.png";
import category3 from "../../../src/assets/single-toy-images/star wars/n.png";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import LazyLoad from "react-lazy-load";
const ToyCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Star wars");
  useEffect(() => {
    fetch(`https://tiny-toy-server.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [category]);
  const handleTabClick = (tabName) => {
    setCategory(tabName);
  };

  return (
    <LazyLoad>
      <div>
        <div className=" p-5 -mt-48 md:-mt-60">
          <div className="w-10/12 lg:w-6/12   mx-auto mt-10  flex gap-5  justify-between">
            <div
              onClick={() => handleTabClick("Avengers")}
              className={`card  bg-primary text-white flex-col items-center relative mb-20  w-32 md:w-36 lg:w-40 mx-auto h-32 md:h-44  lg:h-56    rounded-xl  md:text-xl lg:text-2xl  border-4  border-primary hover:shadow-2xl hover:text-warning ${
                category == "Avengers"
                  ? " border-warning bg-warning  text-gray-800"
                  : ""
              }`}
            >
              <img
                className="h-24 md:h-32 lg:h-40  btn bg-white border-none hover:bg-white "
                src={category1}
                alt=""
              />

              <button className="font-bold md:mx-auto rounded-none  mx-2 ">
                Avengers
              </button>
            </div>
            <div
              onClick={() => handleTabClick("Transformers")}
              className={`card  bg-primary text-white flex-col items-center relative mb-20  w-32 md:w-36 lg:w-40 mx-auto h-32 md:h-44  lg:h-56    rounded-xl  md:text-xl lg:text-2xl  border-4  border-primary  hover:shadow-2xl hover:text-warning${
                category == "Transformers"
                  ? " border-warning bg-warning  text-gray-800"
                  : ""
              }`}
            >
              <img
                className="h-24 md:h-32 lg:h-40  btn bg-white border-none hover:bg-white"
                src={category2}
                alt=""
              />

              <button className="font-bold md:mx-auto rounded-none  ">
                Transformers
              </button>
            </div>
            <div
              onClick={() => handleTabClick("Star wars")}
              className={`card  bg-primary text-white flex-col items-center relative mb-20  w-32 md:w-36 lg:w-40 mx-auto h-32 md:h-44  lg:h-56    rounded-xl  md:text-xl lg:text-2xl  border-4  border-primary  hover:shadow-2xl hover:text-warning${
                category == "Star wars"
                  ? " border-warning bg-warning  text-black"
                  : ""
              }`}
            >
              <img
                className="h-24 md:h-32 lg:h-40  btn bg-white border-none hover:bg-white"
                src={category3}
                alt=""
              />

              <button className="font-bold md:mx-auto rounded-none  mx-2">
                Star wars
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {toys &&
            toys.map((toy) => <CategoryDetails key={toy._id} toy={toy} />)}
        </div>
      </div>
    </LazyLoad>
  );
};

export default ToyCategory;
