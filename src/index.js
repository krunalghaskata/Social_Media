const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("../src/config/config");
const UserRouter = require("./Router/user/Router");
const blogRouter = require("./Router/blog/blogRoute");

const router = express.Router();

const app = express();
app.use(express.json());

// middleware
app.use("/api/user", UserRouter.Router);
app.use("/api/blog", blogRouter.Router);

mongoose
  .connect(CONFIG.DB.CONNECTION_URL)
  .then(() => {
    console.log("dataBase connection successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

app.listen(CONFIG.PORT, () => {
  console.log(`server start on port http://localhost:${CONFIG.PORT}`);
});
