import React, { useState } from "react";
import { FaTwitterSquare, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [ismenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!ismenu);
  };
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="bg-black flex justify-between items-center text-white p-10 px-4 py-4 ">
        <div className="logo text-xl">
          <NavLink to="/">
            <h1 className="text-orange-500 text-2xl font-bold cursor-pointer">
              Ink<span className="text-white">bot</span>
            </h1>
          </NavLink>
        </div>

        <ul className="md:flex gap-12 text-lg hidden">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services">
            <li className="cursor-pointer">Services</li>
          </NavLink>
          <NavLink to="/about">
            <li className="cursor-pointer">About</li>
          </NavLink>
          <NavLink to="/blogs">
            <li className="cursor-pointer">Blogs</li>
          </NavLink>
          <NavLink to="/contacts">
            <li className="cursor-pointer">Contact</li>
          </NavLink>
        </ul>

        <div className="links md:flex hidden text-white gap-4 items-center text-xl ">
          <a className="hover:text-orange-500" href="https://www.linkedin.com/in/deepak--gupta/">
            <FaLinkedin />
          </a>
          <a className="hover:text-orange-500" href="https://x.com/Deepakgupta014">
            <FaTwitterSquare />
          </a>
          <a className="hover:text-orange-500" href="https://github.com/deepak-gupta-git">
            <FaGithub />
          </a>
          <NavLink to="/createblogs">
            <button className="bg-orange-500 px-4 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Try Free
          </button>
          </NavLink>
        </div>

        <div className="menu md:hidden">
          <button onClick={toggleMenu} className="cursor:pointer">
            {ismenu ? (
              <MdOutlineCancel className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <div>
        <ul
          className={`md:hidden text-lg gap-5 space-y-4 py-5 mt-20 px-8 rounded-md bg-white ${
            ismenu
              ? "fixed top-0 left-0 transition-all ease-in duration-300"
              : "hidden"
          }`}
        >
          <NavLink to="/">
            <li className="mb-3 bg-orange-500 p-1 px-5 rounded-md cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink to="/services">
            <li className="mb-3 bg-orange-500 p-1 px-5 rounded-md cursor-pointer">
              Services
            </li>
          </NavLink>
          <NavLink to="/about">
            {" "}
            <li className="mb-3 bg-orange-500 p-1 px-5 rounded-md cursor-pointer">
              About
            </li>
          </NavLink>
          <NavLink to="/blogs">
            {" "}
            <li className="mb-3 bg-orange-500 p-1 px-5 rounded-md cursor-pointer">
              Blogs
            </li>
          </NavLink>
          <NavLink to="/contacts">
            {" "}
            <li className="mb-3 bg-orange-500 p-1 px-5 rounded-md cursor-pointer">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
