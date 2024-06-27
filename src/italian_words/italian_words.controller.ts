import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ItalianWordsService } from './italian_words.service'
import { CreateItalianWordDto } from './dto/create-italian_word.dto'
import { UpdateItalianWordDto } from './dto/update-italian_word.dto'

@Controller('italian-words')
export class ItalianWordsController {
    constructor(private readonly italianWordsService: ItalianWordsService) {}

    @Post()
    create(@Body() createItalianWordDto: CreateItalianWordDto) {
        return this.italianWordsService.create(createItalianWordDto)
    }

    @Get()
    findAll() {
        return this.italianWordsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.italianWordsService.findOne(+id)
    }

    @Get('week/:week')
    findByWeek(@Param('week') week: number) {
        return this.italianWordsService.findByWeek(+week)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateItalianWordDto: UpdateItalianWordDto) {
        return this.italianWordsService.update(+id, updateItalianWordDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.italianWordsService.remove(+id)
    }
}
