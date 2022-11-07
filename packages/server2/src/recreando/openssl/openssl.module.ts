import { Module } from '@nestjs/common';
import { OpensslController } from './openssl.controller';

@Module({
  controllers: [OpensslController]
})
export class OpensslModule {}
