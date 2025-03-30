import { signup } from "../services/user.service.js";
import handle_promise_error from "../utils/error.handler.js";

//signup middleware
const signup = handle_promise_error(async (req, res) => {
  const { message, user } = await signup(req.body);
  res.status(200).json(message, user);
});

export { signup };
