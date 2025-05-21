import React from 'react'
import Blogs from './Blogs'
import Banner from '../src/Components/Banner'
import Navbar from '../src/Components/Navbar'
import BlogPage from '../src/Components/BlogPage'
// import BlogCards from '../src/Components/BlogCards'

const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Banner/>
      {/* <Blogs/> */}
      {/* <BlogCards/> */}
      <BlogPage/>
    </div>
  )
}

export default Home
