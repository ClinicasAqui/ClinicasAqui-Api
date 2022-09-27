import { Request, Response } from "express";
import { getUsersService } from "../../../services/user/getUsers/getUsers.service";


export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();

  return res.status(200).json({users});
};