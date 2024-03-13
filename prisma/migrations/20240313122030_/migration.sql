/*
  Warnings:

  - Added the required column `user_image` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "user_image" TEXT NOT NULL;
