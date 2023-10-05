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

// const blog = require("../../model/blog/blog");

// const addBlogs = async (req, res) => {
//   try {
//     const { title, description, image, user } = req.body;

//     try {
//       const existing = await User.findById(user);
//       if (!existing) {
//         return res.status(400).send("unable to find user by this ID");
//       } else {
//         return res.status(200).send("find user by this ID");
//       }
//     } catch (error) {
//       // return res.status(504).send('internal server error')
//     }

//     const blogs = new blog({
//       title,
//       description,
//       image,
//       user,
//     });
//     if (!blogs) {
//       return res.status(404).send("please require input");
//     }

//     const session = await mongoose.startSession();
//     session.startTransaction();
//     await blogs.save({ session });
//     existingUser.blog.push(blogs);
//     await existingUser.save({ session });
//     await session.commitTransaction();
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

// module.exports = addBlogs;
