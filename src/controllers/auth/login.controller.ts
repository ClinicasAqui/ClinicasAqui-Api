import { Request, Response } from "express";
import { loginService } from "../../services/auth/login.service";


export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const ip  = req.ip

  const token = await loginService({ email, password, ip });

  return res.json({accessToken: token});
};

// req.ip