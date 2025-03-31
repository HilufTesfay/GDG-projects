import Blog from "../model/blog.model.js";
import CustomError from "../utils/custom.error.js";
const create_blog = async (body) => {
  const new_blog = await Blog.create(body);
  if (!new_blog) {
    throw new CustomError(400, "unable to create blog");
  }
  return { message: "blog created successfully", blog: new_blog };
};

const delete_blog = async (id) => {
  const blog = await Blog.findByIdAndDelete(id);
};

const edit_blog = async (id, data) => {
  const upddated_blog = await Blog.findByIdAndUpdate(id, data);
};

const get_all_blogs = async () => {
  const blogs = await Blog.find({});
  return blogs;
};

export { create_blog };
