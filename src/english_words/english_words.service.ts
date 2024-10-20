import { Injectable } from '@nestjs/common'
import { CreateEnglishWordDto } from './dto/create-english_word.dto'
import { UpdateEnglishWordDto } from './dto/update-english_word.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class EnglishWordsService {
    constructor(private prisma: PrismaService) {}

    create(createEnglishWordDto: CreateEnglishWordDto) {
        return 'This action adds a new englishWord'
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

    remove(id: number) {
        return `This action removes a #${id} englishWord`
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
