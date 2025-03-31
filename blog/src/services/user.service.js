import User from "../model/user.model.js";
import CustomError from "../utils/custom.error.js";
import { generate_token } from "./token.service.js";
import { DateTime } from "luxon";

//This function signup user
const signup = async (body) => {
  const { email } = body;
  const is_email_taken = await User.is_email_used(email);
  if (is_email_taken) {
    throw new CustomError(400, "This Email is used");
  }
  const user = await User.create(body);
  if (!user) {
    throw new CustomError(400, "unable to create user");
  }

  return { message: "user created successfully", user: user };
};

// This function enable the user to signin
const signin = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(403, "incorrect email or password");
  }
  const is_match = await user.comparePassword(password);
  if (!is_match) {
    throw new CustomError(403, "In correct email or password");
  }
  const expires = DateTime.now().plus({ minute: 5 });
  const token = await generate_token(user.id, user.name, expires);
  return { message: "login successfully", accessToken: token };
};
const signout = () => {
  return { message: "signout successfully" }; //practically this revokes all saved referesh tokens
};

export { signup, signin, signout };
