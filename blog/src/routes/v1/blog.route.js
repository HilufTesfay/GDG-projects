import expres from "express";
import { post_blog } from "../../controller/blog.controller.js";
const Router = expres.Router();
Router.route("/").post(post_blog);

export default Router;
