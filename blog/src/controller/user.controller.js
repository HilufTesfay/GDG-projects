import { signup, signin, signout } from "../services/user.service.js";
import handle_promise_error from "../utils/error.handler.js";

//signup middleware
const signup_user = handle_promise_error(async (req, res) => {
  const { message, user } = await signup(req.body);
  res.status(200).json({ message, user });
});
const signin_user = handle_promise_error(async (req, res) => {
  const { email, password } = req.body;
  const { message, accessToken } = await signin(email, password);
  res.status(200).json({ message, accessToken });
});

const signout_user = handle_promise_error(async (req, res) => {
  const { message } = signout();
  res.status(202).json({ message });
});
export { signup_user, signin_user, signout_user };
