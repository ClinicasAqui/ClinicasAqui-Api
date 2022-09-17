import { Router } from "express";
import { createAdmController } from "../controllers/admin/createAdm.controller";
import { loginController } from "../controllers/auth/login.controller";
import { admSecretKeyMiddleware } from "../middlewares/admin/admSecretKey.middleware";
import { verifyAdmAuthMiddleware } from "../middlewares/admin/verifyAdmAuth.middleware";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { createUserSchema } from "../schemas/user/createUser.schema";
import { admCreateUserController } from "../controllers/admin/createUser.controller";
import { admCreateClinicController } from "../controllers/admin/createClinic.controller";
import { createClinicSchema } from "../schemas/admin/createClinic.schema";

const managerRoutes = Router();

managerRoutes.post(
  "/adm/new",
  admSecretKeyMiddleware,
  schemasMiddleware(createUserSchema),
  createAdmController
);

managerRoutes.post(
  "/user/new",
  verifyAdmAuthMiddleware,
  schemasMiddleware(createUserSchema),
  admCreateUserController
);

managerRoutes.post(
  "/clinic/new",
  verifyAdmAuthMiddleware,
  schemasMiddleware(createClinicSchema),
  admCreateClinicController
);

export default managerRoutes;
