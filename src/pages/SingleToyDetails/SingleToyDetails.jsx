import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState([]);
  useEffect(() => {
    fetch(`https://tiny-toy-server.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);
  console.log(toy);
  return (
    <div className="w-8/12 mx-auto my-20 ">
      <div className="card h-96 card-side bg-base-100 shadow-xl ">
        <figure>
          <img className=" h-full  " src={toy.image} alt="toy" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Seller Name: {toy.sellerName}</h2>
          <h2 className="card-title">Toy price: {toy.price}</h2>
          <h2 className="card-title">Available quantity: {toy.quantity}</h2>
          <h2 className="card-title">Toy details: {toy.description}</h2>
          <h2 className="card-title">{toy.ratings}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
