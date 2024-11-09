import dotenv from "dotenv"
dotenv.config()

export const port = process.env.PORT;
export const db_url = process.env.MONGO_URI;
export const accessKey = process.env.JWT_ACCESS_SECRET;
export const refreshKey = process.env.JWT_REFRESH_SECRET;
export const accessTime = process.env.JWT_ACCESS_TIME;
export const refreshTime = process.env.JWT_REFRESH_TIME;
