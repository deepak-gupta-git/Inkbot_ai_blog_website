import React, { useState } from 'react'
import { useEffect } from 'react';

const CategorySelection = (
    // {onSelectCategory, activeCategory}
) => {
    // const categories = ["Startups","Security","AI","Apps","Tech"];
    const [blog, setBlog] = useState([]);
    const [filterBlogs, setFilteBlogs] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

      useEffect(() =>{
            const fetchBlogs = async() => {
                try {
                  let url = "https://inkbot-ai-blog-website.onrender.com/api/blogs";
    
                    // if(selectedCategory){
                    //   url += `?category=${selectedCategory}`;
                    // }
                    const response = await fetch(url);
                    const data = await response.json();
    
                    console.log(data);
                    setBlog(data);
                } catch (error) {
                    console.log("Error Fetch Blogs");        
                }
            }
            fetchBlogs();
        },)

          const filterData = (category) => {
    setIsFiltering(true); 
    setTimeout(() => {
      if (category === "All") {
        setFilteBlogs(blog);
      } else {
        const filtered = blog.filter((item) => item.category === category);
        setFilteBlogs(filtered);
        console.log(filter)
      }
      setIsFiltering(false);
    }, 300); 
  };



  return (
    <div>
      <button>All</button>
      {/* {
        categories.map((category) => (
             <button 
             onClick={() => filterData("Tech")}
             className={`mr-2 space-x-16 ${activeCategory === category ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`} 
             key={category}>
                {category}</button>
        ))
      } */}

      <p onClick={() => filterData("Tech")}>Tech</p>
       {/* <div className={`transition-opacity duration-300 ${isFiltering ? "opacity-50" : "opacity-100"}`}>
        <Listings listings={filterBlogs} />
      </div> */}
    </div>
  )
}

export default CategorySelection
