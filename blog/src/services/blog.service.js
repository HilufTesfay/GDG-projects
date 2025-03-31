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
  if (!blog) {
    throw new CustomError(400, "unable to delete blog");
  }
  return { message: "blog deleted successfully", blog: blog };
};

const edit_blog = async (id, data) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new CustomError(400, "no blog found with this Id");
  }
  Object.keys(data).forEach((key) => {
    blog[key] = data[key];
  });
  const updated_blog = await blog.save();
  console.log(updated_blog);
  if (!updated_blog) {
    throw new CustomError(400, "unable to update blog");
  }
  return { message: "blog updated successfully", updated_blog: updated_blog };
};

const get_all_blogs = async () => {
  const blogs = await Blog.find({});
  return blogs;
};

export { create_blog, delete_blog, edit_blog, get_all_blogs };
