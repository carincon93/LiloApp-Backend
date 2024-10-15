import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EnglishSpanishService } from './english_spanish.service'
import { CreateEnglishSpanishDto } from './dto/create-english_spanish.dto'
import { UpdateEnglishSpanishDto } from './dto/update-english_spanish.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('English Spanish')
@Controller('english-spanish')
export class EnglishSpanishController {
    constructor(private readonly englishSpanishService: EnglishSpanishService) {}

    @Post()
    create(@Body() createEnglishSpanishDto: CreateEnglishSpanishDto) {
        return this.englishSpanishService.create(createEnglishSpanishDto)
    }

    @Get()
    findAll() {
        return this.englishSpanishService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.englishSpanishService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEnglishSpanishDto: UpdateEnglishSpanishDto) {
        return this.englishSpanishService.update(+id, updateEnglishSpanishDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.englishSpanishService.remove(+id)
    }
}
