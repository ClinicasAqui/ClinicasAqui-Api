import { Router } from "express";
import {
  getClinicsController,
  getUniqueClinicsController,
} from "../controllers/public/getClinics.controller";
import { verifyUuidParamsMiddleware } from "../middlewares/public/verifyUuidParams.middleware";

const publicRoutes = Router();

publicRoutes.get("/clinics",  getClinicsController);

publicRoutes.get(
  "/clinic/:id",
  verifyUuidParamsMiddleware,
  getUniqueClinicsController
);

export default publicRoutes;
