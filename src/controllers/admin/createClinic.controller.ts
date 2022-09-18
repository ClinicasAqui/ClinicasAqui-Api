import { Request, Response } from "express";
import { ICreateCLinic } from "../../interfaces/admin/createUser";
import { admCreateClinicService } from "../../services/admin/admCreateClinic.service";

export const admCreateClinicController = async (
  req: Request,
  res: Response
) => {
  const {
    name,
    cnpj,
    authenticated,
    descripition,
    phone,
    clinicAddress,
    CorporationName,
    treatments,
    insurances,
    healthPlans,
    categories,
  }: ICreateCLinic = req.body;

  const message = await admCreateClinicService({
    name,
    cnpj,
    authenticated,
    descripition,
    phone,
    clinicAddress,
    CorporationName,
    treatments,
    insurances,
    healthPlans,
    categories,
  });

  return res.status(201).json({ message });
};
