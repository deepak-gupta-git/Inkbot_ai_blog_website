import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaClock, FaUser } from "react-icons/fa";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://inkbot-ai-blog-website.onrender.com/api/blogs/${id}`);
        const data = await response.json();
        //   console.log(data);
        setBlog(data);
      } catch (error) {
        console.log("Error Fetch Blogs");
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;
  return (
    <div>
      <div className="bg-black py-32 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5">
            Single Blog
          </h1>
        </div>
      </div>

   <div className="max-w-7xl mx-auto my-12 p-10">
    <div className="lg:w-3/4 mx-auto">
           <div>
           <img src={blog.image} alt="" className="w-full mx-auto rounded" />
      </div>
      <h2 className="text-3xl mt-8 font-bold text-gray-600 mb-4 cursor-pointer">{blog.title}</h2>
      <div className="mt-3">
              <p className="mb-2 text-gray-600"><FaUser className="inline-flex items-center mr-2 "/>{blog.author}</p>
      <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2"/>{blog.reading_time}</p>
      </div>
      <p className="text-gray-600 mb-6 text-base">{blog.content}</p>
      <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam ab, assumenda fugiat aperiam quas atque fugit accusamus inventore et suscipit magnam blanditiis placeat reiciendis corporis explicabo iste voluptatibus veritatis, eveniet recusandae. Fugiat laudantium maiores, ea sed quam explicabo officiis alias eum blanditiis, perferendis veniam aliquam incidunt esse? In doloribus quam quae eligendi harum unde perferendis ullam vitae quidem, porro dolores quis accusantium provident cupiditate. Perspiciatis repellat, tempora cupiditate, qui modi doloremque magnam doloribus nostrum aut odit totam alias nesciunt? Facilis natus dicta, sunt id ipsam doloremque ad porro necessitatibus. Provident ut corrupti amet magni est perspiciatis debitis veritatis? Eaque modi adipisci quos ipsam placeat. Temporibus suscipit, amet nihil doloribus ullam omnis dolor incidunt cumque sed ipsa animi reiciendis aut qui aspernatur deserunt. Quae quaerat quas veritatis corrupti porro, voluptates, dignissimos ex atque ducimus minus vitae, suscipit non inventore laborum debitis praesentium! Dolor cumque sapiente ipsa molestiae nobis commodi excepturi perferendis totam ad explicabo error alias iusto deserunt suscipit tempora ipsum possimus cupiditate quaerat ea magnam sed, id ut? Illum sequi doloribus dolor sint veniam iure earum aliquam reiciendis dicta. At quasi saepe commodi fugit autem incidunt ipsa quisquam. Ex sint quae fuga praesentium odio inventore sunt quisquam libero necessitatibus!</p>
    </div>
   </div>
    </div>
  );
};

export default SingleBlog;
