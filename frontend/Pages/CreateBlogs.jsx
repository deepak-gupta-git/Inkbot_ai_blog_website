import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Ai_Feature from "../src/Components/Ai_Feature";

const CreateBlogs = () => {
  const [createBlog, setCreateBlog] = useState({
    title: "",
    image: "",
    content: "",
    category: "",
    author: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCreateBlog({
      ...createBlog,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createBlog),
      });

      if (response.ok) {
        navigate("/");
        toast.success("Blog Created Successfully!");
        setCreateBlog({
          title: "",
          image: "",
          content: "",
          category: "",
          author: "",
        });
      } else {
        toast.error("Blog not created!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
    <div className='bg-black py-32 px-4 mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:7xl leading-snug font-bold mb-5'>Welcome! Create Your Blog in just a Sec</h1>
        </div>
        </div>
        <Ai_Feature/>
      <div className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={createBlog.title}
              onChange={handleInput}
              placeholder="Enter a catchy title"
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              id="category"
              name="category"
              value={createBlog.category}
              onChange={handleInput}
              className="w-full border border-gray-300 rounded-md p-3"
              required
            >
              <option value="">Select a category</option>
              <option value="Health">Security</option>
              <option value="Technology">Tech</option>
              <option value="Ai">Ai</option>
              <option value="Work">Work</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Growth">Growth</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image URL</label>
            <input
              id="image"
              name="image"
              type="text"
              value={createBlog.image}
              onChange={handleInput}
              placeholder="Paste blog image URL"
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
            <textarea
              id="content"
              name="content"
              rows="5"
              value={createBlog.content}
              onChange={handleInput}
              placeholder="Write your blog content here..."
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={createBlog.author}
              onChange={handleInput}
              placeholder="Author name"
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-3">
            <button
              type="submit"
              className="text-white mt4 bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;
