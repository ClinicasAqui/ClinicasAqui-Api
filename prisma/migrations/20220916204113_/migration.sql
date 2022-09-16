-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "health_plan" (
    "id" TEXT NOT NULL,
    "healtPlan" TEXT NOT NULL,
    "insuranceName" TEXT NOT NULL,

    CONSTRAINT "health_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "treatments" (
    "id" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,

    CONSTRAINT "treatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" INTEGER,
    "authenticated" BOOLEAN,
    "descripition" TEXT,
    "avatar" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CategoryId" TEXT,
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
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
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
    "message" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "ClinicsName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

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
    "healthPlanId" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "isAdm" BOOLEAN NOT NULL,
    "isVerify" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClinicsToTreatments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClinicsToInsurance" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClinicsToHealthPlan" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "corporation_corporation_key" ON "corporation"("corporation");

-- CreateIndex
CREATE UNIQUE INDEX "insurance_insurance_key" ON "insurance"("insurance");

-- CreateIndex
CREATE UNIQUE INDEX "health_plan_healtPlan_key" ON "health_plan"("healtPlan");

-- CreateIndex
CREATE UNIQUE INDEX "clinics_name_key" ON "clinics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clinics_cnpj_key" ON "clinics"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_address_ClinicsName_key" ON "clinic_address"("ClinicsName");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_users_email_key" ON "clinic_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_users_cpf_key" ON "clinic_users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clinic_user_sessions_clinicUserSessionsId_key" ON "clinic_user_sessions"("clinicUserSessionsId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_healthPlanId_key" ON "users"("healthPlanId");

-- CreateIndex
CREATE UNIQUE INDEX "user_address_UserId_key" ON "user_address"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicsToTreatments_AB_unique" ON "_ClinicsToTreatments"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicsToTreatments_B_index" ON "_ClinicsToTreatments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicsToInsurance_AB_unique" ON "_ClinicsToInsurance"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicsToInsurance_B_index" ON "_ClinicsToInsurance"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicsToHealthPlan_AB_unique" ON "_ClinicsToHealthPlan"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicsToHealthPlan_B_index" ON "_ClinicsToHealthPlan"("B");

-- AddForeignKey
ALTER TABLE "health_plan" ADD CONSTRAINT "health_plan_insuranceName_fkey" FOREIGN KEY ("insuranceName") REFERENCES "insurance"("insurance") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinics" ADD CONSTRAINT "clinics_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "clinic_rating" ADD CONSTRAINT "clinic_rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_ClinicsName_fkey" FOREIGN KEY ("ClinicsName") REFERENCES "clinics"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_reply" ADD CONSTRAINT "rating_reply_ClinicRatingId_fkey" FOREIGN KEY ("ClinicRatingId") REFERENCES "clinic_rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_healthPlanId_fkey" FOREIGN KEY ("healthPlanId") REFERENCES "health_plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToTreatments" ADD CONSTRAINT "_ClinicsToTreatments_A_fkey" FOREIGN KEY ("A") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToTreatments" ADD CONSTRAINT "_ClinicsToTreatments_B_fkey" FOREIGN KEY ("B") REFERENCES "treatments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToInsurance" ADD CONSTRAINT "_ClinicsToInsurance_A_fkey" FOREIGN KEY ("A") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToInsurance" ADD CONSTRAINT "_ClinicsToInsurance_B_fkey" FOREIGN KEY ("B") REFERENCES "insurance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToHealthPlan" ADD CONSTRAINT "_ClinicsToHealthPlan_A_fkey" FOREIGN KEY ("A") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicsToHealthPlan" ADD CONSTRAINT "_ClinicsToHealthPlan_B_fkey" FOREIGN KEY ("B") REFERENCES "health_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
