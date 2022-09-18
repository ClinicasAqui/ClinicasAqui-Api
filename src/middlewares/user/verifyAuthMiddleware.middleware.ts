import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { errorHandler } from "../../error/errorHandler";

export const verifyAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new errorHandler(
      401,
      "to access this route you need to send a token"
    );
  }

  token = token.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new errorHandler(401, "Invalid Token");
      }
      req.user = {
        isActive: decoded.isActive,
        id: decoded.sub,
        isAdm: decoded.isAdm,
        isVerify: decoded.isVerify,
      };

      if (!req.user.isVerify) {
        throw new errorHandler(401, "verify email is require" + token);
      }

      if (!req.user.isActive) {
        throw new errorHandler(401, "user is not Active");
      }
      next();
    }
  );
};
