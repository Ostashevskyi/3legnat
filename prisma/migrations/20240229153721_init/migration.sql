/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `BillingAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `BillingAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillingAddress" ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BillingAddress_user_id_key" ON "BillingAddress"("user_id");
