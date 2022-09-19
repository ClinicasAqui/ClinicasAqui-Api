-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnClinics" (
    "categoryName" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnClinics_pkey" PRIMARY KEY ("categoryName","clinicName")
);

-- CreateTable
CREATE TABLE "corporation" (
    "id" TEXT NOT NULL,
    "corporation" TEXT NOT NULL,

    CONSTRAINT "corporation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insurance" (
    "id" TEXT NOT NULL,
    "insurance" TEXT NOT NULL,

    CONSTRAINT "insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsurancesOnClinics" (
    "insuranceName" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InsurancesOnClinics_pkey" PRIMARY KEY ("insuranceName","clinicName")
);

-- CreateTable
CREATE TABLE "health_plan" (
    "id" TEXT NOT NULL,
    "healthPlan" TEXT NOT NULL,
    "insuranceName" TEXT NOT NULL,

    CONSTRAINT "health_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthPlanOnClinics" (
    "healthPlanName" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HealthPlanOnClinics_pkey" PRIMARY KEY ("healthPlanName","clinicName")
);

-- CreateTable
CREATE TABLE "treatments" (
    "id" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,

    CONSTRAINT "treatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentsOnClinics" (
    "treatmentsName" TEXT NOT NULL,
    "clinicName" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TreatmentsOnClinics_pkey" PRIMARY KEY ("treatmentsName","clinicName")
);

-- CreateTable
CREATE TABLE "clinics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "authenticated" BOOLEAN,
    "descripition" TEXT,
    "avatar" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CorporationName" TEXT,

    CONSTRAINT "clinics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic_address" (
    "id" TEXT NOT NULL,
    "country" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "distict" TEXT,
    "way" TEXT,
    "number" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ClinicsName" TEXT NOT NULL,

    CONSTRAINT "clinic_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic_images" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "width" TEXT,
    "height" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clinicName" TEXT NOT NULL,

    CONSTRAINT "clinic_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "isVerify" BOOLEAN NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clinicName" TEXT NOT NULL,

    CONSTRAINT "clinic_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic_user_sessions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clinicUserSessionsId" TEXT NOT NULL,

    CONSTRAINT "clinic_user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinic_rating" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "userName" TEXT,
    "userAvatar" TEXT,
    "title" TEXT,
    "message" TEXT,
    "rating" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "ClinicsName" TEXT NOT NULL,

    CONSTRAINT "clinic_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating_reply" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "type" TEXT,
    "userId" TEXT,
    "ClinicsName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ClinicRatingId" TEXT NOT NULL,

    CONSTRAINT "rating_reply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "cpf" TEXT,
    "avatar" TEXT,
    "healthPlanName" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "isAdm" BOOLEAN NOT NULL,
    "isVerify" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicRatingOnUser" (
    "userId" TEXT NOT NULL,
    "ratingId" TEXT NOT NULL,

    CONSTRAINT "ClinicRatingOnUser_pkey" PRIMARY KEY ("userId","ratingId")
);

-- CreateTable
CREATE TABLE "user_address" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT,
    "number" TEXT,
    "distric" TEXT,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "user_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sessions" (
    "id" TEXT NOT NULL,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "corporation_corporation_key" ON "corporation"("corporation");

-- CreateIndex
CREATE UNIQUE INDEX "insurance_insurance_key" ON "insurance"("insurance");

-- CreateIndex
CREATE UNIQUE INDEX "health_plan_healthPlan_key" ON "health_plan"("healthPlan");

-- CreateIndex
CREATE UNIQUE INDEX "treatments_treatment_key" ON "treatments"("treatment");

-- CreateIndex
CREATE UNIQUE INDEX "clinics_name_key" ON "clinics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_address_ClinicsName_key" ON "clinic_address"("ClinicsName");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_users_email_key" ON "clinic_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_users_cpf_key" ON "clinic_users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_address_UserId_key" ON "user_address"("UserId");

-- AddForeignKey
ALTER TABLE "CategoriesOnClinics" ADD CONSTRAINT "CategoriesOnClinics_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "category"("category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnClinics" ADD CONSTRAINT "CategoriesOnClinics_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsurancesOnClinics" ADD CONSTRAINT "InsurancesOnClinics_insuranceName_fkey" FOREIGN KEY ("insuranceName") REFERENCES "insurance"("insurance") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsurancesOnClinics" ADD CONSTRAINT "InsurancesOnClinics_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_plan" ADD CONSTRAINT "health_plan_insuranceName_fkey" FOREIGN KEY ("insuranceName") REFERENCES "insurance"("insurance") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPlanOnClinics" ADD CONSTRAINT "HealthPlanOnClinics_healthPlanName_fkey" FOREIGN KEY ("healthPlanName") REFERENCES "health_plan"("healthPlan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPlanOnClinics" ADD CONSTRAINT "HealthPlanOnClinics_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentsOnClinics" ADD CONSTRAINT "TreatmentsOnClinics_treatmentsName_fkey" FOREIGN KEY ("treatmentsName") REFERENCES "treatments"("treatment") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentsOnClinics" ADD CONSTRAINT "TreatmentsOnClinics_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinics" ADD CONSTRAINT "clinics_CorporationName_fkey" FOREIGN KEY ("CorporationName") REFERENCES "corporation"("corporation") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_address" ADD CONSTRAINT "clinic_address_ClinicsName_fkey" FOREIGN KEY ("ClinicsName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_images" ADD CONSTRAINT "clinic_images_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_users" ADD CONSTRAINT "clinic_users_clinicName_fkey" FOREIGN KEY ("clinicName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_user_sessions" ADD CONSTRAINT "clinic_user_sessions_clinicUserSessionsId_fkey" FOREIGN KEY ("clinicUserSessionsId") REFERENCES "clinic_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_rating" ADD CONSTRAINT "clinic_rating_ClinicsName_fkey" FOREIGN KEY ("ClinicsName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_ClinicsName_fkey" FOREIGN KEY ("ClinicsName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_ClinicRatingId_fkey" FOREIGN KEY ("ClinicRatingId") REFERENCES "clinic_rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_healthPlanName_fkey" FOREIGN KEY ("healthPlanName") REFERENCES "health_plan"("healthPlan") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicRatingOnUser" ADD CONSTRAINT "ClinicRatingOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicRatingOnUser" ADD CONSTRAINT "ClinicRatingOnUser_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "clinic_rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
