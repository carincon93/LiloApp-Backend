import { Test, TestingModule } from '@nestjs/testing';
import { ItalianWordsService } from './italian_words.service';

describe('ItalianWordsService', () => {
  let service: ItalianWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItalianWordsService],
    }).compile();

    service = module.get<ItalianWordsService>(ItalianWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
