import { Controller, Get } from '@nestjs/common';
import { ReadDataService } from './read-data.service';

@Controller('read-data')
export class ReadDataController {
  constructor(private readonly readDataService: ReadDataService) {}

  @Get()
  getData() {
    return this.readDataService.getData();
  }
}
