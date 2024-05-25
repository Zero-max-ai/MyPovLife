/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_imageId_fkey";

-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "Tags";
