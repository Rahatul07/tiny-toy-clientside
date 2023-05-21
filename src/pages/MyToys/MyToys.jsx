import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useTitle } from "../../components/hooks/useTitle";

const MyToys = () => {
  useTitle("My toys");
  const [toys, setToys] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://tiny-toy-server.vercel.app/toys?email=${user?.email}`)
      .then((req) => req.json())
      .then((data) => setToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tiny-toy-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="my-10 text-5xl text-white font-bold text-center">
        My Toys
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys &&
              toys?.map((toy, index) => (
                <tr key={toy._id}>
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.title}</td>
                  <td className="text-center">{toy.category}</td>
                  <td className="text-center">{toy.price}</td>
                  <td className="text-center">{toy.quantity}</td>
                  <td>
                    <Link to={`/updateDetails/${toy._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-error text-black"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
