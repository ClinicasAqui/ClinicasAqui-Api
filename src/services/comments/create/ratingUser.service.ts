import { errorHandler } from "../../../error/errorHandler";
import { prisma } from "../../../app";
import { ICreateReplyUser } from "../../../interfaces/comments";

export const ratingUserService = async ({
  title,
  message,
  rating,
  clinicId,
}: ICreateReplyUser) => {
  const findClinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });

  if (!findClinic) {
    throw new errorHandler(400, "clinic not found");
  }

  const findUser = await prisma.users.findUnique({
    where: { id: clinicId },
  });

  if (!findUser) {
    throw new errorHandler(400, "clinic not found");
  }

  const newReply = await prisma.clinicRating.create({
    data: {
      user: findUser.id,
      userName: findUser.name,
      userAvatar: findUser.avatar,
      title,
      message,
      rating,
      ClinicsName: findClinic.name,
    },
  });

  const connectReplyUser = await prisma.clinicRatingOnUser.create({
    data: { ratingId: newReply.id, userId: findUser.id },
  });

  return
};
