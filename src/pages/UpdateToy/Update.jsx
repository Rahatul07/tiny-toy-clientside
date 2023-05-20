import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
const Update = ({ toy, onSubmit }) => {
  console.log(toy);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="grid grid-cols-[4fr_1fr]">
        <input
          className=" pl-5 h-14 rounded-md mr-5  text-black mb-5"
          defaultValue=""
          {...register("title")}
          placeholder="Toy name"
        />

        <input
          className=" pl-5 h-14 rounded-md  "
          defaultValue={toy.price}
          {...register("price", { required: true })}
          placeholder="Price"
          type="number"
        />
      </div>
      <div className="grid grid-cols-3 w-full">
        <input
          className=" pl-5  rounded-md  mr-5 h-14"
          defaultValue={toy.ratings}
          {...register("ratings", { required: true })}
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
          {...register("image")}
          placeholder="Image link"
          type="url"
        />
      </div>

      <div className="grid grid-cols-2">
        {" "}
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
          {...register("description")}
          placeholder="Description"
        />
      </div>
      <div className="grid grid-cols-1">
        <input className="btn btn-warning " value="Update Toy" type="submit" />
      </div>
    </form>
  );
};

export default Update;
