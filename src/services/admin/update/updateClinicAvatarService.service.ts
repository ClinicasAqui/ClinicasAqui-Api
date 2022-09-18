import { errorHandler } from "../../../error/errorHandler";
import { compareSync } from "bcryptjs";
import { cloudinaryResponse } from "../../../interfaces/images";
import { prisma } from "../../../app";

export const updateClinicAvatarService = async (
  clinicId: string,
  cloudinaryRespo: cloudinaryResponse[] | any
): Promise<void> => {
  const findClinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });

  if (!findClinic) {
    throw new errorHandler(400, "clinic not found");
  }

  const url : string = cloudinaryRespo[0].url;

  const newImage = await prisma.users.update({where : { id : clinicId}, data : {avatar : url}})

  return;
};
