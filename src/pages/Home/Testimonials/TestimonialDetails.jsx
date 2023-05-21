import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
const TestimonialDetails = () => {
  return (
    <div>
      <div className="stats shadow h-28">
        <div className="stat  flex-none items-center ">
          <div className="stat-figure text-primary text-4xl">
            <FaShippingFast />
          </div>

          <div className="text-xl font-bold text-primary">Free Shipping</div>

          <div className="stat-desc">
            If All order over $150 we will <br /> accept free shipping
          </div>
        </div>

        <div className="stat flex-none items-center bg-gray-800">
          <div className="stat-figure text-warning text-4xl">
            <BsPhoneVibrateFill />
          </div>

          <div className="text-xl font-bold  text-warning">24/7 Support</div>
          <div className="stat-desc text-white">
            0123 456 789 <br />
            9870 654 321
          </div>
        </div>
        <div className="stat flex-none items-center">
          <div className=" stat-figure text-primary text-4xl">
            <GiReturnArrow />
          </div>

          <div className="text-xl font-bold text-primary">Money Back</div>
          <div className="stat-desc">
            If the item do not suit you <br /> we will accept return
          </div>
        </div>
        <div className="stat flex-none items-center bg-gray-800">
          <div className=" stat-figure text-warning text-4xl">
            <MdHighQuality />
          </div>

          <div className="text-xl font-bold text-warning">Quality products</div>
          <div className="stat-desc  text-white">
            The best products that <br /> we can ensure you
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
