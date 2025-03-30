import express from "express";
import user_route from "./user.route.js";
import blog_route from "./blog.route.js";
const Router = express.Router();

const routes = [
  {
    path: "/user",
    route: user_route,
  },
  {
    path: "/blog",
    route: blog_route,
  },
];

routes.forEach((route) => {
  Router.use(route.path, route.route);
});

export default Router;
