import expres from "express";
import { signup_user } from "../../controller/user.controller.js";

const Router = expres.Router();
Router.route("/").post(signup_user);

export default Router;
