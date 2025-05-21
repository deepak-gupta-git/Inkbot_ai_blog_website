import React from 'react'
import BlogPage from '../src/Components/BlogPage'
// import SideBar from '../src/Components/SideBar'

const Blogs = () => {
  return (
    <div>
       <div className='bg-black py-32 px-4 mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:7xl leading-snug font-bold mb-5'>Welcome to Blog Page</h1>
          
        </div>
    </div>
    <BlogPage/>
    </div>
  )
}

export default Blogs
