import jwt from "jsonwebtoken";
import { compare, compareSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { PrismaClient, Prisma } from '@prisma/client'
import { errorHandler } from "../../error/errorHandler";
import { IUserSession } from "../../interfaces/auth";
import { prisma } from "../../app";


export const loginClinicService = async ({ email, password }: IUserSession) => {
  const findClinicUser = await prisma.clinicUsers.findUnique({where : {email}})

  if (!findClinicUser) {
    throw new errorHandler(403, "Cannot find user");
  }
  const verifyPassword = compareSync(password, findClinicUser.password);

  if (!verifyPassword) {
    throw new errorHandler(403, "Email or Password not match");
  }

  if (!findClinicUser.isVerify) {
    throw new errorHandler(403, "Validate email is requered");
  }

  if (!findClinicUser.isActive) {
    throw new errorHandler(403, "Reactive account first");
  }

  const findClinic = await prisma.clinics.findUnique({where : {name : findClinicUser.clinicName}})

  if (!findClinic) {
    throw new errorHandler(403, "Cannot find clinic");
  }

  const token = jwt.sign(
    {
      emailActive: findClinicUser.isVerify,
      isActive: findClinicUser.isActive,
      id: findClinicUser.id,
      clinic: findClinicUser.clinicName,
      clinicId: findClinic?.id,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "72h", subject: findClinicUser.id }
  );

  const newSession = await prisma.userSessions.create({data: {UserId : findClinicUser.id}});

  return token;
};
