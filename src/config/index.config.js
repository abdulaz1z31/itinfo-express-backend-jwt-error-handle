import dotenv from "dotenv"
dotenv.config()


export const port = process.env.PORT
export const db_url = process.env.MONGO_URI
export const accessKey = process.env.ACCESS_KEY
export const refreshKey = process.env.REFRESH_KEY
export const accessTime = process.env.ACCESS_TIME
export const refreshTime = process.env.REFRESH_TIME