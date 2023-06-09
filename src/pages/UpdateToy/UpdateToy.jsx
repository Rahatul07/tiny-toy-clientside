import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useTitle } from "../../components/hooks/useTitle";

const UpdateToy = () => {
  useTitle("Update a toy");
  const [toy, setToy] = useState({});
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://tiny-toy-server.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);

  const onSubmit = (data) => {
    fetch(`https://tiny-toy-server.vercel.app/updateToys/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Toy has been updated successfully!",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-white text-center mt-5">
        Update A Toy
      </h1>
      <div className=" my-10 w-10/12 mx-auto">
        <div className="">
          <div className="w-10/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="grid grid-cols-[4fr_1fr]">
                <input
                  className=" pl-5 h-14 rounded-md mr-5  text-black mb-5"
                  defaultValue={toy.title}
                  {...register("title")}
                  placeholder="Toy name"
                />

                <input
                  className=" pl-5 h-14 rounded-md  "
                  defaultValue={toy.price}
                  {...register("price", { required: false })}
                  placeholder="Price"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-3 w-full">
                <input
                  className=" pl-5  rounded-md  mr-5 h-14"
                  defaultValue={toy.ratings}
                  {...register("ratings", { required: false })}
                  placeholder="Ratings"
                  type="text"
                />
                <input
                  className="pl-5 h-14 rounded-md  mr-5 mb-5"
                  defaultValue={toy.quantity}
                  {...register("quantity")}
                  placeholder="Available quantity"
                  type="number"
                />
                <select
                  className=" pl-5 h-14 rounded-md  mb-5 text-gray-400 "
                  defaultValue={toy.category}
                  {...register("category")}
                >
                  <option value="Avengers">Avengers</option>
                  <option value="Star wars">Star wars</option>
                  <option value="Transformers">Transformers</option>
                </select>
              </div>

              <div className="grid grid-cols-1">
                <input
                  className=" pl-5 h-14 rounded-md  mb-5"
                  defaultValue={toy?.image}
                  {...register("image")}
                  placeholder="Image link"
                  type="url"
                />
              </div>

              <div className="grid grid-cols-2">
                <input
                  className="pl-5 h-14 rounded-md  mr-5 mb-5 text-black"
                  value={user?.displayName}
                  {...register("sellerName")}
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="pl-5 h-14 rounded-md   mb-5 text-black"
                  value={user?.email}
                  {...register("sellerEmail")}
                  placeholder="Your email"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1">
                <input
                  className="pl-5 h-14 rounded-md   mb-5 "
                  defaultValue={toy?.description}
                  {...register("description")}
                  placeholder="Description"
                />
              </div>
              <div className="grid grid-cols-1">
                <input
                  className="btn btn-warning "
                  value="Update Toy"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
