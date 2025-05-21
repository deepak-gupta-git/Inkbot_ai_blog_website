const express = require("express")
const app = express();
// const dotenv = require("dotenv")
require("dotenv").config();
const cors = require("cors")


//routes
const ConnectDb = require("../backend/Utills/db")
const blogRoutes = require("./Router/blog_router")

//port
const PORT = process.env.PORT


//cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


//router
app.use("/api", blogRoutes);

ConnectDb().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is Listening On PORT ${PORT}`);
});
});


