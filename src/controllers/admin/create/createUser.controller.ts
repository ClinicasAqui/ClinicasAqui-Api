import { Request, Response } from "express";
import { ICreateUser } from "../../../interfaces/admin/createUser";
import { admCreateUserService } from "../../../services/admin/create/admCreateUser.service";

export const admCreateUserController = async (req: Request, res: Response) => {
  const { name, email, password, cpf, age, avatar }: ICreateUser = req.body;

  const message = await admCreateUserService({
    name,
    email,
    password,
    cpf,
    age,
    avatar,
  });

  return res.status(201).json({ message });
};
