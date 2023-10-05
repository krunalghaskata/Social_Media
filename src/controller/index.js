const UserController = require("./userController/index");
const blogController = require('../controller/blog/index')



const AllController = {
    ...UserController,
    ...blogController
};
module.exports = AllController;
