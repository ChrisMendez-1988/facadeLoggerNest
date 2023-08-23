import { LoggerService } from '@nestjs/common';
import { pino } from 'pino';

export class LoggerAdapter implements LoggerService {
  private logger = pino();

  constructor(name: string) {
    this.logger = pino({
      name,
      level: 'debug',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    });
  }

  public log(message: string, ...optionalParams: any[]) {
    this.logger.info(message, optionalParams);
  }

  public debug(message: string, ...optionalParams: any[]) {
    this.logger.debug(message, optionalParams);
  }

  public warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, optionalParams);
  }

  public error(message: string, ...optionalParams: any[]) {
    this.logger.error(message, optionalParams);
  }
}
