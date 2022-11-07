import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { RecreandoModule } from './recreando/recreando.module';

@Module({
  controllers: [AppController],
  imports: [RecreandoModule],
})
export class AppModule {}
