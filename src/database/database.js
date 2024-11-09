import {mongoose, connect }from "mongoose";
import { db_url } from "../config/index.config.js";



export const databaseConnection = async () => {
    try {
        await connect(db_url);
        mongoose.connection.on("connected", () => console.log("MongoDB connected successfully"));
        mongoose.connection.on("error", (err) => {
            console.error("Connection error:", err);
        });
    } catch (error) {
        console.error("Failed:", error);
    }
}