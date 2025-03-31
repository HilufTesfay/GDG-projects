import {
  create_blog,
  delete_blog,
  edit_blog,
  get_all_blogs,
} from "../services/blog.service.js";
import handle_promise_error from "../utils/error.handler.js";

const post_blog = handle_promise_error(async (req, res) => {
  const { message, blog } = await create_blog(req.body);
  res.status(200).json({ message, blog });
});

const delete_post = handle_promise_error(async (req, res) => {
  const id = req.params.id;
  const { message, deleted_blog } = await delete_blog(id);
  res.status(202).json({ message, deleted_blog });
});
const edit_post = handle_promise_error(async (req, res) => {
  const { id, data } = req.body;
  const { message, updated_blog } = await edit_blog(id, data);
  res.status(202).json({ message, updated_blog });
});

const get_posts = handle_promise_error(async (req, res) => {
  const posts = await get_all_blogs();
  res.status(200).json({ posts });
});
export { post_blog, delete_post, edit_post, get_posts };
