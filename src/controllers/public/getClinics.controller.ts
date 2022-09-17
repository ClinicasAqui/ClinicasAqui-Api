import { Request, Response } from "express";
import getClinicsService from "../../services/public/getClinics.service";
import getClinicUniqueService from "../../services/public/getClinicsEspecific.service";

const getClinicsController = async (res: Response, req: Request) => {
  const clinics = await getClinicsService();
  console.log(clinics);
  return res.status(200).json(clinics);
};

const getUniqueClinicsController = async (res: Response, req: Request) => {
  const { id } = req.params;

  const clinic = await getClinicUniqueService({ id });
  return res.status(200).json(clinic);
};

export { getClinicsController, getUniqueClinicsController };
