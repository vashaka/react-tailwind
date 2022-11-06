/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

// import { BiMenuAltRight } from "react-icons/Bi";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../../img/logo.svg";

export default function Header() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  return (
    <div>
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="mt-2 z-20">
            <img src={logo} alt="" />
          </div>
          {/* nav items */}
          <div className="hidden md:flex space-x-6 mx-5">
            <a
              href="#"
              className="text-md hover:text-darkGrayishBlue md:text-[15px] lg:text-[20px]"
            >
              Products
            </a>
            <a
              href="#"
              className="text-md hover:text-darkGrayishBlue md:text-[15px] lg:text-[20px]"
            >
              Products
            </a>
            <a
              href="#"
              className="text-md hover:text-darkGrayishBlue md:text-[15px] lg:text-[20px]"
            >
              Products
            </a>
            <a
              href="#"
              className="text-md hover:text-darkGrayishBlue md:text-[15px] lg:text-[20px]"
            >
              Products
            </a>
            <a
              href="#"
              className="text-md hover:text-darkGrayishBlue md:text-[15px] lg:text-[20px]"
            >
              Products
            </a>
          </div>
          <a
            href="#"
            className="bg-brightRed text-white px-6 pt-2 p-3 rounded-full baseline hover:bg-brightRedLight md:block hidden"
          >
            Get Started
          </a>
          {/* Hamburger Menu */}
          {hamburgerMenuClicked ? (
            <BiMenuAltLeft
              className="block md:hidden text-4xl cursor-pointer z-50"
              onClick={() => setHamburgerMenuClicked(false)}
            />
          ) : (
            <BiMenuAltRight
              className="block md:hidden text-4xl cursor-pointer z-50"
              onClick={() => setHamburgerMenuClicked(true)}
            />
          )}
        </div>
      </nav>
      {hamburgerMenuClicked ? (
        <div className="bg-gray-400 absolute top-0 left-0 right-0 bottom-0 z-10 h-screen md:hidden items-center justify-center flex-col flex">
          <a
            href="#"
            className="text-4xl p-4 text-[rgb(42,42,42)] border-solid border-2 border-gray-400 hover:border-indigo-600 m-2"
          >
            Products
          </a>
          <a
            href="#"
            className="text-4xl p-4 text-[rgb(42,42,42)] border-solid border-2 border-gray-400 hover:border-indigo-600 m-2"
          >
            Products
          </a>
          <a
            href="#"
            className="text-4xl p-4 text-[rgb(42,42,42)] border-solid border-2 border-gray-400 hover:border-indigo-600 m-2"
          >
            Products
          </a>
          <a
            href="#"
            className="text-4xl p-4 text-[rgb(42,42,42)] border-solid border-2 border-gray-400 hover:border-indigo-600 m-2"
          >
            Products
          </a>
          <a
            href="#"
            className="text-4xl p-4 text-[rgb(42,42,42)] border-solid border-2 border-gray-400 hover:border-indigo-600 m-2"
          >
            Products
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
