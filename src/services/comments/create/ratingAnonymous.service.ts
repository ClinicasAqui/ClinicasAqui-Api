import { errorHandler } from "../../../error/errorHandler";
import { prisma } from "../../../app";
import { ICreateReplyAnonymous } from "../../../interfaces/comments";

export const ratingAnonymousService = async ({
  title,
  message,
  rating,
  clinicId,
}: ICreateReplyAnonymous) => {
  const findClinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });

  if (!findClinic) {
    throw new errorHandler(400, "clinic not found");
  }

  const newReply = await prisma.clinicRating.create({
    data: { title, message, rating , ClinicsName: findClinic.name},
  });


};
