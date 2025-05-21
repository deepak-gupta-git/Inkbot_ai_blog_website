import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCards = ({blogs,selectedCategory}) => {
    const filterBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory);
    console.log(filterBlogs);
    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filterBlogs.map((blogs) => <Link to={`/blogs/${blogs._id}`} key={blogs._id} className='p-5 shadow-lg rounded cursor-pointer'>
        <div>
            <img src={blogs.image} className='w-full' alt="" />
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blogs.title}</h3>
        <p className='mb- text-gray-600'>
            <FaUser className='inline-flex mr-2 mb-1'/>
            {blogs.author}</p>
        <p className='text-sm text-gray-500'>Published: {blogs.published_date}</p>
        </Link>)
      }
    </div>
  )
}

export default BlogCards
