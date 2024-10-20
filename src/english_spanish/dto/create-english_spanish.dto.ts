import { ApiProperty } from '@nestjs/swagger'

export class CreateEnglishSpanishDto {
    id: string

    @ApiProperty()
    englishWordId: string

    @ApiProperty()
    translation: string
}
