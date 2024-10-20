import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EnglishWordsService } from './english_words.service'
import { CreateEnglishWordDto } from './dto/create-english_word.dto'
import { UpdateEnglishWordDto } from './dto/update-english_word.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('English Words')
@Controller('english-words')
export class EnglishWordsController {
    constructor(private readonly englishWordsService: EnglishWordsService) {}

    @Post()
    create(@Body() createEnglishWordDto: CreateEnglishWordDto) {
        return this.englishWordsService.create(createEnglishWordDto)
    }

    @Get()
    findAll() {
        return this.englishWordsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.englishWordsService.findOne(+id)
    }

    @Get('week/:week')
    findByWeek(@Param('week') week: number) {
        return this.englishWordsService.findByWeek(+week)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEnglishWordDto: UpdateEnglishWordDto) {
        return this.englishWordsService.update(+id, updateEnglishWordDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.englishWordsService.remove(id)
    }
}
