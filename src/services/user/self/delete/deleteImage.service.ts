import { PrismaClient } from "@prisma/client";
import AppDataSource from "../../../../data-source";
import { errorHandler } from "../../../../error/errorHandler"; 
import { prisma } from "../../../../app";

export const deleteUserImageService = async (
  userId : string
): Promise<void> => {
  const findUser = await prisma.users.findUnique({ where: { id : userId } });

  if (!findUser) {
    throw new errorHandler(400, "user not found");
  }

  const newImage = await prisma.users.update({where : { id : userId}, data : {avatar : null}})

  return;
};