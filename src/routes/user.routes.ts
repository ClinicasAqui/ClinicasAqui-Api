import { Router } from "express";
import { createUSerController } from "../controllers/users/self/create/createUser.controller";
import { deleteUserImageController } from "../controllers/users/self/delete/deleteProfileImage.controller";
import { updateUserImageController } from "../controllers/users/self/update/updateProfileImage.controller";
import { verifyAuthMiddleware } from "../middlewares/user/verifyAuthMiddleware.middleware";
import { imageHeadersMiddleware } from "../middlewares/user/emptyBody.middleware";
import { upload } from "../utils/cloudinary.utils";
import { getUsersController } from "../controllers/users/getUsers/getUsers.controller";
import { verifyAdmAuthMiddleware } from "../middlewares/admin/verifyAdmAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUSerController);

userRoutes.get("", verifyAuthMiddleware, verifyAdmAuthMiddleware, getUsersController)

userRoutes.patch(
  "/avatar",
  imageHeadersMiddleware,
  verifyAuthMiddleware,
  upload.array("image", Infinity),
  updateUserImageController
);

userRoutes.delete("/avatar", verifyAuthMiddleware, deleteUserImageController);

export default userRoutes;
