import { Injectable } from '@nestjs/common'
import { CreateEnglishSpanishDto } from './dto/create-english_spanish.dto'
import { UpdateEnglishSpanishDto } from './dto/update-english_spanish.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class EnglishSpanishService {
    constructor(private prisma: PrismaService) {}

    create(createEnglishSpanishDto: CreateEnglishSpanishDto) {
        return this.prisma.englishSpanish.create({
            data: createEnglishSpanishDto,
        })
    }

    findAll() {
        return `This action returns all englishSpanish`
    }

    findOne(id: number) {
        return `This action returns a #${id} englishSpanish`
    }

    update(id: number, updateEnglishSpanishDto: UpdateEnglishSpanishDto) {
        return `This action updates a #${id} englishSpanish`
    }

    remove(id: number) {
        return `This action removes a #${id} englishSpanish`
    }
}
