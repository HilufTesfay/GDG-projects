import expres from "express";
import {
  post_blog,
  delete_post,
  edit_post,
  get_posts,
} from "../../controller/blog.controller.js";
const Router = expres.Router();
Router.route("/").post(post_blog).get(get_posts).put(edit_post);
Router.route("/:id").delete(delete_post);

export default Router;
