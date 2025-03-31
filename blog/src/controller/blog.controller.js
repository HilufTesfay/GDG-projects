import { create_blog } from "../services/blog.service.js";
import handle_promise_error from "../utils/error.handler.js";

const post_blog = handle_promise_error(async (req, res) => {
  const { message, blog } = await create_blog(req.body);
  res.status(200).json({ message, blog });
});

export { post_blog };
