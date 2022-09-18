import { Router } from "express";
import { ratingAnonymousController } from "../controllers/comments/create/ratingAnonymous.controller";
import { ratingUserController } from "../controllers/comments/create/ratingUsercontroller";
import { verifyAuthMiddleware } from "../middlewares/user/verifyAuthMiddleware.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/rating/anonymous", ratingAnonymousController);

commentsRoutes.post("/rating/user", verifyAuthMiddleware, ratingUserController);

export default commentsRoutes;
