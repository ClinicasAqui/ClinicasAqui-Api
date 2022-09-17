import { prisma } from "../../app";
import { errorHandler } from "../../error/errorHandler";

const getClinicsService = async () => {
  const findClinic = await prisma.clinics.findMany({
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
    throw new errorHandler(404, "not clinics found");
  }
  console.log(findClinic);
  return findClinic;
};

export default getClinicsService;
