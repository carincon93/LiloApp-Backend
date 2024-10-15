-- CreateTable
CREATE TABLE "EnglishSpanish" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "englishWordId" UUID NOT NULL,
    "translation" VARCHAR(50),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "EnglishSpanish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EnglishSpanish" ADD CONSTRAINT "EnglishSpanish_englishWordId_fkey" FOREIGN KEY ("englishWordId") REFERENCES "EnglishWords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
