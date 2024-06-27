import { PartialType } from '@nestjs/swagger';
import { CreateItalianWordDto } from './create-italian_word.dto';

export class UpdateItalianWordDto extends PartialType(CreateItalianWordDto) {}
