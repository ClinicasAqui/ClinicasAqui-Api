import { Request, Response } from "express";
import { deleteUserImageService } from "../../../../services/user/self/delete/deleteImage.service";

export const deleteUserImageController = async (req: Request, res: Response) => {
  const userId = req.user.id
  
  await deleteUserImageService(userId)

  return res.status(204).json();
};
