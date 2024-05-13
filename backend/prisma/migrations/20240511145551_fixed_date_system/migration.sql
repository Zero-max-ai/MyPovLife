/*
  Warnings:

  - You are about to drop the column `uploadedData` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "uploadedData",
ADD COLUMN     "uploadedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
