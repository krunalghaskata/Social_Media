const blog = require("../../model/blog/blog");

const getByIdBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await blog.findById(id);
    if (!blogs) {
      return res.status(404).send("blog not found !!");
    } else {
      return res.status(200).send(blogs);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};
module.exports = getByIdBlog;
