import { Test, TestingModule } from '@nestjs/testing';
import { ItalianWordsController } from './italian_words.controller';
import { ItalianWordsService } from './italian_words.service';

describe('ItalianWordsController', () => {
  let controller: ItalianWordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItalianWordsController],
      providers: [ItalianWordsService],
    }).compile();

    controller = module.get<ItalianWordsController>(ItalianWordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
