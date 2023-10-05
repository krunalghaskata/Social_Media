const blog = require("../../model/blog/blog");

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await blog.findByIdAndDelete(id).populate('user');
     
      if (!blogs) {
      return res.status(404).send("unable to delete");
    } else {
      res.status(201).send("delete successfully");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = deleteBlog;
