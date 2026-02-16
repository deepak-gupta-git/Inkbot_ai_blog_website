import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import SideBar from './SideBar';
// import CategorySelection from './CategorySelection';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = "https://inkbot-ai-blog-website.onrender.com/api/blogs";

        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("API Error:", data);
          setBlogs([]);
        }

      } catch (error) {
        console.error("Error Fetching Blogs:", error);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className='p-6'>
      {/* <CategorySelection
        onSelectCategory={handleCategory}
        selectedCategory={selectedCategory}
        activeCategory={activeCategory}
      /> */}

      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} selectedCategory={selectedCategory} />
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
