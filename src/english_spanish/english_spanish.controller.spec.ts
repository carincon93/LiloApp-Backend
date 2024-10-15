import { Test, TestingModule } from '@nestjs/testing';
import { EnglishSpanishController } from './english_spanish.controller';
import { EnglishSpanishService } from './english_spanish.service';

describe('EnglishSpanishController', () => {
  let controller: EnglishSpanishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnglishSpanishController],
      providers: [EnglishSpanishService],
    }).compile();

    controller = module.get<EnglishSpanishController>(EnglishSpanishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
