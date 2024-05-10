-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "deviceName" TEXT NOT NULL,
    "uploadedData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Images_link_key" ON "Images"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_title_key" ON "Tags"("title");

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
