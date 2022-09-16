import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { loginSchema } from "../schemas/auth/login.schema";

const authRouth = Router();

authRouth.post(
  "/login",
  schemasMiddleware(loginSchema),
  loginController
);

authRouth.post(
  "/clinic",
  schemasMiddleware(loginSchema),
  loginController
);


export default authRouth;