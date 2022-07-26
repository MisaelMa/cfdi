import { Module } from '@nestjs/common';
import { CfdiModule } from './cfdi/cfdi.module';

@Module({
  imports: [CfdiModule]
})
export class RecreandoModule {}
