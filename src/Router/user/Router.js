const express = require("express");
const Router = express.Router();
const Controller = require("../../controller/index");

Router.get("/", Controller.getAllUser);
Router.post("/signup", Controller.signUp);
Router.post("/login", Controller.login);

exports.Router = Router;
