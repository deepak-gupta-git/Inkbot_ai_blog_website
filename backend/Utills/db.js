const mongoose = require("mongoose")

const URI = process.env.MONGO_URI

const ConnectDb =  async () => {
      try {
       await mongoose.connect(URI)
         console.log("Connected To Database");
    } catch (error) {
        console.log("Not Connected To Database");
    }
}

module.exports = ConnectDb;