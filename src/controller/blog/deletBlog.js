const blog = require("../../model/blog/blog");

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await blog.findByIdAndDelete(id).populate("user");
    console.log(blog);
    await blogs.user.blog.pull(blogs);
    await blogs.user.save();
  } catch (error) {
    return res.status(400).json(error);
  }
  if (!blogs) {
    return res.status(404).send("unable to delete");
  }
  return res.status(201).send("delete successfully");
};
module.exports = deleteBlog;
