import expres from "express";
import { signup_user } from "../../controller/user.controler.js";

const Router = expres.Router();
Router.route("/").post(signup_user);

export default Router;
