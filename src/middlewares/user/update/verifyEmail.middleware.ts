import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../../../error/errorHandler";
import jwt from "jsonwebtoken";

export const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenEmail = req.params.hash;

  const response = await jwt.verify(
    tokenEmail as string,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new errorHandler(401, "Invalid Token");
      }     
      req.user = {
        isAdm: decoded.isAdm,
        isVerify : decoded.isVerify,
        isActive: decoded.isActive,
        id: decoded.sub,
      };
      next()
    }
  );
};