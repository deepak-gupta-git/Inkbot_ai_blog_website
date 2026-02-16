import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs = [], selectedCategory }) => {

  if (!Array.isArray(blogs)) {
    return <p>No blogs available</p>;
  }

  const filterBlogs = blogs.filter(
    (blog) => !selectedCategory || blog.category === selectedCategory
  );

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filterBlogs.map((blog) => (
        <Link
          to={`/blogs/${blog._id}`}
          key={blog._id}
          className='p-5 shadow-lg rounded cursor-pointer'
        >
          <div>
            <img src={blog.image} className='w-full' alt="" />
          </div>

          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
            {blog.title}
          </h3>

          <p className='mb-2 text-gray-600'>
            <FaUser className='inline-flex mr-2 mb-1' />
            {blog.author}
          </p>

          <p className='text-sm text-gray-500'>
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default BlogCards
