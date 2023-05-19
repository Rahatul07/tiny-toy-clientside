import React from "react";
import img from "../../assets/gallery/01.png";
const Gallery = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="text-5xl mb-5 font-bold text-white">Core features</h1>
        <p className="mb-10 w-8/12 mx-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          voluptatum magni consectetur molestias sapiente hic illo quis ea eum
          alias iure sit saepe error distinctio tenetur non nostrum, maxime
          culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Mollitia voluptatum magni consectetur molestias sapiente hic illo quis
          ea eum alias iure sit saepe error distinctio tenetur non nostrum,
          maxime culpa.
        </p>
      </div>
      <div className=" mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5 ">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>

        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5 ">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>

        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl mx-2">
          <figure className="px-5 py-5">
            <img
              src={img}
              alt="toy"
              className="rounded-xl object-contain w-full h-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
