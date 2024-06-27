-- CreateTable
CREATE TABLE "Mascotas" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "animal" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Mascotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombreUsuario" VARCHAR(15) NOT NULL,
    "mascotaId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMascota" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombreMascota" VARCHAR(15) NOT NULL,
    "mascotaId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserMascota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GruposMusculares" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "grupoMuscular" VARCHAR(15) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "GruposMusculares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ejercicios" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ejercicio" VARCHAR(25) NOT NULL,
    "grupoMuscularId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sesiones" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "serie" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "userId" UUID NOT NULL,
    "ejercicioId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Sesiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dreams" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "dream" VARCHAR(25) NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Dreams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DreamCalendario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "valor" INTEGER,
    "comentario" TEXT,
    "dreamId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "DreamCalendario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_nombreUsuario_key" ON "Users"("nombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "UserMascota_nombreMascota_key" ON "UserMascota"("nombreMascota");

-- CreateIndex
CREATE UNIQUE INDEX "GruposMusculares_grupoMuscular_key" ON "GruposMusculares"("grupoMuscular");

-- CreateIndex
CREATE UNIQUE INDEX "Ejercicios_ejercicio_key" ON "Ejercicios"("ejercicio");

-- CreateIndex
CREATE UNIQUE INDEX "Dreams_dream_key" ON "Dreams"("dream");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_mascotaId_fkey" FOREIGN KEY ("mascotaId") REFERENCES "Mascotas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMascota" ADD CONSTRAINT "UserMascota_mascotaId_fkey" FOREIGN KEY ("mascotaId") REFERENCES "Mascotas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMascota" ADD CONSTRAINT "UserMascota_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicios" ADD CONSTRAINT "Ejercicios_grupoMuscularId_fkey" FOREIGN KEY ("grupoMuscularId") REFERENCES "GruposMusculares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sesiones" ADD CONSTRAINT "Sesiones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sesiones" ADD CONSTRAINT "Sesiones_ejercicioId_fkey" FOREIGN KEY ("ejercicioId") REFERENCES "Ejercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dreams" ADD CONSTRAINT "Dreams_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DreamCalendario" ADD CONSTRAINT "DreamCalendario_dreamId_fkey" FOREIGN KEY ("dreamId") REFERENCES "Dreams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
