import { Router } from "express";
import {
  createAuthor,
  createCategory,
  createUser,
  deleteAuthorById,
  deleteCategoryById,
  deleteUserById,
  getAllAuthors,
  getAllCategories,
  getAllUsers,
  getAuthorById,
  getCategoryById,
  getUserById,
  loginUser,
  registerUser,
  updateAuthorById,
  updateUserById,
} from "../controllers/index.controller.js";
import { validationMiddleware, adminOrSuperAdminGuard, checkIsSelfGuard, isSuperAdmin} from "../middlewares/index.middleware.js";
import { registerSchema, loginSchema, authorSchema, cartegorySchema } from "../database/schemas/index.schema.js";
import { checkTokens } from "../middlewares/check.tokens.js";


export const userRouter = new Router();

//user, admin , SuperAmin uchun faqat
userRouter.post("/register", validationMiddleware(registerSchema), registerUser);
userRouter.post("/login", validationMiddleware(loginSchema), loginUser);

//superAdmin va admin userlar malumotlarni ustida ishlashi uchun superAdmin adminni ham chpishi mumkun
userRouter.post("user", checkTokens, adminOrSuperAdminGuard ,validationMiddleware(registerSchema), createUser)
userRouter.get("/user",checkTokens, adminOrSuperAdminGuard, getAllUsers);
userRouter.get("/user/:id",checkTokens, isSuperAdmin,checkIsSelfGuard, getUserById);//ISAdmin bu yerda oddiy admin superadminni ga dostup olmasligi uchun tekshirganman
userRouter.post("/user/:id", checkTokens, isSuperAdmin, checkIsSelfGuard, updateUserById);
userRouter.delete("/user/:id", checkTokens, isSuperAdmin, checkIsSelfGuard, deleteUserById);

//SuperAdmin va admin uchun hamma narsaga dostup bor 
userRouter.post("/author", checkTokens, adminOrSuperAdminGuard, validationMiddleware(authorSchema), createAuthor)
userRouter.get("/author",checkTokens,checkIsSelfGuard, getAllAuthors);
userRouter.get("/author/:id", checkTokens, checkIsSelfGuard, getAuthorById);
userRouter.post("/author/:id", checkTokens, checkIsSelfGuard, updateAuthorById);
userRouter.delete("/author/:id", checkTokens, checkIsSelfGuard, deleteAuthorById);

//SuperAdmin va admin uchun hamma narsaga dostup bor 
userRouter.post("/cartegory", checkTokens, adminOrSuperAdminGuard, validationMiddleware(cartegorySchema), createCategory)
userRouter.get("/cartegory", checkTokens, adminOrSuperAdminGuard, getAllCategories);
userRouter.get("/cartegory/:id", checkTokens, adminOrSuperAdminGuard, getCategoryById);
userRouter.post("/cartegory/:id", checkTokens, adminOrSuperAdminGuard, updateUserById);
userRouter.delete("/cartegory/:id", checkTokens, adminOrSuperAdminGuard, deleteCategoryById);
