/*
  Warnings:

  - Added the required column `format` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "format" TEXT NOT NULL,
ALTER COLUMN "tags" SET NOT NULL,
ALTER COLUMN "tags" SET DATA TYPE TEXT;
