import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../../error/errorHandler";

export const admSecretKeyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secreKey = req.body.secret;

  if (!secreKey) {
    throw new errorHandler(
      401,
      "to access this route you need to send a secret key"
    );
  }

  if (secreKey !== process.env.ADM_SECRET_KEY) {
    throw new errorHandler(401, "missing authorization permissions");
  }
  next();
};
