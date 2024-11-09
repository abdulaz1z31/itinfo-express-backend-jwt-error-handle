import { Router } from "express";
import {
  createArticle,
  createAuthor,
  createCategory,
  createUser,
  deleteArticleById,
  deleteAuthorById,
  deleteCategoryById,
  deleteUserById,
  getAllArticles,
  getAllAuthors,
  getAllCategories,
  getAllUsers,
  getArticleById,
  getAuthorById,
  getCategoryById,
  getUserById,
  loginUser,
  registerUser,
  updateArticleById,
  updateAuthorById,
  updateUserById,
} from "../controllers/index.controller.js";
import { validationMiddleware, adminOrSuperAdminGuard, checkIsSelfGuard, isSuperAdmin} from "../middlewares/index.middleware.js";
import { registerSchema, loginSchema, authorSchema, cartegorySchema, articleSchema, userSchema } from "../database/schemas/index.schema.js";
import { checkTokens } from "../middlewares/check.tokens.js";


export const userRouter = new Router();

//user, admin , SuperAmin uchun faqat
userRouter.post("/register", validationMiddleware(userSchema), registerUser);
userRouter.post("/login", validationMiddleware(loginSchema), loginUser);

//superAdmin va admin userlar malumotlarni ustida ishlashi uchun superAdmin adminni ham chpishi mumkun
userRouter.post("/user", checkTokens, adminOrSuperAdminGuard ,validationMiddleware(registerSchema), createUser)
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


//Super admin va admin va article yozgan odamga dostup bor
userRouter.get("/article",checkTokens,adminOrSuperAdminGuard, getAllArticles)
userRouter.get("/article", checkTokens, adminOrSuperAdminGuard, getArticleById)
userRouter.post("/article", checkTokens, validationMiddleware(articleSchema),adminOrSuperAdminGuard, createArticle)
userRouter.put("/article/:id", checkTokens, adminOrSuperAdminGuard, updateArticleById)
userRouter.delete("/article/:id", checkTokens,adminOrSuperAdminGuard, deleteArticleById)