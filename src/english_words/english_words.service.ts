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

    findAll() {
        return this.prisma.englishWords.findMany()
    }

    findOne(id: number) {
        return `This action returns a #${id} englishWord`
    }

    update(id: number, updateEnglishWordDto: UpdateEnglishWordDto) {
        return `This action updates a #${id} englishWord`
    }

    remove(id: number) {
        return `This action removes a #${id} englishWord`
    }
}
