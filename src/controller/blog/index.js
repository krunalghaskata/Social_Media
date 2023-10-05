const allBlog = require("./allBlog");
const addBlog = require("./addBlogs.js");
const updateBlog = require("./blogUpdate");
const getByIdBlog = require("./getByIdBlog");
const deleteBlog = require("./deletBlog.js");
const getByUserId = require("./getByUserId.js");
module.exports = {
  allBlog,
  addBlog,
  updateBlog,
  getByIdBlog,
  deleteBlog,
  getByUserId,
};
