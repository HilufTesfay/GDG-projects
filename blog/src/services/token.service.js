import { sign, verify } from "jsonwebtoken";
import { DateTime } from "luxon";

const secret = "1234567891054321";

const generate_token = async (id, user_name, expires) => {
  const payload = {
    sub: id,
    user_name: user_name,
    iat: DateTime.now().toUnixInteger(),
    exp: expires.toUnixInteger(),
  };
  try {
    return sign(payload, secret);
  } catch (error) {
    console.log(error);
  }
};

const verify_token = async (token) => {
  const token = token.split(" ")[1];
  const payload = verify(token, secret);
  const { sub, user_name } = payload;
  if (!sub || !user_name) {
    return { verified: false, sub: null, user_name: null };
  }
  return { verified: true, sub: sub, user_name: user_name };
};

export { generate_token, verify_token };
