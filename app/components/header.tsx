"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="bg-orange-900">
      <div className="flex justify-between items-center">
        <h1 className="font-logo m-7"><a href="#">Ghufran Hasan</a></h1>
        <ul className="m-7 md:flex hidden">
          <a href="#">
            <li className="mx-5 text-2xl font-menu hover:font-bold hover:scale-150 hover:text-yellow-600 duration-500">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="mx-5 text-2xl font-menu hover:font-bold hover:scale-150 hover:text-yellow-600 duration-500">
              About
            </li>
          </a>
          <a href="#portfolio">  
            <li className="mx-5 text-2xl font-menu hover:font-bold hover:scale-150 hover:text-yellow-600 duration-500">
              Portfolio
            </li>
          </a>
          <a href="#skills">
            <li className="mx-5 text-2xl font-menu hover:font-bold hover:scale-150 hover:text-yellow-600 duration-500">
              Skills
            </li>
          </a>
          <a href="#contact">
            <li className="mx-5 text-2xl font-menu hover:font-bold hover:scale-150 hover:text-yellow-600 duration-500">
              Contact
            </li>
          </a>
        </ul>
        <div
          className="pr-5 md:hidden z-10"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle ?
        <div className="fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center justify-center">
          <ul className="m-7 md:flex text-white">
            <li className="mx-5 text-6xl font-menu">
              Home
            </li>
            <li className="mx-5 my-2 text-6xl font-menu">
              About
            </li>
            <li className="mx-5 my-2 text-6xl font-menu">
              Portfolio
            </li>
            <li className="mx-5 my-2 text-6xl font-menu">
              Skills
            </li>
            <li className="mx-5 my-2 text-6xl font-menu">
              Contact
            </li>
          </ul>
        </div> : null}
        {/* overlay ends here */}
      </div>
    </section>
  );
};
