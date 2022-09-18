import { Response, Request, NextFunction } from "express";
import { errorHandler } from "../../error/errorHandler";

export const imageHeadersMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (!JSON.stringify(req.headers).includes("multipart/form-data")) {
    throw new errorHandler(400, "Multipart headers missing")
  }
  next()
};
