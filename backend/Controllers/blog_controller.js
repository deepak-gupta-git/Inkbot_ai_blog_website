const Blogs = require("../Models/blog_model")


//get blog by id
const getBlogByid = async (req, res) => {
  try {
    const blogId = req.params.id;
   const blog = await Blogs.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).send({message : "Error Fetching the Blogs"})
    }
}

//add blogs
const addBlogs = async (req, res) => {
  try {
    const {title, category, author, content, image} = req.body;
    const blogData = await Blogs.create ({title, category, author, content, image});
    res.status(200).json({msg : "Added Succesfully"})
    console.log(blogData);
    
  } catch (error) {
    console.log(error);
  }
}

//filterBlogs
const filterBlogs = async (req, res) => {
  const category = req.query.category;
  const filter = category ? { category } : {};

  const blogs = await Blogs.find(filter);
  res.json(blogs);
};



module.exports = {getBlogs,getBlogByid,addBlogs,filterBlogs};