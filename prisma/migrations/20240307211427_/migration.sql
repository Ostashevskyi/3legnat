/*
  Warnings:

  - Added the required column `slug` to the `Wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wishlist" ADD COLUMN     "slug" TEXT NOT NULL;
