import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('UserService');
  const { USER_SERVICE_PORT } = process.env;
  const app = await NestFactory.create(MainModule);
  await app.listen(USER_SERVICE_PORT);
  logger.log(`this service is listening on port ${await app.getUrl()}`);
}
bootstrap();
