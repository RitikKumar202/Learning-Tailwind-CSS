import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      item: "home",
    },
    {
      id: 2,
      item: "skill",
    },
    {
      id: 3,
      item: "contact",
    },
  ];

  return (
    <div className="flex justify-between bg-white items-center w-full h-20 px-4 shadow-md fixed">
      <div>
        <h1 className="text-5xl font-logo ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {navItems.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link.item} smooth duration={500}>{link.item}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navItems.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 text-4xl cursor-pointer font-bold uppercase hover:scale-105 duration-200"
            >
              <Link onClick={()=> setNav(false)} to={link.item} smooth duration={500}>{link.item}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
