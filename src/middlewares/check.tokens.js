import { verifyTokens } from "../helpers/jwt.token.js";

export const checkTokens = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header is not found" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token is not found" });
    }
    const { error, decode } = verifyTokens("access", token);
    if (error) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = decode;
    next();
  } catch (err) {
    console.error("Error in token verification:", err);
    res.status(500).json({ error: "Server error while verifying token" });
  }
};
