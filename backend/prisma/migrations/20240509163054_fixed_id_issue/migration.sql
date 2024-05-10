/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Images_id_key" ON "Images"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_id_key" ON "Tags"("id");
