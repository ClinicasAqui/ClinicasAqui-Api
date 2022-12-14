import jwt from "jsonwebtoken";
import { compare, compareSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { PrismaClient, Prisma } from '@prisma/client'
import { errorHandler } from "../../error/errorHandler";
import { IUserSession } from "../../interfaces/auth";
import { prisma } from "../../app";


export const loginService = async ({ email, password, ip }: any) => {
  
  const findUser = await prisma.users.findUnique({where : {email}})

  if (!findUser) {
    throw new errorHandler(403, "Email or Password not match");
  }
  const verifyPassword = compareSync(password, findUser.password);

  if (verifyPassword) {
    throw new errorHandler(403, "Email or Password not match");
  }

  if (!findUser.isVerify) {
    throw new errorHandler(403, "Validate email is requered");
  }

  if (!findUser.isActive) {
    throw new errorHandler(403, "Reactive account first");
  }

  const token = jwt.sign(
    {
      isActive: findUser.isActive,
      isAdm: findUser.isAdm,
      isVerify: findUser.isVerify,
      id: findUser.id,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "72h", subject: findUser.id }
  );

  const newSession = await prisma.userSessions.create({data: {UserId : findUser.id, ip}});

  return token;
};
