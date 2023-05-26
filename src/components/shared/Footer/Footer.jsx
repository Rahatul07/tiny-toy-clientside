import React from "react";
import logo from "../../../assets/logo/logo.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black  px-10">
        <div className="container mx-auto py-8 px-4 ">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full bg-primary bg-opacity-50 py-10 mr-5 pb-8 px-5 md:w-1/3 mb-5">
              <img className="w-48 h-32" src={logo} alt="" />
              <h4 className="text-white text-lg font-semibold mb-4">
                About Us
              </h4>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultricies odio sed massa convallis, et aliquam diam molestie.
              </p>
            </div>
            <div className="w-full md:w-1/3  bg-primary bg-opacity-50 py-10 mr-5 pb-8 px-5 mb-5">
              <h4 className="text-white text-lg font-semibold mb-4">
                Customer Service
              </h4>
              <ul className="footer-links">
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-warning">
                    Contact Us
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-warning mb-3">
                    FAQ
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-warning mb-3">
                    Returns &amp; Exchanges
                  </a>
                </li>
                <li className="pb-3">
                  <a href="#" className="text-gray-400 hover:text-warning ">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-warning pb-3">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-5 bg-primary bg-opacity-50 py-10  pb-8 px-5">
              <h4 className="text-white text-lg font-semibold mb-4">
                Connect With Us
              </h4>
              <ul className="social-media-links ">
                <li>
                  <a
                    href="#"
                    className="text-gray-400  flex items-center hover:text-warning mb-3 "
                  >
                    <BsFacebook />
                    <i className="pl-2">Facebook</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-warning flex items-center mb-3"
                  >
                    <BsTwitter />
                    <i className=" pl-2">Twitter</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-warning flex items-center mb-3"
                  >
                    <BsInstagram />
                    <i className=" pl-2">Instagram</i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-warning flex items-center"
                  >
                    <BsPinterest />
                    <i className="pl-2">Pinterest</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <hr className="w-16 border border-gray-600" />
            <p className="text-gray-400 mx-4">
              © 2023 Your E-Commerce Store. All rights reserved.
            </p>
            <hr className="w-16 border border-gray-600" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
