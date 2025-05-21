import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import SideBar from './SideBar';
import CategorySelection from './CategorySelection';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() =>{
        const fetchBlogs = async() => {
            try {
              let url = "http://localhost:8080/api/blogs";

                if(selectedCategory){
                  url += `?category=${selectedCategory}`;
                }

                const response = await fetch(url);
                const data = await response.json();

              
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.log("Error Fetch Blogs");        
            }
        }
        fetchBlogs();
    },[selectedCategory])


    const handleCategory = (category) =>{
      setSelectedCategory(category);
      setActiveCategory(category);
    }

  return (
    <div className='p-6'>
      {/* <CategorySelection onSelectCategory={handleCategory} selectedCategory={selectedCategory}
      activeCategory={activeCategory}/> */}

      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} selectedCategory={selectedCategory}/>
        <div>
        <SideBar/>
      </div>
      </div>
    </div>
  )
}

export default BlogPage
