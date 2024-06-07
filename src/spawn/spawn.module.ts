import { Module } from '@nestjs/common';
import { SpawnController } from './spawn.controller';

@Module({
  controllers: [SpawnController]
})
export class SpawnModule {}
