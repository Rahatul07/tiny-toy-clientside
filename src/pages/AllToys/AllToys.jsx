import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://tiny-toy-server.vercel.app/toys")
      .then((req) => req.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return (
    <div>
      <h1 className="my-10 text-5xl text-white font-bold text-center">
        All toys overview
      </h1>
      <div className="overflow-x-auto my-10  mx-auto ">
        <table className="table table-compact  mx-auto">
          <thead>
            <tr>
              <th>No.</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.title}</td>
                  <td className="text-center">{toy.ratings}</td>
                  <td className="text-center">{toy.price}</td>
                  <td className="text-center">{toy.quantity}</td>
                  <td>
                    <button className="btn btn-primary">Details</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
