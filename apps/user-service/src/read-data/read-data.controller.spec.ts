import { Test, TestingModule } from '@nestjs/testing';
import { ReadDataController } from './read-data.controller';

describe('ReadDataController', () => {
  let controller: ReadDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadDataController],
    }).compile();

    controller = module.get<ReadDataController>(ReadDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
