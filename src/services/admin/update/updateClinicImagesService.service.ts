import { errorHandler } from "../../../error/errorHandler";
import { compareSync } from "bcryptjs";
import { cloudinaryResponse } from "../../../interfaces/images";
import { prisma } from "../../../app";

export const updateClinicImagesService = async (
  clinicId: string,
  cloudinaryRespo: cloudinaryResponse[] | any
): Promise<void> => {
  if (cloudinaryRespo.length === 0) {
    throw new errorHandler(400, "invalid required fields");
  }

  if (cloudinaryRespo.length > 1) {
    throw new errorHandler(400, "invalid required fields");
  }

  const findClinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });

  if (!findClinic) {
    throw new errorHandler(400, "clinic not found");
  }
  
  for (let index = 0; index < cloudinaryRespo.length; index++) {
    const image = cloudinaryRespo[index];

    const newImage = await prisma.clinicImages.create({
      data: {
        link: image.url,
        height: image.height,
        width: image.width,
        clinicName: findClinic.name,
      },
    });
  }

  return;
};
