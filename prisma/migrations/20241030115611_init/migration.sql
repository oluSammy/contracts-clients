-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "contractorId" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
