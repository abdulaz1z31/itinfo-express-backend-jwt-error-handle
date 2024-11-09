import { Router } from "express";
import { createCategory, getAllCategories, getCategoryById } from "../controllers/index.controller.js";
import { cartegorySchema } from "../database/schemas/index.schema.js";
import { validationMiddleware } from "../middlewares/index.middleware.js";
export const cartegoryRouter = new Router()


cartegoryRouter.post("/cartegory", validationMiddleware(cartegorySchema), createCategory)
cartegoryRouter.get("/cartegory", getAllCategories)
cartegoryRouter.get("/cartegory/:id", getCategoryById)
