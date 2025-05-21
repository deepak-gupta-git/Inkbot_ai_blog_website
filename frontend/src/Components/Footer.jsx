import React from 'react'
import { FaTwitterSquare,FaGithub,FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-800 text-gray-400 flex justify-around p-5 '>
      <div className="category p-5 hidden lg:block">
        <h3 className='font-bold text-xl text-white'>Category</h3>
        <p>News</p>
        <p>World</p>
        <p>Games</p>
        <p>Reference</p>
      </div>

       <div className="Apple p-5 hidden lg:block">
        <h3 className='font-bold text-white text-xl'>Apples</h3>
        <p>Web</p>
        <p>eCommerce</p>
        <p>Bussiness</p>
        <p>Entertainment</p>
        <p>Portfolio</p>
      </div>

      
       <div className="category p-5 hidden lg:block">
        <h3 className='font-bold text-white text-xl'>Cherry</h3>
        <p>Media</p>
        <p>Brochur</p>
        <p>Education</p>
        <p>Project</p>
      </div>

      
       <div className="category p-5 hidden lg:block">
        <h3 className='font-bold text-white text-xl'>Bussiness</h3>
        <p>Infopreneur</p>
        <p>Personal</p>
        <p>Wiki</p>
        <p>Forum</p>
        <p>Projects</p>
      </div>

        <div className="category p-5 text-xl text-center">
        <h3 className='font-bold text-white'>Follow Us</h3>
        <div className="tags inline-flex gap-4 mt-3">
        <a className='hover:text-orange-500' href="https://www.linkedin.com/in/deepak--gupta/"><FaLinkedin /></a>
        <a className='hover:text-orange-500' href="https://x.com/Deepakgupta014"><FaTwitterSquare /></a>
       <a className='hover:text-orange-500' href="https://github.com/deepak-gupta-git"><FaGithub /></a>
        </div>
        <p className='text-sm cursor-pointer hover:underline'>Developed By Deepak Gupta</p>
      </div>
    </div>
  )
}

export default Footer
