import jwt from "jsonwebtoken";
import { accessKey, accessTime, refreshKey, refreshTime } from "../config/index.config.js";


export const createTokens = (payload) => {
  const accessToken = jwt.sign(payload, accessKey, { expiresIn: accessTime });
  const refreshToken = jwt.sign(payload, refreshKey, { expiresIn: refreshTime });

  return { accessToken, refreshToken };
};


export const verifyTokens = (type, token) => {
    const data = jwt.verify(
        token,
        type === "access" ? accessKey : refreshKey  
    );
    return data
  };