const express = require("express");
const Router = express.Router();
const Controller = require("../../controller/index");

Router.get("/", Controller.allBlog);
Router.get("/:id", Controller.getByIdBlog);
Router.post("/addBlog", Controller.addBlog);
Router.patch("/update/:id", Controller.updateBlog);
Router.delete("/delete/:id", Controller.deleteBlog);
Router.get("./user/:id", Controller.getByUserId );

exports.Router = Router;
