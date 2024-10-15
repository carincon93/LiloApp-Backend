import { Test, TestingModule } from '@nestjs/testing';
import { EnglishSpanishService } from './english_spanish.service';

describe('EnglishSpanishService', () => {
  let service: EnglishSpanishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnglishSpanishService],
    }).compile();

    service = module.get<EnglishSpanishService>(EnglishSpanishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
