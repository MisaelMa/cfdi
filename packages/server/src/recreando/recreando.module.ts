import { Module } from '@nestjs/common';
import { CfdiModule } from './cfdi/cfdi.module';
import { OpensslModule } from './openssl/openssl.module';

@Module({
  imports: [CfdiModule, OpensslModule]
})
export class RecreandoModule {}
