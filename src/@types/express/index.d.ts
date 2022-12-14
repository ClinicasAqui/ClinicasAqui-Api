import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        isAdm: boolean;
        isVerify: boolean
        isActive: boolean;
        id: string;
      };
      findClinicUser: {
        emailActive: boolean
        isActive: boolean;
        id: string;
        clinic: string;
        clinicId: string;
      };
    }
  }
}
