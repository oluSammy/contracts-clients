/*
  Warnings:

  - Added the required column `status` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'TERMINATED');

-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "status" "ContractStatus" NOT NULL;

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "amountPaid" INTEGER NOT NULL DEFAULT 0,
    "contractId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
