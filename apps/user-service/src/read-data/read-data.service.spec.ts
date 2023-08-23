import { Test, TestingModule } from '@nestjs/testing';
import { ReadDataService } from './read-data.service';

describe('ReadDataService', () => {
  let service: ReadDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadDataService],
    }).compile();

    service = module.get<ReadDataService>(ReadDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
