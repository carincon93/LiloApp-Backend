import { PartialType } from '@nestjs/swagger';
import { CreateEnglishWordDto } from './create-english_word.dto';

export class UpdateEnglishWordDto extends PartialType(CreateEnglishWordDto) {}
