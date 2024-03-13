-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
