import { errorHandler } from "../../../error/errorHandler";
import { ICreateCLinic } from "../../../interfaces/admin/createUser";
import { prisma } from "../../../app";
import { create } from "domain";

export const admCreateClinicService = async ({
  name,
  cnpj,
  authenticated,
  descripition,
  phone,
  avatar,
  clinicAddress,
  CorporationName,
  treatments,
  insurances,
  healthPlans,
  categories,
  images,
}: ICreateCLinic) => {
  const findClinicName = await prisma.clinics.findUnique({ where: { name } });

  if (findClinicName) {
    throw new errorHandler(409, "this clinic name is already registered");
  }

  const newClinic = await prisma.clinics.create({
    data: { name, cnpj, authenticated, descripition, phone, avatar },
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

  if (CorporationName !== undefined) {
    const findCorporationName = await prisma.corporation.findUnique({
      where: { corporation: CorporationName },
    });

    if (!findCorporationName) {
      const newCorporation = await prisma.corporation.create({
        data: { corporation: CorporationName },
      });
    }
    const updateClinicCorporation = await prisma.clinics.update({
      where: { id: newClinic.id },
      data: { CorporationName },
    });
  }

  if (treatments !== undefined) {
    for (let index = 0; index < treatments.length; index++) {
      const treatment = treatments[index];

      const findTreatment = await prisma.treatments.findUnique({
        where: { treatment },
      });

      if (!findTreatment) {
        const newTreatment = await prisma.treatments.create({
          data: {
            treatment,
          },
        });
      }

      const findTreatmentCreated = await prisma.treatments.findUnique({
        where: { treatment },
      });

      const connectTratamentsClinics = await prisma.treatmentsOnClinics.create({
        data: {
          clinicName: newClinic.name,
          treatmentsName: findTreatmentCreated!.treatment,
        },
      });
    }
  }

  if (insurances !== undefined) {
    for (let index = 0; index < insurances.length; index++) {
      const insurance = insurances[index];

      const findInsurance = await prisma.insurance.findUnique({
        where: { insurance },
      });

      if (!findInsurance) {
        const newInsurance = await prisma.insurance.create({
          data: { insurance },
        });
      }

      const findInsuranceCreated = await prisma.insurance.findUnique({
        where: { insurance },
      });

      const connectInsuranceClinics = await prisma.insurancesOnClinics.create({
        data: {
          clinicName: newClinic.name,
          insuranceName: findInsuranceCreated!.insurance,
        },
      });
    }
  }

  if (healthPlans !== undefined) {
    for (let index = 0; index < healthPlans.length; index++) {
      const plan = healthPlans[index];
      const insurance: string = plan.split("@")[0];
      const healthPlan: string = plan.split("@")[1];

      const findInsurance = await prisma.insurance.findUnique({
        where: { insurance },
      });

      if (!findInsurance) {
        const newInsurance = await prisma.insurance.create({
          data: { insurance },
        });
      }
      const findInsuranceCreated = await prisma.insurance.findUnique({
        where: { insurance },
      });

      const findPlan = await prisma.healthPlan.findUnique({
        where: { healthPlan },
      });

      if (!findPlan) {
        const newPlan = await prisma.healthPlan.create({
          data: { healthPlan, insuranceName: findInsuranceCreated!.insurance },
        });
      }

      const findPlanCreated = await prisma.healthPlan.findUnique({
        where: { healthPlan },
      });

      const updateClinicInsurance = await prisma.healthPlanOnClinics.create({
        data: {
          clinicName: newClinic.name,
          healthPlanName: findPlanCreated!.healthPlan,
        },
      });
    }
  }

  if (categories !== undefined) {
    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];

      const findCategory = await prisma.category.findUnique({
        where: { category },
      });

      if (!findCategory) {
        const newCategory = await prisma.category.create({
          data: { category },
        });
      }
      const findCategoryCreated = await prisma.category.findUnique({
        where: { category },
      });

      const connectCategoryClinic = await prisma.categoriesOnClinics.create({
        data: {
          categoryName: findCategoryCreated!.category,
          clinicName: newClinic.name,
        },
      });
    }
  }

  if (images !== undefined) {
    for (let index = 0; index < images.length; index++) {
      const image = images[index];

      const newImage = await prisma.clinicImages.create({
        data: {
          link: image,
          clinicName: newClinic.name,
        },
      });
    }
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
