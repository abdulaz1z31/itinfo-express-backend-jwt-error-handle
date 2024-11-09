import { Router } from "express";
import { createArticle, deleteArticleById, loginAuthor, registerAuthor, updateArticleById } from "../controllers/index.controller.js";
import { articleSchema, loginSchema, registerSchema } from "../database/schemas/index.schema.js";
import { checkTokens, validationMiddleware } from "../middlewares/index.middleware.js";
export const authorRouter = new Router()


authorRouter.post("/register", validationMiddleware(registerSchema), registerAuthor)
authorRouter.post("/login", validationMiddleware(loginSchema), loginAuthor)
authorRouter.post("/article", validationMiddleware(articleSchema), createArticle)
authorRouter.put("/article/:id",checkTokens, updateArticleById)
authorRouter.delete("/article/:id",checkTokens, deleteArticleById)