/*
  Warnings:

  - You are about to drop the column `jwt_secret` on the `Owner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "jwt_secret";
