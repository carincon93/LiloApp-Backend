/*
  Warnings:

  - You are about to drop the `DreamCalendario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dreams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ejercicios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GruposMusculares` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mascotas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sesiones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserMascota` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DreamCalendario" DROP CONSTRAINT "DreamCalendario_dreamId_fkey";

-- DropForeignKey
ALTER TABLE "Dreams" DROP CONSTRAINT "Dreams_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicios" DROP CONSTRAINT "Ejercicios_grupoMuscularId_fkey";

-- DropForeignKey
ALTER TABLE "Sesiones" DROP CONSTRAINT "Sesiones_ejercicioId_fkey";

-- DropForeignKey
ALTER TABLE "Sesiones" DROP CONSTRAINT "Sesiones_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserMascota" DROP CONSTRAINT "UserMascota_mascotaId_fkey";

-- DropForeignKey
ALTER TABLE "UserMascota" DROP CONSTRAINT "UserMascota_userId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_mascotaId_fkey";

-- DropTable
DROP TABLE "DreamCalendario";

-- DropTable
DROP TABLE "Dreams";

-- DropTable
DROP TABLE "Ejercicios";

-- DropTable
DROP TABLE "GruposMusculares";

-- DropTable
DROP TABLE "Mascotas";

-- DropTable
DROP TABLE "Sesiones";

-- DropTable
DROP TABLE "UserMascota";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "EnglishWords" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "word" VARCHAR(25) NOT NULL,
    "meaning" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "EnglishWords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnglishWords_word_key" ON "EnglishWords"("word");

-- CreateIndex
CREATE UNIQUE INDEX "EnglishWords_meaning_key" ON "EnglishWords"("meaning");
