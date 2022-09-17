import { Request, Response } from "express";
import { ICreateUser } from "../../../interfaces/admin/createUser";
import { createUserService } from "../../../services/user/self/createUser.service";

export const createUSerController = async (req: Request, res: Response) => {
  const { name, email, password, cpf, age, avatar }: ICreateUser = req.body;

  const message = await createUserService({
    name,
    email,
    password,
    cpf,
    age,
    avatar,
  });

  return res.status(201).json({ ...message });
};
