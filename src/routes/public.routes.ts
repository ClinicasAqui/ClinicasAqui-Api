import { Router } from "express";
import { getClinicsController } from "../controllers/public/getClinics.controller copy";
import { getUniqueClinicController } from "../controllers/public/getUniqueClinic.controller";
import { verifyUuidParamsMiddleware } from "../middlewares/public/verifyUuidParams.middleware";

const publicRoutes = Router();

publicRoutes.all("/clinics/", getClinicsController);

publicRoutes.get(
  "/clinic/:id",
  verifyUuidParamsMiddleware,
  getUniqueClinicController
);

export default publicRoutes;
