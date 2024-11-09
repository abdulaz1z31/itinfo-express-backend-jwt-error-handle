import { verifyTokens } from "../helpers/jwt.token.js";
import { errorMessages, statusCodes } from "../utils/index.js";

export const checkTokens = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(statusCodes.UNAUTHORIZED).json({ error: errorMessages.UNAUTHORIZED});
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(statusCodes.UNAUTHORIZED).json({ error: "Token is not found" });
    }
    const decode = verifyTokens("access", token);

    req.user = decode;
    next();
  } catch (err) {
    console.error("Error in token verification:", err);
    res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error while verifying token" });
  }
};
