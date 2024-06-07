import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpawnModule } from './spawn/spawn.module';

@Module({
  imports: [SpawnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
