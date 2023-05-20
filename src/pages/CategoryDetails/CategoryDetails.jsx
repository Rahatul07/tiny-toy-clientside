import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const CategoryDetails = ({ toy }) => {
  return (
    <div
      className="card w-10/12  mx-auto  shadow-xl relative mb-10"
      style={{
        backgroundImage: `linear-gradient(to right,   rgba(120, 0, 260, 0.8),rgba(100, 1, 254, 0.2))`,
      }}
    >
      <figure className="px-10 pt-10  h-fit">
        <img src={toy.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body pl-10 text-white">
        <h2 className="font-bold text-warning text-xl">
          Title:
          <span className="font-normal ml-3 text-white">{toy.title}</span>
        </h2>

        <h2 className="font-bold text-xl text-warning pb-5">
          Toy price:
          <span className="font-normal ml-3 text-white">${toy.price}</span>
        </h2>

        <div className="flex justify-between ">
          <div className=" flex gap-2 items-center  ">
            <Rating style={{ maxWidth: 130 }} value={toy.ratings} readOnly />
            {toy.ratings}
          </div>
          <div>
            <Link to={`/singleToyDetails/${toy._id}`}>
              <button>
                <BsFillArrowRightCircleFill className="text-warning h-8 w-8" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
