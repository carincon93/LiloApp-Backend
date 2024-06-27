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

    findAll() {
        return this.prisma.italianWords.findMany()
    }

    findOne(id: number) {
        return `This action returns a #${id} italianWord`
    }

    update(id: number, updateItalianWordDto: UpdateItalianWordDto) {
        return `This action updates a #${id} italianWord`
    }

    remove(id: number) {
        return `This action removes a #${id} italianWord`
    }
}
