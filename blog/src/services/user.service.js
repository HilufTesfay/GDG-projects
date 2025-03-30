import User from "../model/user.model.js";
import CustomError from "../utils/custom.error.js";

//This function signup user
const signup = async (body) => {
  const { email } = body;
  const is_email_taken = User.is_email_used(email);
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
const signin = async () => {};
const signout = async () => {};

export { signup };
