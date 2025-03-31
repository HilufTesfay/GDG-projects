import expres from "express";
import {
  post_blog,
  delete_post,
  edit_post,
  get_posts,
} from "../../controller/blog.controller.js";
import is_authenticated from "../../middleware/auth.js";

const Router = expres.Router();
Router.route("/")
  .post(is_authenticated, post_blog)
  .get(is_authenticated, get_posts)
  .put(is_authenticated, edit_post);

Router.route("/:id").delete(is_authenticated, delete_post);

export default Router;
