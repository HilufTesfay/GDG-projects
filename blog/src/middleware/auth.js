import { verify_token } from "../services/token.service.js";

const is_authenticated = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const { verified, sub, user_name } = await verify_token(header);
  if (!verified) {
    return res.status(401).json({ message: "unauthorized" });
  }
  req.user = { id: sub, user_name: user_name };
  next();
};

export default is_authenticated;
