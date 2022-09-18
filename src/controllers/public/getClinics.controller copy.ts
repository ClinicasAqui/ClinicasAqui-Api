import { Request, Response } from "express";
import getClinicsService from "../../services/public/getClinics.service";
import getClinicUniqueService from "../../services/public/getUniqueClinic.service";

const getClinicsController = async (res: Response, req: Request) => {
  const clinics = await getClinicsService();
 console.log(clinics)
  return res.status(200).json({clinics});
};

export default  getClinicsController ;
