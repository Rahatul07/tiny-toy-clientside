import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../components/hooks/useTitle";

const AllToys = () => {
  useTitle("All toys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://tiny-toy-server.vercel.app/toys")
      .then((req) => req.json())
      .then((data) => setToys(data));
  }, []);
  const handleSearch = () => {
    fetch(`https://tiny-toy-server.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <div>
      <h1 className="my-10 text-5xl text-white font-bold text-center">
        All toys overview
      </h1>
      <div className="search-box p-2 text-center flex justify-center">
        <div className="form-control">
          <div className="input-group ">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search…"
              className="input input-bordered "
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-10 mt-3 mx-auto ">
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
                  <td className="text-center">{toy.category}</td>
                  <td className="text-center">{toy.price}</td>
                  <td className="text-center">{toy.quantity}</td>
                  <td>
                    <Link to={`/singleToyDetails/${toy._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
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
