import { Module } from '@nestjs/common';
import { UpdateDataService } from './update-data.service';
import { UpdateDataController } from './update-data.controller';

@Module({
  providers: [UpdateDataService],
  controllers: [UpdateDataController],
})
export class UpdateDataModule {}
