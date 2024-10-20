import { Injectable } from '@nestjs/common'
import { CreateEnglishWordDto } from './dto/create-english_word.dto'
import { UpdateEnglishWordDto } from './dto/update-english_word.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class EnglishWordsService {
    constructor(private prisma: PrismaService) {}

    async create(createEnglishWordDto: CreateEnglishWordDto) {
        // Establecer la semana en 30
        createEnglishWordDto.week = 30

        // Separar las traducciones
        const translations = createEnglishWordDto.translations

        // Eliminar el campo 'translations' del DTO original
        delete createEnglishWordDto.translations

        // Crear la palabra en inglés
        const englishWord = await this.prisma.englishWords.create({
            data: createEnglishWordDto,
        })

        // Crear las traducciones asociadas
        const translationPromises = translations.split(',').map((item) =>
            this.prisma.englishSpanish.create({
                data: {
                    englishWordId: englishWord.id,
                    translation: item.trim(), // Eliminar espacios en blanco innecesarios
                },
            }),
        )

        // Esperar a que todas las promesas de creación de traducciones se completen
        await Promise.all(translationPromises)

        // Devolver la palabra en inglés creada
        return englishWord
    }

    async findAll() {
        return await this.prisma.englishWords.findMany({
            include: { englishSpanish: true },
            orderBy: { word: 'asc' },
        })
    }

    findOne(id: number) {
        return `This action returns a #${id} englishWord`
    }

    findByWeek(week: number) {
        return this.prisma.englishWords.findMany({
            where: {
                week: week,
            },
            include: { englishSpanish: true },
        })
    }

    update(id: number, updateEnglishWordDto: UpdateEnglishWordDto) {
        return `This action updates a #${id} englishWord`
    }

    async remove(id: string) {
        await this.prisma.englishSpanish.deleteMany({
            where: {
                englishWordId: id,
            },
        })

        return this.prisma.englishWords.delete({
            where: {
                id: id,
            },
        })
    }

    async updateWeeks() {
        // Consultar y mezclar las palabras ordenadas alfabéticamente
        const words = await this.prisma.englishWords.findMany({
            orderBy: {
                word: 'asc',
            },
        })

        // Mezclar las palabras (si es necesario)
        const shuffledWords = this.shuffleArray(words)

        // Actualizar el campo 'week' en grupos de 100 palabras
        const batchSize = 100
        let currentWeek = 1

        for (let i = 0; i < shuffledWords.length; i += batchSize) {
            const batch = shuffledWords.slice(i, i + batchSize)

            // Preparar las actualizaciones en lote
            const updates = batch.map((word, index) => {
                return this.prisma.englishWords.update({
                    where: { id: word.id },
                    data: {
                        week: currentWeek,
                    },
                })
            })

            // Ejecutar las actualizaciones en bote (en paralelo)
            await this.prisma.$transaction(updates)

            // Incrementar el contador de semana
            currentWeek++
        }
    }

    private shuffleArray<T>(array: T[]): T[] {
        // Algoritmo de mezcla Fisher-Yates para mezclar el array
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }
}
