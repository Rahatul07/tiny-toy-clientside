import React, { useEffect, useState } from "react";
import category1 from "../../../src/assets/single-toy-images/avengers/category-avenger.png";
import category2 from "../../../src/assets/single-toy-images/transformers/category-transformer.png";
import category3 from "../../../src/assets/single-toy-images/Star wars/category-star-wars.png";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
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
  console.log(toys);
  return (
    <div>
      <div className=" p-5">
        <h1 className="text-center p-5 text-white text-5xl font-bold pb-5">
          Category
        </h1>
        <div className=" w-10/12  mx-auto my-10  md:flex justify-between">
          <div
            onClick={() => handleTabClick("Avengers")}
            className={`card h-56 bg-primary text-white flex-col items-center relative mb-5 w-40 rounded-xl  text-2xl  border-4  border-primary Avenger ${
              category == "Avengers"
                ? " border-warning bg-warning  text-gray-800"
                : ""
            }`}
          >
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category1}
              alt=""
            />

            <button className="font-bold mx-auto rounded-none  m-2 ">
              Avengers
            </button>
          </div>
          <div
            onClick={() => handleTabClick("Transformers")}
            className={`card h-56 bg-primary text-white flex-col items-center relative mb-5 w-40 rounded-xl  text-2xl  border-4  border-primary Avenger ${
              category == "Transformers"
                ? " border-warning bg-warning  text-gray-800"
                : ""
            }`}
          >
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category2}
              alt=""
            />

            <button className="font-bold mx-auto rounded-none  m-2 ">
              Transformers
            </button>
          </div>
          <div
            onClick={() => handleTabClick("Star wars")}
            className={`card h-56 bg-primary text-white flex-col items-center relative mb-5 w-40 rounded-xl  text-2xl  border-4  border-primary Avenger ${
              category == "Star wars"
                ? " border-warning bg-warning  text-gray-800"
                : ""
            }`}
          >
            <img
              className="h-40 w-full btn bg-white border-none hover:bg-white "
              src={category3}
              alt=""
            />

            <button className="font-bold mx-auto rounded-none  m-2 ">
              Star wars
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {toys &&
          toys.map((toy) => <CategoryDetails key={toy._key} toy={toy} />)}
      </div>
    </div>
  );
};

export default ToyCategory;
