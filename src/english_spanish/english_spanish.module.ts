import { Module } from '@nestjs/common'
import { EnglishSpanishService } from './english_spanish.service'
import { EnglishSpanishController } from './english_spanish.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
    controllers: [EnglishSpanishController],
    providers: [EnglishSpanishService],
    imports: [PrismaModule],
})
export class EnglishSpanishModule {}
