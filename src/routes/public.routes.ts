import { Router } from "express";
import {
  getClinicsController,
  getUniqueClinicsController,
} from "../controllers/public/getClinics.controller";
import { errorMiddleware } from "../middlewares/error/error.middleware";
import { verifyUuidParamsMiddleware } from "../middlewares/public/verifyUuidParams.middleware";

const publicRoutes = Router();

publicRoutes.get("", ()=> getClinicsController);

publicRoutes.get("/clinics",  getClinicsController);

// publicRoutes.get(
//   "/clinic/:id",
//   verifyUuidParamsMiddleware,
//   getUniqueClinicsController
// );

export default publicRoutes;
