const blog = require("../../model/blog/blog");

const updateBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(blogs);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = updateBlog;
