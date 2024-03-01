/*
  Warnings:

  - You are about to drop the column `city` on the `BillingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `BillingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `BillingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `BillingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `postcode` on the `BillingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `street_address` on the `BillingAddress` table. All the data in the column will be lost.
  - Added the required column `card_number` to the `BillingAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvv` to the `BillingAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiration_date` to the `BillingAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "BillingAddress_email_key";

-- AlterTable
ALTER TABLE "BillingAddress" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "postcode",
DROP COLUMN "street_address",
ADD COLUMN     "card_number" TEXT NOT NULL,
ADD COLUMN     "cvv" TEXT NOT NULL,
ADD COLUMN     "expiration_date" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ShippingAddress" (
    "id" SERIAL NOT NULL,
    "preset_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "ShippingAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_phone_key" ON "ShippingAddress"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_email_key" ON "ShippingAddress"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_user_id_key" ON "ShippingAddress"("user_id");
