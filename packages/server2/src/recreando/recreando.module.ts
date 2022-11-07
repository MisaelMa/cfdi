import { CfdiModule } from './cfdi/cfdi.module';
import { Module } from '@nestjs/common';
import { OpensslModule } from './openssl/openssl.module';

@Module({
  imports: [CfdiModule, OpensslModule],
})
export class RecreandoModule {}
