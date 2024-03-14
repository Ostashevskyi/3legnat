/*
  Warnings:

  - Added the required column `delivery_price` to the `ShoppingCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingCart" ADD COLUMN     "delivery_price" TEXT NOT NULL;
