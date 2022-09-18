import { errorHandler } from "../../error/errorHandler";
import { ICreateCLinic } from "../../interfaces/admin/createUser";
import { prisma } from "../../app";

export const admCreateClinicService = async ({
  name,
  cnpj,
  authenticated,
  descripition,
  phone,
  clinicAddress,
}: ICreateCLinic) => {
  const findClinicName = await prisma.clinics.findUnique({ where: { name } });
  
  if (findClinicName) {
    throw new errorHandler(409, "this clinic name is already registered");
  }

  const newClinic = await prisma.clinics.create({
    data: { name, cnpj, authenticated, descripition, phone },
  });

  if (clinicAddress !== undefined) {
    const newAddress = await prisma.clinicAddress.create({
      data: {
        ClinicsName: newClinic.name,
  
        country: clinicAddress?.country,
  
        city: clinicAddress?.city,
  
        state: clinicAddress?.state,
  
        zipCode: clinicAddress?.zipCode,
  
        distict: clinicAddress?.distict,
  
        way: clinicAddress?.way,
  
        number: clinicAddress?.number,
      },
    });
  }


  return await prisma.clinics.findUnique({
    where: { id: newClinic.id },
    include: {
      clinicAddress: true,
      clinicImages: true,
      category: true,
      clinicRating: true,
      clinicUsers: true,
      corporation: true,
      healthPlan: true,
      insurance: true,
      treatments: true,
      ratingReply: true,
    },
  });
};
