import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';
import { LoggerAdapter } from '@lib/logger';

async function bootstrap() {
  const logger = new Logger('HelloWorld');
  const { HELLO_WORLD_PORT } = process.env;
  const app = await NestFactory.create(MainModule, {
    logger: new LoggerAdapter('HelloWorld'),
  });
  await app.listen(HELLO_WORLD_PORT);
  logger.log(`this service is listening on port ${await app.getUrl()}`);
}
bootstrap();
