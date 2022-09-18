import { Router } from "express";
import { createUSerController } from "../controllers/users/self/createUser.controller";
import { deleteUserImageController } from "../controllers/users/self/profile_image/deleteProfileImage.controller";
import { updateUserImageController } from "../controllers/users/self/profile_image/updateProfileImage.controller";
import { verifyAuthMiddleware } from "../middlewares/user/verifyAuthMiddleware.middleware";
import { imageHeadersMiddleware } from "../middlewares/user/emptyBody.middleware";
import { upload } from "../utils/cloudinary.utils";

const userRoutes = Router();

userRoutes.post("", createUSerController);

userRoutes.patch(
  "/avatar",
  imageHeadersMiddleware,
  verifyAuthMiddleware,
  upload.array("image", Infinity),
  updateUserImageController
);

userRoutes.delete("/avatar", verifyAuthMiddleware, deleteUserImageController);

export default userRoutes;
