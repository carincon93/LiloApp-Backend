import { PartialType } from '@nestjs/swagger';
import { CreateEnglishSpanishDto } from './create-english_spanish.dto';

export class UpdateEnglishSpanishDto extends PartialType(CreateEnglishSpanishDto) {}
