import { Response, Request } from "express";
import { prisma } from "../../../../app";
import { errorHandler } from "../../../../error/errorHandler";

export const verifyUserEmailService = async (id: string) => {
  const findUser = await prisma.users.findUnique({ where: { id } });

  if (!findUser) {
    throw new errorHandler(404, "User not found");
  }

  if (findUser.isVerify) {
    throw new errorHandler(400, "user is already verified");
  }

  await prisma.users.update({ where : { id : findUser.id}, data : { isVerify : true}})

  return
};
