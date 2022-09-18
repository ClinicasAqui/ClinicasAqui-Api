import { prisma } from "../../app";
import { errorHandler } from "../../error/errorHandler";
import { uuid } from "../../interfaces/public";

const getUniqueClinicService = async ({ id }:uuid) => {
  const findClinic = await prisma.clinics.findUnique({
    where: { id },
    include: {
      clinicAddress: true,
      clinicImages: true,
      category: true,
      clinicRating: true,
      corporation: true,
      healthPlan: true,
      insurance: true,
      treatments: true,
      ratingReply: true,
    },
  });

  if (!findClinic) {
    throw new errorHandler(404, "Clinic not found");
  }

  return findClinic;
};

export default getUniqueClinicService;
