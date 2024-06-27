/*
  Warnings:

  - You are about to drop the column `meaning` on the `EnglishWords` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "EnglishWords_meaning_key";

-- DropIndex
DROP INDEX "EnglishWords_word_key";

-- AlterTable
ALTER TABLE "EnglishWords" DROP COLUMN "meaning",
ADD COLUMN     "translation" VARCHAR(50);
