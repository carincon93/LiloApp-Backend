import { Module } from '@nestjs/common'
import { EnglishWordsService } from './english_words.service'
import { EnglishWordsController } from './english_words.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [EnglishWordsController],
    providers: [EnglishWordsService],
    imports: [PrismaModule],
})
export class EnglishWordsModule {}
