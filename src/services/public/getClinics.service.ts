import { prisma } from "../../app";
import { errorHandler } from "../../error/errorHandler";

const getClinicsService = async () => {
  return  await prisma.clinics.findMany({
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
  });;
};

export default getClinicsService;
