const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Router/user/Router");
const blogRouter = require("./Router/blog/blogRoute");

const router = express.Router();

const app = express();
app.use(express.json());

// middleware
app.use("/api/user", UserRouter.Router);
app.use("/api/blog", blogRouter.Router);

mongoose
  .connect("mongodb://localhost:27017/socialMedia")
  .then(() => {
    console.log("dataBase connection successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

app.listen(2500, () => {
  console.log("server listening port 2500");
});
