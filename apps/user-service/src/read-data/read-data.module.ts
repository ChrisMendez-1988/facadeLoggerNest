import { Module } from '@nestjs/common';
import { ReadDataService } from './read-data.service';
import { ReadDataController } from './read-data.controller';

@Module({
  providers: [ReadDataService],
  controllers: [ReadDataController],
})
export class ReadDataModule {}
