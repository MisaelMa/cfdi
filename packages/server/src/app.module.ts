import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecreandoModule } from './recreando/recreando.module';

/**
 *
 */
@Module({
  controllers: [AppController],
  imports: [RecreandoModule],
  providers: [AppService],
})
export class AppModule { }
