import { Request, Response } from "express";
import { ratingAnonymousService } from "../../../services/comments/create/ratingAnonymous.service";


export const ratingAnonymousController = async (req: Request, res: Response) => {
  const { title, message, rating, clinicId } = req.body;

  const resp = await ratingAnonymousService({
    title, message, rating, clinicId
  });

  return res.status(201).json("Review created successfully");
};
