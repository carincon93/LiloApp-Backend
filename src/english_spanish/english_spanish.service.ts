import { Injectable } from '@nestjs/common';
import { CreateEnglishSpanishDto } from './dto/create-english_spanish.dto';
import { UpdateEnglishSpanishDto } from './dto/update-english_spanish.dto';

@Injectable()
export class EnglishSpanishService {
  create(createEnglishSpanishDto: CreateEnglishSpanishDto) {
    return 'This action adds a new englishSpanish';
  }

  findAll() {
    return `This action returns all englishSpanish`;
  }

  findOne(id: number) {
    return `This action returns a #${id} englishSpanish`;
  }

  update(id: number, updateEnglishSpanishDto: UpdateEnglishSpanishDto) {
    return `This action updates a #${id} englishSpanish`;
  }

  remove(id: number) {
    return `This action removes a #${id} englishSpanish`;
  }
}
