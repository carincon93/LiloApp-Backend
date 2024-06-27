import { Injectable } from '@nestjs/common'
import { CreateItalianWordDto } from './dto/create-italian_word.dto'
import { UpdateItalianWordDto } from './dto/update-italian_word.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ItalianWordsService {
    constructor(private prisma: PrismaService) {}

    create(createItalianWordDto: CreateItalianWordDto) {
        return 'This action adds a new italianWord'
    }

    async findAll() {
        return this.prisma.italianWords.findMany()
    }

    findOne(id: number) {
        return `This action returns a #${id} italianWord`
    }

    findByWeek(week: number) {
        return this.prisma.italianWords.findMany({
            where: {
                week: week,
            },
        })
    }

    update(id: number, updateItalianWordDto: UpdateItalianWordDto) {
        return `This action updates a #${id} italianWord`
    }

    remove(id: number) {
        return `This action removes a #${id} italianWord`
    }

    async updateWeeks() {
        // Consultar y mezclar las palabras ordenadas alfabéticamente
        const words = await this.prisma.italianWords.findMany({
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
                return this.prisma.italianWords.update({
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
