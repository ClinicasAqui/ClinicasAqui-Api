import { Request, Response } from "express";
import { ICreateUser } from "../../interfaces/admin/createUser";
import { createAdmService } from "../../services/admin/createAdm.service";

export const createAdmController = async (req: Request, res: Response) => {
  const { name, email, password, cpf, age, avatar }: ICreateUser = req.body;

  const message = await createAdmService({
    name,
    email,
    password,
    cpf,
    age,
    avatar,
  });

  return res.status(201).json({ message });
};
