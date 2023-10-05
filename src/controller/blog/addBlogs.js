const blog = require("../../model/blog/blog");
const User = require("../../model/user/User");

const addBlogs = async (req, res) => {
  const { title, description, image, user } = req.body;

  try {
    const userExist = await User.findById(user);
    if (!userExist) {
      return res.status(400).send("unable to find by this ID");
    }
  } catch (error) {
    res.send(error);
  }

  const blogs = new blog({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blogs.save({ session });
    userExist.blog.push(blogs);
    await userExist.save({ session });
    await session.commitTransaction();
  } catch (error) {
    return res.status(500).send(error);
  }
  return res.status(200).send({ blogs });
};

module.exports = addBlogs;
