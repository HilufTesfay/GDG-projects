import User from "../model/user.model.js";

//This function signup user
const signup = async (body) => {
  const { email } = body;
  const is_eamil_taken = User.is_email_used(email);

  const user = await User.create(body);
  if (!user) {
    console.log("unable to create user");
    return;
  }
  console.log("user created successfully");
  return user;
};

// This function enable the user to signin
const signin = async () => {};
const signout = async () => {};
