import { Request, Response } from "express";
import getClinicsService from "../../services/public/getClinics.service";
import getClinicUniqueService from "../../services/public/getUniqueClinic.service";

const getUniqueClinicController = async (res: Response, req: Request) => {
  const { id } = req.params;

  const clinic = await getClinicUniqueService({ id });

  return res.status(200).json(clinic);
};

export default getUniqueClinicController
