import { Controller, Post } from '@nestjs/common';
import { UpdateDataService } from './update-data.service';

@Controller('update-data')
export class UpdateDataController {
  constructor(private readonly updateDataService: UpdateDataService) {}

  @Post()
  updateData() {
    return this.updateDataService.updateData();
  }
}
