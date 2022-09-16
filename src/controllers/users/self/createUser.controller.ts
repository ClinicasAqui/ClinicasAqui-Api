import { Request, Response } from "express";
import { ICreateUser } from "../../../interfaces/admin/createUser";

export const createUSerController = async (req: Request, res: Response) => {
  const { name, email, password, cpf, age, avatar }: ICreateUser = req.body;

  const message = await ({
    name,
    email,
    password,
    cpf,
    age,
    avatar,
  });

  return res.status(201).json({ message });
};
