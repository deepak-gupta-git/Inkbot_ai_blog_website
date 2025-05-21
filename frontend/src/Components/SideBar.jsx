import React from 'react'
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
 
     const [popularBlog, setPopularBlog] = useState([]);
    
        useEffect(() =>{
            const fetchBlogs = async() => {
                try {
                    const response = await fetch("http://localhost:8080/api/blogs");
                    const data = await response.json();
                    console.log(data);
                    setPopularBlog(data);
                } catch (error) {
                    console.log("Error Fetch Blogs");        
                }
            }
            fetchBlogs();
        },[])
  return (
    <div className='hidden lg:block'>
      <p className='text-3xl font-semibold px-10'>Latest Blogs</p>
      {
        popularBlog.slice(0,10).map(blog => <div key ={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
            <h4 className='font-medium mb-2'>{blog.title}</h4>
            <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center 
            py-1'>Raed more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>)
      }

         <p className='text-3xl font-semibold px-10 mt-10'>Popular Blogs</p>
      {
        popularBlog.slice(10,20).map(blog => <div key ={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
            <h4 className='font-medium mb-2'>{blog.title}</h4>
            <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center 
            py-1'>Raed more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>)
      }
    
    </div>
  )
}

export default SideBar
