/*
  Warnings:

  - You are about to drop the column `foto` on the `Mascotas` table. All the data in the column will be lost.
  - Added the required column `imagen` to the `Mascotas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mascotas" DROP COLUMN "foto",
ADD COLUMN     "imagen" TEXT NOT NULL;
