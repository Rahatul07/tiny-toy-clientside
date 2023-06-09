import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useParams } from "react-router-dom";
import { useTitle } from "../../components/hooks/useTitle";

const SingleToyDetails = () => {
  useTitle("Single toy details");
  const { id } = useParams();
  const [toy, setToy] = useState([]);
  useEffect(() => {
    fetch(`https://tiny-toy-server.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  return (
    <div>
      <h1
        style={{ fontFamily: "'Montserrat', cursive" }}
        className="text-5xl md:text-7xl mb-5 font-bold text-primary mt-10 text-center"
      >
        HERE IS THE TOY DETAILS
      </h1>
      <div
        className="card w-8/12 my-20 mx-auto  shadow-xl"
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
          <h2 className="font-bold text-xl text-warning">
            Seller Name:
            <span className="font-normal ml-3 text-white">
              {toy.sellerName}
            </span>
          </h2>
          <h2 className="font-bold text-xl text-warning">
            Email:
            <span className="font-normal ml-3 text-white">
              {toy.sellerEmail}
            </span>
          </h2>
          <h2 className="font-bold text-xl text-warning">
            Toy price:
            <span className="font-normal ml-3 text-white">${toy.price}</span>
          </h2>
          <h2 className="font-bold text-xl text-warning">
            Available quantity:
            <span className="font-normal ml-3 text-white">{toy.quantity}</span>
          </h2>
          <h2 className="font-bold text-xl text-warning">
            Toy details:
            <span className="font-normal ml-3 text-white">
              {toy.description}
            </span>
          </h2>
          <div className=" flex gap-2 items-center">
            <Rating style={{ maxWidth: 130 }} value={toy.ratings} readOnly />
            {toy.ratings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
