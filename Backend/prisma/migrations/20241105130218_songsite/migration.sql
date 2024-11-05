-- CreateTable
CREATE TABLE "songName" (
    "id" SERIAL NOT NULL,
    "songName" TEXT NOT NULL,
    "duration" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "songName_id_key" ON "songName"("id");
