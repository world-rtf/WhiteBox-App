-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
