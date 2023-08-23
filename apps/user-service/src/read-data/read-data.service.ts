import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ReadDataService {
  logger = new Logger(ReadDataService.name);
  getData() {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
