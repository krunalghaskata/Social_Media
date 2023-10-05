const blog = require("../../model/blog/blog");

const allBlog = async (req, res) => {
  try {
    const blogs = await blog.find();
    if (!blogs) {
      return res.status(404).send("blogs not found!!!!");
    } else {
      return res.status(200).send(blogs);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = allBlog;
