const blog = require("../../model/blog/blog");

const getByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const userBlogs = await User.findById(id).populate("blog");
  } catch (error) {}
  if (!userBlogs) {
    return res.status(404).send("no blogfound");
  }
  return re.status(200).send(blog.userBlogs);
};

module.exports = getByUserId;
