const mongoose = require("mongoose");
const initData = require("./blogData");
const Blogs = require("../Models/blog_model");
require("dotenv").config();

const URI = "mongodb+srv://deepak_gupta:deepak_gupta@cluster0.7gbszgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const initDB = async () => {
  await Blogs.deleteMany({});
  await Blogs.insertMany(initData.data);
  console.log("✅ DB was initialized");
};

async function main() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log("✅ Connected To DB");

    await initDB(); 

    process.exit(); 
  } catch (err) {
    console.error("❌ Error connecting to DB:", err.message);
    process.exit(1);
  }
}

main();
