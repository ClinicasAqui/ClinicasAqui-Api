import { Request, Response } from "express";
import { errorHandler } from "../../error/errorHandler";
import getClinicUniqueService from "../../services/public/getUniqueClinic.service";

export const getUniqueClinicController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const clinic = await getClinicUniqueService({ id });

  return res.status(200).json({clinic});
};
