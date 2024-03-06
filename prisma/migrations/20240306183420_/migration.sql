-- CreateTable
CREATE TABLE "Coupouns" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "discount_amount" INTEGER NOT NULL,

    CONSTRAINT "Coupouns_pkey" PRIMARY KEY ("id")
);
