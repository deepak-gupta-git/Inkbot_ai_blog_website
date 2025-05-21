import React from "react";
// import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black py-32 px-4 mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5">
          Welcome to Inkbot
        </h1>
        <p className="lg:w-3/5 mx-auto mb-5 font-sans">
          Start your blog today and join a community of writters and readers who
          are participate about during their stories and passionnate about
          sharing their stories and ideas. We offer everything you need to get
          started, them helpful tips and tutorials
        </p>
        <div>
          <NavLink to="/about">
            {" "}
            <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
              Learn More
            </button>
          </NavLink>
        </div>
        <NavLink to="/createBlogs"><button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in mt-4'>Create Your Own Blog Using Ai</button></NavLink>
      </div>
    </div>
  );
};

export default Banner;
