import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { verifyUserEmailController } from "../controllers/users/self/update/verifyEmail.controller";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { verifyEmailMiddleware } from "../middlewares/user/update/verifyEmail.middleware";
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

authRoutes.post(
  "/verify/user/:hash",
  verifyEmailMiddleware,
  verifyUserEmailController
)


export default authRoutes;