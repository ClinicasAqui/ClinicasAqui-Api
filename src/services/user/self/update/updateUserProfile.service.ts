import AppDataSource from "../../../../data-source";
import { errorHandler } from "../../../../error/errorHandler"; 
import { compareSync } from "bcryptjs";
import { cloudinaryResponse } from "../../../../interfaces/images"; 
import { prisma } from "../../../../app";

export const updateUserImageService = async (
  userId: string,
  cloudinaryRespo: cloudinaryResponse[] | any
): Promise<void> => {
  if (cloudinaryRespo.length === 0) {
    throw new errorHandler(400, "invalid required fields");
  }

  if (cloudinaryRespo.length > 1) {
    throw new errorHandler(400, "invalid required fields");
  }

  const findUser = await prisma.users.findUnique({ where: { id : userId } });

  if (!findUser) {
    throw new errorHandler(400, "user not found");
  }

  const url : string = cloudinaryRespo[0].url;

  const newImage = await prisma.users.update({where : { id : userId}, data : {avatar : url}})

  return;
};
