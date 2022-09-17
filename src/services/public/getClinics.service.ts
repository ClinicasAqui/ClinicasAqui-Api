import { prisma } from "../../app";
import { errorHandler } from "../../error/errorHandler";

const getClinicsService = async () => {
  const findClinic = await prisma.clinics.findMany();

  if (!findClinic) {
    throw new errorHandler(404,"not clinics found");
  }
  console.log(findClinic)
  return findClinic;
};

export default getClinicsService;
