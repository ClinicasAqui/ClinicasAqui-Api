import { Request, Response } from "express";
import getClinicsService from "../../services/public/getClinics.service";

export const getClinicsController = async (req: Request, res: Response) => {
  const clinics = await getClinicsService();

  return res.status(200).json({clinics});
};
