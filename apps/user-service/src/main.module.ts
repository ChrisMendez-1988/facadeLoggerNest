import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ReadDataModule } from './read-data/read-data.module';
import { UpdateDataModule } from './update-data/update-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // ReadDataModule,
    UpdateDataModule,
  ],
})
export class MainModule {}
