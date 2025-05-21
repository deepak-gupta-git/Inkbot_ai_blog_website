const express = require("express")
const router = express.Router();
const {getBlogs,getBlogByid,addBlogs,filterBlogs} = require("../Controllers/blog_controller")

router.route("/blogs").get(getBlogs)
router.route("/blogs/:id").get(getBlogByid)
router.route("/blogs").post(addBlogs)
router.route("/blogs").get(filterBlogs);

module.exports = router;