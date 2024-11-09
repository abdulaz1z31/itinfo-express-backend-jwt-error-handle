import { Router } from "express";
import { createArticle, deleteArticleById, loginAuthor, registerAuthor, updateArticleById } from "../controllers/index.controller.js";
import { loginSchema, registerSchema } from "../database/schemas/index.schema.js";
import { validationMiddleware } from "../middlewares/index.middleware.js";
export const authorRouter = new Router()


authorRouter.post("/register", validationMiddleware(registerSchema), registerAuthor)
authorRouter.post("/login", validationMiddleware(loginSchema), loginAuthor)
authorRouter.post("/article", createArticle)
authorRouter.put("/article/:id", updateArticleById)
authorRouter.delete("/article/:id", deleteArticleById)