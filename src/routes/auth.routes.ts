import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { loginSchema } from "../schemas/auth/login.schema";

const authRoutes = Router();

authRoutes.post(
  "/login",
  schemasMiddleware(loginSchema),
  loginController
);

authRoutes.post(
  "/clinic",
  schemasMiddleware(loginSchema),
  loginController
);


export default authRoutes;