import { ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { errorHandler } from "../../error/errorHandler";

export const schemasMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    try {
      const validationData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });
      next();
    } catch (error : any) {
      const { name, message, errors } = error as ValidationError;
      throw new errorHandler(400, `error: ${[...errors]}`);
    }
  };