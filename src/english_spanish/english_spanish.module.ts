import { Module } from '@nestjs/common';
import { EnglishSpanishService } from './english_spanish.service';
import { EnglishSpanishController } from './english_spanish.controller';

@Module({
  controllers: [EnglishSpanishController],
  providers: [EnglishSpanishService],
})
export class EnglishSpanishModule {}
