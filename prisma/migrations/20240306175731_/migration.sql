/*
  Warnings:

  - Changed the type of `delivery_price` on the `ShoppingCart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ShoppingCart" DROP COLUMN "delivery_price",
ADD COLUMN     "delivery_price" INTEGER NOT NULL;
