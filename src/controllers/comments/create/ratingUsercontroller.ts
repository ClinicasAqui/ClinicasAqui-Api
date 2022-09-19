import { Request, Response } from "express";
import { ratingUserService } from "../../../services/comments/create/ratingUser.service";


export const ratingUserController = async (req: Request, res: Response) => {
  const { title, message, rating, clinicId } = req.body;

  const userId = req.user.id

  const resp = await ratingUserService({
    title, message, rating, clinicId, userId
  });

  return res.status(201).json("Review created successfully");
};
