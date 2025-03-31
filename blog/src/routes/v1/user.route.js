import expres from "express";
import {
  signup_user,
  signin_user,
  signout_user,
} from "../../controller/user.controller.js";

const Router = expres.Router();
Router.route("/signup").post(signup_user);
Router.route("/signin").post(signin_user);
Router.route("/signout").delete(signout_user);

export default Router;
