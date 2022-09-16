import { Router } from "express";
import { createAdmController } from "../controllers/admin/createAdm.controller";
import { loginController } from "../controllers/auth/login.controller";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { createAdmSchema } from "../schemas/admin/createAdm.schema";

const managerRouth = Router();

managerRouth.post(
  "/new",
  schemasMiddleware(createAdmSchema),
  createAdmController
);

managerRouth.post(
  "/clinic",

  loginController
);


export default managerRouth;