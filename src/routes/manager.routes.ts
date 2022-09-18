import { Router } from "express";
import { createAdmController } from "../controllers/admin/create/createAdm.controller";
import { admSecretKeyMiddleware } from "../middlewares/admin/admSecretKey.middleware";
import { verifyAdmAuthMiddleware } from "../middlewares/admin/verifyAdmAuth.middleware";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { createUserSchema } from "../schemas/user/createUser.schema";
import { admCreateUserController } from "../controllers/admin/create/createUser.controller";
import { admCreateClinicController } from "../controllers/admin/create/createClinic.controller";
//import { createClinicSchema } from "../schemas/admin/createClinic.schema";

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
  admCreateClinicController
);

export default managerRoutes;
