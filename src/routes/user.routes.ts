import { Router } from "express";
import { createAdmController } from "../controllers/admin/createAdm.controller";
import { loginController } from "../controllers/auth/login.controller";
import { schemasMiddleware } from "../middlewares/schema/schema.middleware";
import { verifyAuthMiddleware } from "../middlewares/user/authUser.middleware";
import { imageHeadersMiddleware } from "../middlewares/user/emptyBody.middleware";
import { createAdmSchema } from "../schemas/admin/createAdm.schema";
import { upload } from "../utils/cloudinary.utils";

const userRoutes = Router();

userRoutes.patch(
  "/avatar",
  imageHeadersMiddleware,
  verifyAuthMiddleware,
  upload.array("image", Infinity),
  createAdmController
);

userRoutes.delete(
  "/avatar",
  verifyAuthMiddleware,
  createAdmController
);

export default userRoutes;