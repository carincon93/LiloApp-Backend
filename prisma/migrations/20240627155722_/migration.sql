-- CreateTable
CREATE TABLE "ItalianWords" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "word" VARCHAR(25) NOT NULL,
    "translation" VARCHAR(50),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ItalianWords_pkey" PRIMARY KEY ("id")
);
