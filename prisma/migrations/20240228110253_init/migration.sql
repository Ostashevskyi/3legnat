/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://www.datocms-assets.com/120281/1709117782-pngwing-com.png',
ADD COLUMN     "lastName" TEXT,
ALTER COLUMN "username" SET NOT NULL;
