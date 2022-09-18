import { Request, Response } from "express";
import { loginClinicService } from "../../services/auth/loginClinic.service";

export const loginClinicController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginClinicService({ email, password });

  return res.json({accessToken: token});
};
