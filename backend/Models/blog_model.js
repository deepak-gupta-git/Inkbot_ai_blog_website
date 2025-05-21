const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default:
      "https://www.milesweb.in/blog/wp-content/uploads/2017/04/business-blogging.png",
    set: (v) =>
      v === ""
        ? "https://www.milesweb.in/blog/wp-content/uploads/2017/04/business-blogging.png"
        : v
  },
  category: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required:true
  },
  authorPic: {
    type: String
  },
 published_date: {
  type: String,
  default: () => {
    const now = new Date();
    return now.toISOString().split("T")[0]; // "YYYY-MM-DD"
  }
},
  reading_time: {
    type: String,
    default: "5 min"
  },
  content: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  }
});

const Blogs = mongoose.model("Blogs", blogSchema); 
module.exports = Blogs;
