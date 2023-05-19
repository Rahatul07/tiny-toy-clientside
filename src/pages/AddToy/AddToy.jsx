/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../contexts/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-white text-center mt-5">
        Add A Toy
      </h1>
      <div className=" my-10 w-10/12 mx-auto">
        <div className="">
          <div className="w-10/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="grid grid-cols-[4fr_1fr]">
                <input
                  className=" pl-5 h-14 rounded-md mr-5   mb-5"
                  {...register("title")}
                  placeholder="Toy name"
                />

                <input
                  className=" pl-5 h-14 rounded-md  "
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-3 w-full">
                <input
                  className=" pl-5  rounded-md  mr-5 h-14"
                  {...register("ratings", { required: true })}
                  placeholder="Ratings"
                  type="number"
                />
                <input
                  className="pl-5 h-14 rounded-md  mr-5 mb-5"
                  {...register("quantity")}
                  placeholder="Available quantity"
                  type="number"
                />
                <select
                  className=" pl-5 h-14 rounded-md  mb-5 text-gray-400 "
                  {...register("sub-category")}
                >
                  <option value="Marvel">Marvel</option>
                  <option value="Avengers">Avengers</option>
                  <option value="Star wars">Star wars</option>
                  <option value="Transformers">Transformers</option>
                </select>
              </div>

              <div className="grid grid-cols-1">
                <input
                  className=" pl-5 h-14 rounded-md  mb-5"
                  {...register("image")}
                  placeholder="Image link"
                  type="url"
                />
              </div>

              <div className="grid grid-cols-2">
                {" "}
                <input
                  className="pl-5 h-14 rounded-md  mr-5 mb-5 text-gray-400"
                  value={user?.displayName}
                  {...register("sellerName")}
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="pl-5 h-14 rounded-md   mb-5 text-gray-400"
                  value={user?.email}
                  {...register("sellerEmail")}
                  placeholder="Your email"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1">
                <input
                  className="pl-5 h-14 rounded-md   mb-5 "
                  {...register("description")}
                  placeholder="Description"
                />
              </div>
              <div className="grid grid-cols-1">
                <input
                  className="btn btn-warning "
                  value="Post Toy"
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

export default AddToy;
