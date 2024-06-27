import { Test, TestingModule } from '@nestjs/testing';
import { EnglishWordsController } from './english_words.controller';
import { EnglishWordsService } from './english_words.service';

describe('EnglishWordsController', () => {
  let controller: EnglishWordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnglishWordsController],
      providers: [EnglishWordsService],
    }).compile();

    controller = module.get<EnglishWordsController>(EnglishWordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
