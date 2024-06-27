import { Module } from '@nestjs/common'
import { ItalianWordsService } from './italian_words.service'
import { ItalianWordsController } from './italian_words.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [ItalianWordsController],
    providers: [ItalianWordsService],
    imports: [PrismaModule],
})
export class ItalianWordsModule {}
